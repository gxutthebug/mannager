import axios from 'axios'
import store from '@/store'
import router from '@/router'
import { MessageBox, Message } from 'element-ui'
import { getTimeStamp } from '@/utils/auth'
const TimeOut = 3600 // 定义超时时间

// 是否超时
// 超时逻辑  (当前时间  - 缓存中的时间) 是否大于 时间差
function IsCheckTimeOut() {
  var currentTime = Date.now() // 当前时间戳
  var timeStamp = getTimeStamp() // 缓存时间戳
  return (currentTime - timeStamp) / 1000 > TimeOut
}


const service = axios.create({
  // 如果执行 npm run dev  值为 /api 正确  /api 这个代理只是给开发环境配置的代理
  // 如果执行 npm run build 值为 /prod-api  没关系  运维应该在上线的时候 给你配置上 /prod-api的代理
  baseURL: process.env.VUE_APP_BASE_API, // 设置axios请求的基础的基础地址
  timeout: 5000 // 定义5秒超时
}) // 创建一个axios的实例

// request interceptor
service.interceptors.request.use(config => {
  if (store.getters.token) {
    // 只有在有token的情况下 才有必要去检查时间戳是否超时
    if (IsCheckTimeOut()) {       // 如果它为true表示 过期了
      store.dispatch('user/logout') //  token没用了 因为超时了登出操作
      // 跳转到登录页
      router.push('/login')
      return Promise.reject(new Error('token超时了'))
    }
    // 如果token存在 注入token
    config.headers['Authorization'] = `Bearer ${store.getters.token}`  //用obj.xxx行不行？
  }
  return config // 必须返回配置
}, error => {
  return Promise.reject(error)
}) 

// 响应拦截器
service.interceptors.response.use(response => {
  const { success, message, data } = response.data// axios默认加了一层data
  //   要根据success的成功与否判断是否有业务逻上的错误
  if (success) {
    return data
  } else {
    // 业务已经错误了 还能进then ? 不能 ！ 应该进catch
    console.log("这里出错了1")
    console.log(message)
    Message.error(message) // 提示错误消息
    return Promise.reject(new Error(message))
  }
}, error => {
  console.log("是这里错了2")
  console.log(error)
  if (error.response && error.response.data && error.response.data.code === 10002) {
    // 当等于10002的时候 表示 后端告诉我token超时了
    store.dispatch('user/logout') // 登出action 删除token
    router.push('/login')
  } else {
    Message.error(error.message) // 提示错误信息,这是其他非token过期的错误信息
  }
   return Promise.reject(error)
})

export default service

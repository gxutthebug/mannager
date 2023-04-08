<template>
         <el-row type="flex" justify="space-between" align="middle" style="height: 40px; width: 100%">
            <el-col>
              <!-- 左侧内容 -->
              <span>{{ treeNode.name }}</span>
            </el-col>
            <el-col :span="4">
              <el-row type="flex" justify="end">
                <el-col>{{ treeNode.manager }}</el-col>
                <el-col>
                  <!-- 放置下拉菜单 -->
                  <el-dropdown @command="operateDepts">
                    <!-- 内容 -->
                    <span>操作
                      <i class="el-icon-arrow-down" />
                    </span>
                    <!-- 具名插槽 -->
                    <el-dropdown-menu slot="dropdown">
                      <!-- 下拉选项 -->
                      <el-dropdown-item command="add">添加子部门</el-dropdown-item>
                       <!-- 编辑部门和删除部门只会在子节点上显示 -->
                    <el-dropdown-item v-if="!isRoot" command="edit">编辑部门</el-dropdown-item>
                    <el-dropdown-item v-if="!isRoot" command="del">删除部门</el-dropdown-item>

                    </el-dropdown-menu>
                  </el-dropdown>
                </el-col>
              </el-row>
            <!-- 右侧内容 -->
            </el-col>
          </el-row> 
</template>



<script>
import { delDepartments }  from "@/api/departments"
export default {
    // props可以用数组来接收数据 也可以用对象来接收
  // props: {   props属性: {  配置选项 }  }
  props: {
    treeNode: {
      required: true, // 设置当前数据为必填
      type: Object // 类型是Object
    },
    isRoot: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    // 操作节点调用的方法
   async operateDepts(type) {
      if (type === 'add') {
        // 告诉父组件 显示弹层
        this.$emit('addDepts', this.treeNode) // 为何传出treeNode 因为是添加子部门 需要当前部门的数据
      } else if (type === 'edit') {
        //  编辑部门的操作
        this.$emit('editDepts', this.treeNode)
      } else {
        //  删除操作
        try {
          await this.$confirm('确定要删除该部门吗')
          console.log(this.treeNode.id)
          await delDepartments(this.treeNode.id)
          //  如果删除成功了  就会进入这里
          this.$emit('delDepts') // 触发自定义事件
          // console.log(data)
          this.$message.success('删除部门成功')
        } catch (err) {
          console.log(err)
        }
      }
    }
  },
}
</script>



<style>
</style>
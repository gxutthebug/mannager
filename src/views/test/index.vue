<template>
  <div style="height: 2500px;">
       <el-form>
        <div class="box">
       <div class="rowA1">
        <div class="left">
            <span>基</span>
            <span>本</span>
            <span>情</span>
            <span>况</span>
        </div>
        <div class="right1">
          <div class="rowB1">
            <div style="flex-basis: 13%;">姓名</div>
            <div style="flex-basis: 13%;">
              <el-form-item>
                 <input type="text" >
             </el-form-item>
           </div>
            <div style="flex-basis: 9%; ">性别</div>
            <div style="flex-basis: 9%;">
              <el-form-item>
                 <input type="text" >
             </el-form-item>
            </div>
            <div style="flex-basis: 9%; ">民族</div>
            <div style="flex-basis: 9%;">
              <el-form-item>
                 <input type="text" >
             </el-form-item></div>
            <div style="flex-basis: 10%; ">生日</div>
            <div style="flex-basis: 10%;">
              <el-form-item>
                 <input type="text" >
             </el-form-item>
            </div>
            <div style="flex-basis: 9%; ">籍贯</div>
            <div style="flex-basis: 9%;">
              <el-form-item>
                 <input type="text" >
             </el-form-item>
            </div>
          </div>
          <div class="rowB2" > 
            <div style="flex-basis: 13%; white-space: pre-wrap;" class="split">
              <span>单位丶职务</span>
              <span>或职业</span>
            </div>
            <div style="flex-basis: 40%;">
              <el-form-item>
                 <input type="text" >
             </el-form-item>
            </div>
            <div style="flex-basis: 17%;">身份证号码</div>
            <div style="flex-basis: 30%; ">
              <el-form-item>
                 <input type="text" >
             </el-form-item>
            </div>
          </div>
          <div class="rowB3">
            <div style="flex-basis: 13%;">家庭详细住址</div>
            <div style="flex-basis: 40%;">
               <el-form-item>
                 <input type="text" >
               </el-form-item>
            </div>
            <div style="flex-basis: 8%;">学历学位</div>
            <div style="flex-basis: 15%;">
              <el-form-item>
                 <input type="text" >
             </el-form-item>
            </div>
            <div style="flex-basis: 8%;">联系电话</div>
            <div style="flex-basis: 16%;">
              <el-form-item>
                 <input type="text" >
             </el-form-item>
            </div>
          </div>
        </div>
       </div>
       <div class="rowA2">
        <div class="left">
            <span>申</span><span>请</span><span>入</span><span>党</span>
        </div>
        <div class="right2">
          <div class="rowC1">
            <div class="left2"></div>
          </div>
          <div class="rowC2">
            <div class="left2"></div>
          </div>
        </div>
       </div>
       <div class="rowA3">
        <div class="left">
          <span>入</span><span>党</span><span>积</span><span>极</span><span>分</span><span>子</span><span>的</span><span>确</span><span>定</span><span>和</span><span>培</span><span>养</span><span>教</span><span>育</span>
        </div>
        <div class="right3">
          <div class="rowD1">
             <div class="left2"></div>
          </div>
          <div class="rowD2">
            <div class="left2"></div>
          </div>
          <div class="rowD3">
            <div class="left2"></div>
          </div>
          <div class="rowD4">
            <div class="left2"></div>
          </div>
          <div class="rowD5">
            <div class="left2"></div>
          </div>
        </div>
       </div>
       <div class="rowA4">
        <div class="left">
          <span>发</span><span>展</span><span>对</span><span>象</span><span>的</span><span>确</span><span>定</span><span>与</span><span>考</span><span>察</span>
        </div>
        <div class="right4"></div>
       </div>
   </div>
       </el-form>
  </div>
</template>


<style scoped lang="scss">
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 28px;
    font-weight: 400;
  }
  .el-form-item {
    height: 100%;
    width: 100%;
  }
  ::v-deep.el-form-item .el-form-item__content{
    height: 100%;
    width: 100%;
  }
  input {
    width: 100%;
    height: 100%;
    border: none;
    padding: 0;
    background-color: transparent;
    outline: none;
    box-sizing: border-box;
  }
  div {
    outline: 1px solid #000;
    // border: 1px solid #000;
    // outline-offset: -1px;
    // box-shadow: 0 0 0 1px #000;
    // box-shadow: inset 0 0 0 1px #b4b1b1;
    // margin : 0px -1px -1px 0px;  // 上、右、下、左，逆时针
  }
  .split {
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
  }
   .box {
      margin: auto ;
      margin-top: 200px;
      height: 1400px;
      width: 1500px;
      display: flex;
      flex-direction: column;

      div[class^="rowA"] {
         display: flex;
         .left{
          flex-basis: 4%;
          // width: 60px;;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
         }

         .right1 {
              // flex-grow: 1;
              flex-basis: 96%;
              display: flex;
             flex-direction: column;

            div[class^="rowB"] {
              flex-basis: 33.3%;
              display: flex;
                div {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                }
             }
         }
         .right2 {
              flex-basis: 96%;
              display: flex;
              flex-direction: column;
              div[class^="rowC"] {
                flex-basis: 50%;
                display: flex;
                .left2{
                      flex-basis: 25%;
                   }
              }
         }
         .right3 {
              flex-basis: 96%;
              display: flex;
              flex-direction: column;

              div[class^="rowD"] {
                   display: flex;
                   .left2{
                      flex-basis: 25%;
                   }
              }
             .rowD1 {
                  flex-basis: 25%;
             }

             .rowD2 {
                  flex-basis: 12.5%;
             }

             .rowD3 {
                  flex-basis: 25%;
             }
             
             .rowD4 {
                  flex-basis: 25%;
             }

             .rowD5 {
                  flex-basis: 12.5%;
             }
               
         }
         .right4 {
              flex-grow: 1;
         }
   }

      .rowA1{ 
        flex-basis: 22%;
      }

      .rowA2{ 
        flex-basis: 15%;
      }
      .rowA3{
        flex-basis: 45%;
      }
      .rowA4{
        flex-basis: 18%;
      }
   }
</style>
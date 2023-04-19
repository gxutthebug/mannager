<template>
  <div style="height: 2500px;">
       <el-form>
        <div class="box">
       <div class="rowA1">
        <div class="left">
          基本情况
        </div>
        <div class="right1">
          <div class="rowB1">
            <div style="flex-basis: 13%;">姓名</div>
            <div style="flex-basis: 13%; background-color: beige;">
              <el-form-item>
                 <input type="text" >
             </el-form-item>
           </div>
            <div style="flex-basis: 9%; ">性别</div>
            <div style="flex-basis: 9%; background-color: beige;">
              <el-form-item>
                 <input type="text" >
             </el-form-item>
            </div>
            <div style="flex-basis: 9%; ">民族</div>
            <div style="flex-basis: 9%; background-color: beige;">
              <el-form-item>
                 <input type="text" >
             </el-form-item></div>
            <div style="flex-basis: 10%; ">生日</div>
            <div style="flex-basis: 10%; background-color: beige;">
              <el-form-item>
                 <input type="text" >
             </el-form-item>
            </div>
            <div style="flex-basis: 9%; ">籍贯</div>
            <div style="flex-basis: 9%; background-color: beige;">
              <el-form-item>
                 <input type="text" >
             </el-form-item>
            </div>
          </div>
          <div class="rowB2" style="background-color: bisque;"> 
            <div style="flex-basis: 13%; white-space: pre-wrap;">单位 丶 业务或职业</div>
            <div style="flex-basis: 40%; background-color: beige;">
              <el-form-item>
                 <input type="text" >
             </el-form-item>
            </div>
            <div style="flex-basis: 17%;">身份证号码</div>
            <div style="flex-basis: 30%; background-color: beige;">
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
        <div class="left"></div>
        <div class="right2">
          <div class="rowC1" style="background-color: beige;">
            <div class="left2"></div>
          </div>
          <div class="rowC2">
            <div class="left2"></div>
          </div>
        </div>
       </div>
       <div class="rowA3">
        <div class="left"></div>
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
        <div class="left"></div>
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
    // box-shadow: 0 0 0 1px #000;
  }
   .box {
      margin: auto ;
      margin-top: 200px;
      height: 1400px;
      width: 1500px;
      background-color: #2c2e30;
      display: flex;
      flex-direction: column;

      div[class^="rowA"] {
         display: flex;
         .left{
          flex-basis: 4%;
          // width: 60px;
          background-color: #444648;
         }

         .right1 {
              // flex-grow: 1;
              flex-basis: 96%;
              background-color: #929292;
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
              background-color:#F5F5F5;
              display: flex;
              flex-direction: column;
              div[class^="rowC"] {
                flex-basis: 50%;
                display: flex;
                .left2{
                      flex-basis: 25%;
                      background-color: #00A896;
                   }
              }
         }
         .right3 {
              flex-basis: 96%;
              background-color: #e0e0e0;
              display: flex;
              flex-direction: column;

              div[class^="rowD"] {
                   display: flex;
                   .left2{
                      flex-basis: 25%;
                      background-color: #09554c;
                   }
              }
             .rowD1 {
                  flex-basis: 25%;
                  background-color: #ffffa1;
             }

             .rowD2 {
                  flex-basis: 12.5%;
                  background-color: #ff983f;
             }

             .rowD3 {
                  flex-basis: 25%;
                  background-color: #FF6600;
             }
             
             .rowD4 {
                  flex-basis: 25%;
                  background-color: #ffffa1;
             }

             .rowD5 {
                  flex-basis: 12.5%;
                  background-color: #ff983f;
             }
               
         }
         .right4 {
              flex-grow: 1;
              background-color: #929292;
         }
   }

      .rowA1{ 
        flex-basis: 22%;
        background-color: #ff983f;
      }

      .rowA2{ 
        flex-basis: 15%;
        background-color:#FF6600;
      }
      .rowA3{
        flex-basis: 45%;
        background-color:#ffffa1;
      }
      .rowA4{
        flex-basis: 18%;
        background-color:#929292;
      }
   }

   
</style>
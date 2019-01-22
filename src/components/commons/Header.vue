<template>
  <div class="header">
    <!-- <div>这里是header</div> -->
    <div class="contain">
      <!-- <div class="left"> -->
      <!-- 分类bar要点击显示隐藏侧边栏 -->
      <div class="nav-icon" >
        <i class="fa fa-angle-left" aria-hidden="true" ></i>
      </div>
      <div class="nav-title">快速登录/注册</div>
      <!-- {{isShow}} -->
      <!-- </div> -->
      <!-- <div class="right">
                <div class="nav-city">
                广州

                <i class="fa fa-angle-down" aria-hidden="true"></i>

                </div>
                <div class="nav-user">

                    <i class="fa fa-user-o" aria-hidden="true"></i>
                    
                </div>
      </div>-->
    </div>
  </div>
</template>


<script type="text/javascript">
// import Footer from "./Footer.vue";

export default {};
</script>


<style lang="less" scoped>
// 引入配置样式总模块，固定写法
@import url("../../styls/main.less");
.header {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;

  .contain {
    background: @bg-header;
    display: flex;
    color: @color-header;
    .fs(16);
    //    .w(375);
    //    width:100%;
    .h(45);
    //    justify-content:space-between;
    .lh(45);
    text-align: center;
    //    .left{
    display: flex;
    .nav-icon {
      .w(48);
      .h(45);
      border-right: 1px solid @border-header; //red
      i{
        .fs(40);
      }
    }
    .nav-title {
      // .w(178);
      .h(45);
      text-align: left;
      color: #fff;
      .padding(0,0,0,90);
    }
   

    //    }
  }
}
</style>

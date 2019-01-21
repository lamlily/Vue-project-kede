<template>
  <div class="header">
    <!-- <div>这里是header</div> -->
    <div class="contain">
      <!-- <div class="left"> -->
      <!-- 分类bar要点击显示隐藏侧边栏 -->
      <div class="nav-icon" @click="navShow">
        <i class="fa fa-arrow-left" aria-hidden="true"></i>
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
    <!-- 引入子组件 ；因为模版里只可以有一个根元素，因此必须放在div.header里，因此把侧边栏外再加一个盒子contain; slider作为同级；-->
    <!-- <Slider :show='isShow' @sliderhide='hide'></Slider> -->
  </div>
</template>


<script type="text/javascript">
// 引入slider.vue作为头部的子组件；./当前文件夹；
// import Footer from "./Footer.vue";

export default {
  name: "Header",
  components: {  },
  data() {
    return {
      isShow: false //不能写分号
    };
  },
  methods: {
    navShow() {
      this.isShow = !this.isShow;
    },
    hide() {
      // 自定义事件处理函数还是父组件的函数，给子元素使用
      this.isShow = false;
    }
  }
};
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
    }
    .nav-title {
      // .w(178);
      .h(45);
      text-align: left;
      color: #fff;
    }

    //    }
  }
}
</style>

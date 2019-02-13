<template>
  <div id="app">
    <!-- 配合Animate.css动画使用 -->
    <!-- <transition
      enter-active-class="animated slideInLeft"
      leave-active-class="animated slideOutLeft"
      name="slide-fade"
    >-->
    <!-- 原生动画，需要把样式复制进来 -->
    <!-- <transition name="bounce"> -->
    <!-- 配合Animate.css动画使用 -->
    <transition enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutLeft">
      <router-view></router-view>
    </transition>
    <Xfooter></Xfooter>
    <!-- <Home></Home> -->
    <!-- ==相当于div，每当页面中hash值变化，就把变化区域hash挂载到router-view中来切换组件：如哈希值为home组件,则router-view显示为home -->
  </div>
</template>


<script>
//引入底部组件
import Xfooter from "./components/commons/Footer.vue";

export default {
  name: "App",
  data() {
    return {
      path: ""
    };
  },
  components: {
    Xfooter
  },

  mounted() {
    // console.log(this);
  },
  created() {
    // console.log(this.$route.path);
    // this.path = this.$route.path;
    // this.$store.commit("editCurrentRouter", this.path); //更改仓库数据\
  }
};
</script>

<style lang="less" scoped>
// 引入配置样式总模块，固定写法
@import url("./styls/main.less");

#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 45px; */
  height: 100%;
  width: 100%;
  .bounce-enter-active {
    animation: bounce-in 0.5s;
  }
  .bounce-leave-active {
    animation: bounce-in 0.5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
}
</style>

<template>
  <div id="app">
    <router-view></router-view>
    <Xfooter></Xfooter>
    <!-- <Home></Home> -->
    <!-- ==相当于div，每当页面中hash值变化，就把变化区域hash挂载到router-view中来切换组件：如哈希值为home组件,则router-view显示为home -->
  </div>
</template>


<script>
//引入底部组件
import Xfooter from "./components/commons/Footer.vue";
import Home from "./components/pages//Home/Home.vue";

export default {
  name: "App",
  components: {
    Xfooter,
    Home
  },
  mounted() {
    // console.log(this);
  }
};
</script>


<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 45px;
} */
</style>

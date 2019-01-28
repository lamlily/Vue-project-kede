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

export default {
  name: "App",
  data() {
    return {
      path: ""
    };
  },
  components: {
    Xfooter,
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


<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 45px; */
  height: 100%;
  width: 100%;
}
</style>

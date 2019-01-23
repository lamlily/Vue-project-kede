<template>
  <div class="home">
    <Search></Search>
    <Banner></Banner>
    <Home_pinpai></Home_pinpai>
    <Homelist type="海外购"></Homelist>
    <Homelist type="隐形眼镜"></Homelist>
    <Homelist type="彩色眼镜"></Homelist>
    <Homelist type="护理用品"></Homelist>
    <BackTop></BackTop>
  </div>
  
</template>


<script type="text/javascript">
// 引入banner和homelist组件
import Banner from "../../commons/Banner.vue";
import Search from "../../commons/Search.vue";
import Home_pinpai from "./Home_pinpai";
import Homelist from "./Homelist";
import BackTop from '../../commons/BackTop.vue'
export default {
  name: "Home",
  // 注册组件
  components: { Search,Banner,Home_pinpai,Homelist ,BackTop},
  data() {
    return {
    }
  }
};
</script>


<style lang="less" scoped>
@import url("../../../styls/main.less");

</style>
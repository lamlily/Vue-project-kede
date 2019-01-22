<template>
  <div class="home">
    <Search></Search>
    <Banner></Banner>
    <Home_pinpai></Home_pinpai>
    <Homelist></Homelist>
  </div>
  
</template>


<script type="text/javascript">
// 引入banner和homelist组件
import Banner from "../../commons/Banner.vue";
import Search from "../../commons/Search.vue";
import Home_pinpai from "./Home_pinpai";
import Homelist from "./Homelist";
export default {
  name: "Home",
  // 注册组件
  components: { Search,Banner,Home_pinpai,Homelist },
  data() {
    return {
    }
  }
};
</script>


<style lang="less" scoped>
@import url("../../../styls/main.less");

</style>
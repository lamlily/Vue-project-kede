<template>
  <div class="home">
    <!-- <h1>{{name}}</h1> -->
    首页
    <!-- <Search></Search> -->
    <mt-swipe :auto="4000" class="banner">
      <mt-swipe-item>12222</mt-swipe-item>
      <mt-swipe-item>22222</mt-swipe-item>
      <mt-swipe-item>32222</mt-swipe-item>
    </mt-swipe>
  </div>
</template>


<script type="text/javascript">
// 引入banner和homelist组件
import Home from "./Home.vue";
import Search from "../../commons/Search.vue";
// import { Swipe, SwipeItem } from "mint-ui";
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
export default {
  name: "Home",
  // 注册组件
  components: { Home, Search },
  data() {
    return {
      name: "这里是home组件",
      test: "您好",
      movie_type: [
        { title: "正在热映", path: "now-playing" },
        { title: "即将上映", path: "coming-soon" }
      ]
    };
  }

  // computed:{
  //     com(){
  //         let name = this.test
  //         name+='呵呵'
  //         return name
  //     }
  // }
};
</script>


<style lang="less" scoped>
@import url("../../../styls/main.less");
.banner {
  height: 100px;
}
</style>
<template>
  <div class="home">
    <!-- <h1>{{name}}</h1> -->
    <Banner></Banner>
    <Search></Search>
    <Homelist v-for="(item,index) in movie_type" :key="index" :list="item">{{item}}</Homelist>
    <!-- {{test}} -->
    <!-- {{com}} -->
  </div>
</template>


<script type="text/javascript">
// 引入banner和homelist组件
import Banner from "./Banner.vue";
import Search from "../../commons/Search.vue";
import Homelist from "./Homelist.vue";

export default {
  name: "Home",
  // 注册组件
  components: { Banner, Homelist, Search },
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
// .home{
//     .padding(50,0,0,0);
// }
</style>
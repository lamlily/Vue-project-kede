<template>
  <div class="goods">
    <Header title="毒物"></Header>
    <goodNav></goodNav>
    <GoodList ></GoodList>
    <!-- <Ceshi></Ceshi> -->
    <!-- 填充作用，无其他用处 -->
    <!-- <div class="kong"></div> -->
  </div>
</template>
<script>
import GoodNav from "./GoodNav.vue";
import GoodList from "./GoodList.vue";

import Ceshi from "./ceshi.vue";
import Header from "../../commons/Header";

export default {
  data() {
    return {
     
    };
  },
  components: {
    Header,
    GoodList,
    GoodNav,
    Ceshi
  },
  
};
</script>
<style lang="less" scoped>
@import "../../../styls/mixin.less";
// .kong{
//   .w(375);
//   .h(60);
// }
</style>

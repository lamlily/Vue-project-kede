<template>
  <div class="goods">
    <Header title="毒物"></Header>
    <goodNav></goodNav>
    <GoodList ></GoodList>
    <BackTop></BackTop>
  </div>
</template>
<script>
import GoodNav from "./GoodNav.vue";
import GoodList from "./GoodList.vue";
import Header from "../../commons/Header";
import BackTop from "../../commons/BackTop.vue";
export default {
  data() {
    return {
     
    };
  },
  components: {
    Header,
    GoodList,
    GoodNav,
    BackTop
  },
  
};
</script>
<style lang="less" scoped>
</style>

<template>
  <div class="goods">
    <Header title="毒物"></Header>
    <goodNav></goodNav>
    <GoodList ></GoodList>
  </div>
</template>
<script>
import GoodNav from "./GoodNav.vue";
import GoodList from "./GoodList.vue";
import Header from "../../commons/Header";
export default {
  data() {
    return {
     
    };
  },
  components: {
    Header,
    GoodList,
    GoodNav
  },
  
};
</script>
<style lang="less" scoped>
</style>

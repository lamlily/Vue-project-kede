<template>
  <div class="goods">
    <Header title="毒物"></Header>
    <goodNav></goodNav>
    <!-- <GoodList ></GoodList> -->
    <transition name="fade">
      <GoodList2></GoodList2>
    </transition>
    <!-- <Ceshi></Ceshi> -->
  </div>
</template>
<script>
import GoodNav from "./GoodNav.vue"; //导航
import GoodList from "./GoodList.vue"; //普通布局
import GoodList2 from "./GoodList2.vue"; //移动端瀑布流布局
import Ceshi from "./ceshi.vue"; //PC端瀑布流布局
import Header from "../../commons/Header"; //头部
export default {
  data() {
    return {};
  },
  components: {
    Header,
    GoodList,
    GoodNav,
    Ceshi,
    GoodList2
  }
};
</script>
<style lang="less" scoped>
@import "../../../styls/mixin.less";
.goods {
  .padding(45, 0, 0, 0);
}
</style>

<template>
  <div class="car">
    <Header title="购物车"></Header>
    <Carlist></Carlist>
    <Car_footer></Car_footer>
    <Footer></Footer>
    <!-- <BackTop></BackTop> -->
  </div>
</template>
<script>
import Vue from "vue";
import Header from "../../commons/Header.vue";
import Carlist from "./Carlist.vue";
import Car_footer from "./Car_footer.vue";
import Footer from "../../commons/Footer.vue";
// import BackTop from "../../commons/BackTop.vue";

export default {
  name: "Car",
  components: { Header, Carlist, Car_footer }
};
</script>
<style lang="less" scoped>
@import url("../../../styls/main.less");
.car {
  //限制最大宽度
  max-width: @divMaxWidth;
  margin: @divMargin;
  .padding(45, 0, 0, 0);
}
</style>

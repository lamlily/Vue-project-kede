
<template>
  <div class="details">
    <!-- 我是Details.vue -->
    <Header title="商品详情"></Header>

    <detailslist></detailslist>

    <!-- <BackTop></BackTop> -->
    <details_footer></details_footer>
  </div>
</template>


<script type="text/javascript">
import Detailslist from "./detailslist.vue";
import BackTop from "../../commons/BackTop.vue";
import Details_footer from "./Details_footer.vue";
import Header from "../../commons/Header.vue";

export default {
  name: "Details",
  // 注册组件
  components: { Detailslist, BackTop, Details_footer, Header },
  data() {
    return {};
  },
  methods: {}
};
</script>


<style lang="less" scoped>
@import url("../../../styls/main.less");
.details {
  //限制最大宽度
  max-width: @divMaxWidth;
  margin: @divMargin;
}
</style>
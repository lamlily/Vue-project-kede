<template>
  <div class="header">
    <div class="nav-icon">
      <i :class="className" aria-hidden="true" @click="goPage"></i>
    </div>
    <div class="nav-title" v-text="titles"></div>
    <div class="nav-right">
      <span v-show="show1">编辑</span>
      <i :class="className" aria-hidden="true" v-show="show2"></i>
    </div>
  </div>
</template>


<script type="text/javascript">
export default {
  data() {
    return {
      titles: "",
      className: "fa fa-apple",
      show1: false,
      show2: false
    };
  },
  props: ["title"],
  methods: {
    //跳转到前一个页面
    goPage() {
      if (this.titles == "毒物") {
        this.$router.push("/my");
        console.log("66666")
      } else {
        this.$router.go(-1);
      }
    }
  },
  created() {
    // console.log(this.$props.title);
    this.titles = this.$props.title;
    //根据传入的参数设置小图标
    switch (this.titles) {
      case "毒物":
        this.className = "fa fa-apple";
        break;
      case "购物车":
        this.className = "fa fa-angle-left";
        this.show1 = true;
        break;
      case "登录页":
        this.className = "fa fa-angle-left";
        break;
      case "商品详情":
        this.className = "fa fa-angle-left";
        this.show2 = true;
        break;
    }
  }
};
</script>


<style lang="less" scoped>
// 引入配置样式总模块，固定写法
@import url("../../styls/main.less");
.header {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;

  background: @bg-header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: @color-header;
  text-align: center;
  //    .left{
  display: flex;
  .nav-icon,
  .nav-right {
    .w(48);
    .h(45);
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      .fs(30);
    }
    span {
      .fs(18);
    }
  }
  .nav-title {
    .h(45);
    .lh(45);
    .fs(20);
    text-align: left;
    color: #fff;
  }
}
</style>

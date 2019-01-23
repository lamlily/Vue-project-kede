<template>
  <div class="search">
    <div class="left">
      <div v-show="i1Show" @click="goPage">
        <i class="fa fa-search" aria-hidden="true"></i>
        <span>分类</span>
      </div>
      <div v-show="i2Show" @click="goHome">
        <i class="fa fa-angle-left" aria-hidden="true"></i>
      </div>
    </div>

    <div class="mid">
      <input type="text" placeholder="请输入您要搜索的内容">
    </div>
    <div class="right"></div>
  </div>
</template>
 <script>
export default {
  name: "Search",
  data() {
    return {
      path: ["/home", "/classify", "/search"],
      currentPath: "",
      i1Show: true,
      i2Show: true
    };
  },
  methods: {
    goPage() {
      console.log(6666);
      //跳转到分类页
      this.$router.push(this.path[1]);
    },
    //返回到首页
    goHome() {
      console.log("home");
      this.$router.push("/home");
    }
  },
  beforeMount() {
    //   获取当前路由
    this.currentPath = this.$route.path;
    // 判断当前路由,改变搜索组件的显示内容
    if (this.path[0] == this.currentPath) {
      this.i2Show = !this.i2Show;
    } else if (
      this.path[1] == this.currentPath ||
      this.path[2] == this.currentPath
    ) {
      this.i1Show = !this.i1Show;
    }
  },
  mouthted() {}
};
</script>

 <style  lang="less" scoped>
@import url("../../styls/main.less");
.search {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #141414;
  .fs(14);
  .h(45);
  position:fixed;
  top:0;
  left:0;
  right:0;
  z-index: 999;
  .left {
    width: 20%;
    color: #fff;

    div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      i,
      span {
        text-align: center;
      }
      .fa-angle-left {
        .fs(36);
      }
    }
  }
  .mid {
    width: 80%;
    border: 1px solid #ccc;
    border-radius: 10px;
    background: #fff;
    .padding(0, 0, 0, 20);
    input {
      .h(27);
      border: none;
      width: 80%;
      .padding(0, 10, 0, 10);
    }
  }
  .right {
    width: 20%;
  }
}
</style>
 
<template>
  <div class="search">
    <div class="left" @click="goPage">
      <i class="fa fa-search" aria-hidden="true"></i>
      <span>分类</span>
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
      path: "/classify"
    };
  },
  methods: {
    goPage() {
      console.log(6666);
      //跳转到分类页
      this.$router.push(this.path);
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

  .left {
    width: 20%;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    i,
    span {
      text-align: center;
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
 
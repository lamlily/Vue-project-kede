<template>
  <div class="homelist"></div>
</template>

<script type="text/javascript">
export default {
  name: "Homelist",
  props: ["list"],
  data() {
    return {
      // name:"这里是homelist组件"
      movielist: []
    };
  },
  methods: {
    
    getDetails(id) {
     
      this.$router.push({ path: `/details/${id}` });
     
    },
    getData() {
      
      this.$axios
        .get(`/api/v4/api/film/${this.list.path}`, {

         
        })
        .then(res => {
          // 从网站的首页-network-xhr(now-playing)-preview中找到data.films
          this.movielist = res.data.data.films;
          console.log(res.data.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    console.log(this)
    
  }
};
</script>
<!-- 固定写法引入less  -->
<style  lang="less" scoped>
@import url("../../../styls/main.less");

.homelist {
  background: #eee;
}
ul {
  li {
    .w(341);
    .h(240);
    margin: 20px auto;
    background: #fff;

    img {
      width: 100%; //宽度为100%时不能用.w()
    }
    .contain {
      .fs(12);
      // background: red;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .padding(5, 15, 15, 15);
      box-sizing: border-box;
      .left .p2 {
        color: #999;
      }
      .right {
        color: red;
        .fs(16);
      }
    }
  }
}
.bottom {
  .w(160);
  .h(30);
  border: 1px solid #999;
  border-radius: 15px;
  .fs(18);
  margin: 0 auto;
  test-align: center;
  .lh(30);
}
</style>
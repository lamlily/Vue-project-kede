<template>
  <div class="homelist">
    <h3 v-text="goodType"></h3>
    <ul>
      <li v-for="(item,idx) in goods" :key="idx">
        <img :src="rootPath+item.imgUrl" alt>
        <p v-text="item.goodTitle"></p>
        <p v-text="'￥'+item.currentPrice"></p>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "Homelist",
  props: ["list"],
  data() {
    return {
      // name:"这里是homelist组件"
      goods: [],
      goodType: "",
      rootPath: "",
      pagesize: 6,
      page: 1
    };
  },
  methods: {
    getDetails(id) {
      this.$router.push({ path: `/details/${id}` });
    },
    getData() {
      this.$axios
        .get(`${this.rootPath}/index/findGoodTypee`, {
          params: {
            goodType: this.goodType,
            pagesize: this.pagesize,
            page: this.page
          }
        })
        .then(res => {
          this.goods = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    // console.log(this.$store.state.rootPath)
    // console.log(this.$store.getters.getRootPath); //获取设置的根路径
    this.rootPath = this.$store.getters.getRootPath;
    // console.log(this.$props.list); //获取传入的参数
    this.goodType = this.$props.type;
    // 请求数据
    this.getData();
  }
};
</script>
<!-- 固定写法引入less  -->
<style  lang="less" scoped>
@import url("../../../styls/main.less");

.homelist {
  // background: #eee;
  h3 {
    .fs(18);
    .padding(15, 15, 15, 15);
  }
  ul {
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
    width: 100%;
    li {
      width: 50%;
      img {
        width: 100%;
      }
      p {
        .fs(14);
        .padding(0, 10, 0, 10);
      }
    }
  }
}
</style>
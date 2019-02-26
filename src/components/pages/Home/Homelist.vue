<template>
  <div class="homelist">
    <h3 v-text="goodType"></h3>
    <ul>
      <li v-for="(item,idx) in goods" :key="idx" @click="goPage(item.goodId)">
        <img :src="rootPath+item.imgUrl" alt>
        <p v-text="item.goodTitle"></p>
        <p v-text="'￥'+item.currentPrice"></p>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">

import { Indicator } from "mint-ui";
export default {
  name: "Homelist",
  props: ["type"],
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
      //先显示load状态 这个组件会引起两个跟组件
      Indicator.open({
        text: "加载中...",
        spinnerType: "double-bounce"
      });
      //获取数据
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
          // 关闭加载状态
          Indicator.close();
        })
        .catch(err => {
          console.log(err);
          // 关闭加载状态
          Indicator.close();
        });
    },
    goPage(id){
      console.log(id)
      //跳转到商品详情页
      this.$router.push('/details');
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
    .padding(20, 15, 10, 15);
    font-weight:bold;
  }
  ul {
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
    width: 100%;
    li {
      width: 50%;
      border:1px solid #eee;
      img {
        width: 100%;
      }
      p {
        .fs(14);
        .padding(5, 10, 5, 10);
      }
    }
  }
}
</style>
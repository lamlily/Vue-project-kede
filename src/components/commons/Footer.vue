<template>
  <div class="footer">
    <ul>
      <li
        v-for="(item,index) in tablist"
        :key="index"
        @click="goPage(item)"
        :class="selInit ==item.path ? active :''"
      >
        <!-- 点击事件多个用逗号隔开 -->
        <i :class="item.icon" aria-hidden="true"></i>
        <span v-text="item.name"></span>
      </li>
    </ul>
  </div>
</template>


<script >
export default {
  name: "Footer",
  components: {},
  data() {
    return {
      tablist: [
        { name: "首页", path: "/home", icon: "fa fa-home" },
        { name: "毒物", path: "/goods", icon: "fa fa-apple" },
        { name: "购物车", path: "/car", icon: "fa fa-shopping-cart" },
        { name: "我的", path: "/my", icon: "fa fa-user-o" }
      ],

      selInit: "",
      active: "active"
    };
  },
  methods: {
    //切换页面
    goPage(item) {
      this.$router.push(item.path);
      this.selInit = item.path;
    },
    checkRouterLocal(path) {
      // 查找当前路由下标高亮
      
    }
  },
  //获取当前路由，设置高亮信息
  created() {
    //获取当前路由，并赋值
    this.selInit = this.$route.path;
  },
   watch: {
        //监听路由变化/实现底部导航高亮状态的跟随
        $route(to, from) {
          // to,from 分别表示从哪跳转到哪，都是一个对象 // to.path(表示的是要跳转到的路由的地址);
          this.selInit = to.path;
          console.log(to.path)
        }
        
      }
};
</script>


<style lang="less" scoped>
// 引入配置样式总模块，固定写法
@import url("../../styls/main.less");

.footer {
  .w(375);
  border: 1px solid #ccc;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  ul {
    display: flex;
    justify-content: space-between;
    background: #fff;
    width: 100%;

    li {
      .h(55);
      .fs(12);
      width: 25%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;

      color: #999;
      i {
        .fs(20);
      }
      span {
        .fs(16);
        .padding(5, 0, 0, 0);
      }
    }
    .active {
      color: #8ec31e;
    }
  }
}
.active {
  // background: #ff0066;
  color: #ff0066;
}
</style>

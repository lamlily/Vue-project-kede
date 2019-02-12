<template>
  <div class="my">
    <!-- <router-view></router-view>  -->
  </div>
</template>


<script >
import Login from "./Login.vue";

export default {
  name: "My",
  components: { Login },
  data() {
    return {};
  },
  methods: {},
  created() {
    //先有一个判断状态的功能，通过登录状态来切换组件
    //1.判断方法
    //2.is切换组件
    //3.嵌套路由
    // 获取仓库中的状态值
    let isLogin = this.$store.getters.getIsLogin;
    if (isLogin) {
      this.$router.replace("/myinfo");
    } else {
      this.$router.replace("/login");
    }
  }
};
</script>


<style lang="less" scoped>
// 引入配置样式总模块，固定写法
@import url("../../../styls/main.less");
</style>

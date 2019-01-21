<template>
  <div class="home">
    <Search></Search>
    <Banner></Banner>
    
  </div>
  
</template>


<script type="text/javascript">
// 引入banner和homelist组件
import Banner from "../../commons/Banner.vue";
import Search from "../../commons/Search.vue";
export default {
  name: "Home",
  // 注册组件
  components: { Search,Banner },
  data() {
    return {
    }
  }

  // computed:{
  //     com(){
  //         let name = this.test
  //         name+='呵呵'
  //         return name
  //     }
  // }
};
</script>


<style lang="less" scoped>
@import url("../../../styls/main.less");

</style>
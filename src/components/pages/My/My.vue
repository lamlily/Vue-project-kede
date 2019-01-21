<template>
    <div class="my" >
      <!-- 这是我的页面 -->
      <!-- 需要在这个父级页面也放置根路由 -->
      <router-view></router-view>
      <!-- <Login></Login> -->
    </div>

</template>


<script >

import Login from "./Login.vue";

    export default{
        name:'My',
        components:{Login},
        data(){
            return{
              
            }
        },
        methods:{
           
        },
        created(){
            //先有一个判断状态的功能，通过登录状态来切换组件
            //1.判断方法
            //2.is切换组件
            //3.嵌套路由
            let isLogin = false//true
            if(isLogin){
                this.$router.replace("/my/myinfo")
            }else{
                this.$router.replace("/my/login")
            }
        }


    }
</script>


<style lang="less" scoped>
// 引入配置样式总模块，固定写法
@import url('../../../styls/main.less');


    
    
</style>

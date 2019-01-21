<template>
    <div class="my" >
      <!-- 这是我的页面 -->
      <!-- <router-view></router-view> -->
      <!-- <Login></Login> -->

       <!-- <div class="my_nav">
            <img class="topimg" src="../../../assets/login.png" alt="">      
            <ul>         
                <li
                v-for="(item,index) in navlist" 
                :key="index"
                @click="toggle(item.path)"
                :class='selInit==item.path?"sel":""'
                >{{item.title}}</li>             
            </ul>         
        </div>

        <Mylist :path='selInit'></Mylist> -->
        
        <router-view></router-view>
        

    </div>

</template>


<script >

import Login from "./Login.vue";

    export default{
        name:'My',
        components:{Login},
        // data(){
        //     return{
        //       navlist:[{title:"快速登录/注册",path:"toregister"},{title:"密码登录",path:"tologin"}],
        //       selInit:"toregister"
        //     }
        // },
        // methods:{
        //    toggle(val){
        //        this.selInit = val;
        //    }
        // },
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

// .my_nav{
//     ul{
//         .w(350);
//         display:flex;
//         justify-content:center;
//         // align-items:center;
//         // justify-content:center;
//         // .padding(20,20,20,20);
//         .fs(16);
//         margin:0 auto;           
//         // border-bottom:1px solid #8FC320;

//         li{
//             .w(175);
//             .h(45);
//             border-bottom:2px solid #fff;
//             .lh(45);
//             text-align: center;
//             .margin(5,5,15,5);
//         }
//         .sel{
//             border-bottom:3px solid #8FC320;
//             // color:#8FC320;
//             font-weight:bold;
//             .fs(18);
//         }
//     }
//     img.topimg{
//         .w(375);
//         .h(194);
//     }

// } 
    
    
</style>

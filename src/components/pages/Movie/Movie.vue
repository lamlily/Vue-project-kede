<!-- 做法1：tab选项卡
    做法2：把下面封装成两个组件；点击切换组件
    做法3: 把下面封装成一个组件；每次点击就重新发起ajax请求更新
 -->

<template>
    <div class="movie">
        <!-- 我是电影页movie vue -->
        <div class="movie_nav">
            <ul>
                <li
                v-for="(item,index) in navlist" 
                :key="index"
                @click="toggle(item.path)"
                :class='selInit==item.path?"sel":""'
                >{{item.title}}</li>
                <!-- 注意：class='  selInit==item.path?"sel":""   ' 三元表达式全部写在‘里面’-->
            </ul>
        </div>

        <Movielist :path='selInit'></Movielist>

        <BackTop></BackTop>
    </div>
</template>


<script type="text/javascript">
import Movielist from './Movielist.vue'
import BackTop from './BackTop.vue'


    export default{
        name:'Movie',
        // 注册组件
        components:{Movielist,BackTop},
        data(){
            return{
                // name:"这里是home组件",因为要传参所以用数组对象的方法； item.title; item.path;
                navlist:[{title:'正在热映',path:'now-playing'},{title:'即将上映',path:'coming-soon'}],
                selInit:'now-playing'
                // 初始值为正在热映
             
            }
        },
        methods:{
            toggle(val){
                this.selInit=val
            }
        }

    }
</script>


<style lang="less" scoped>
@import url('../../../styls/main.less');
.movie{
    // .padding(5,0,0,0);
   .movie_nav{
        ul{
            .w(350);
            display:flex;
            justify-content:center;
            // align-items:center;
            // justify-content:center;

            // .padding(20,20,20,20);
            .fs(16);
            margin:0 auto;
            border-bottom:1px solid orange;

            li{
                .w(175);
                .h(45);
                border-bottom:2px solid #fff;
                .lh(45);
                text-align: center;
            }
            .sel{
                border-bottom:3px solid #fe6e00;
                color:#fe6e00;
            }
        }

} 
}


</style>
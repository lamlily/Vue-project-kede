<template>
    <div class="home">
        <!-- <h1>{{name}}</h1> -->
        <Banner></Banner>
        <Homelist v-for="(item,index) in movie_type" :key="index" 
         :list="item">{{item}}</Homelist>
        <!-- {{test}} -->
        <!-- {{com}} -->
    </div>
</template>


<script type="text/javascript">
// 引入banner和homelist组件
import Banner from './Banner.vue'
import Homelist from './Homelist.vue'
// 从网站的首页-network-xhr(coming-soon)-headers-requesturl中找到请求的地址
// https://m.maizuo.com/v4/api/film/coming-soon?__t=1542362550160&page=1&count=3
// 和now-playing区别就在于path
    export default{
        name:'Home',
        // 注册组件
        components:{Banner,Homelist},
        data(){
            return{
                name:"这里是home组件",
                test:'您好',
                movie_type:[{title:'正在热映',path:'now-playing'},{title:'即将上映',path:'coming-soon'}]
            }
        },

        // computed:{
        //     com(){
        //         let name = this.test
        //         name+='呵呵'
        //         return name
        //     }
        // }
    }
</script>


<style lang="less" scoped>
@import url('../../../styls/main.less');
    // .home{
    //     .padding(50,0,0,0);
    // }

</style>
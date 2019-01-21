<template>
    <div class="homelist">
        <!-- {{name}} -->
        <ul >
            <li 
            v-for='(item,index) in movielist' 
            :key="index"
            @click="getDetails(item.id)"
            >
            <!-- 点击跳转到详情页@click="getDetails" 把id传进去到源页面找data.film.id-->
                <img v-lazy="item.cover.origin" alt="" />
                <div class="contain">
                    <div class="left">
                        <p>{{item.name}}</p>
                        <p class="p2" v-if="list.path=='now-playing'">{{item.cinemaCount}}家影院上映，{{item.scheduleCount}}人购票</p>            
                    </div>
                    <div class="right">
                        <p v-if="list.path=='now-playing'">{{item.grade}}</p>
                        <p v-if="list.path=='coming-soon'">{{item.premiereAt|getDate}}上映</p>
                    </div>
                </div>

            </li>
        </ul>

        <div class="bottom">{{list.title}}</div>
        <!-- {{list}} -->
    </div>
</template>

<script type="text/javascript">
//引入vue
import Vue from 'vue'
//list中引入懒加载mint-ui懒加载组件(banner加载太慢，打开页面下面的元素会移动到上面，加上懒加载则banner区域不会脱离标准流会显示空白，下面的元素不会跑上去) 页面加载也会很慢，加上懒加载提高页面请求效率
//1.引入2.哪里调用哪里的src换成v-lazy=‘’
import {lazyload} from 'mint-ui';


    export default{
        name:'Homelist',
        props:['list'],
        data(){
            return{
                // name:"这里是homelist组件"
                movielist:[]
            }
        },
        methods:{
            // 跳转到详情页用编程式导航this.$router.push("index.js中设置的path","传入的参数")
            // 路由传参有三种方式：动态路由、name+params、path+query
            getDetails(id){//把id传进去
                // 1.动态路由传参(直接在后面写),index.js也要加上pagth:/:id
                this.$router.push({path:`/details/${id}`})
                // 2.name+params（name没有/）
                // this.$router.push({name:'details',params:{id:123}})
                //3.path+query(path才有/)
                // this.$router.push({path:'/details',query:{id:345}})
            },
            getData(){
                // 从网站的首页-network-xhr(now-playing)-headers-requesturl中找到请求的地址
                // https://m.maizuo.com/v4/api/film/now-playing?__t=1542360314865&page=1&count=5
                // axios已经挂在到了vue的实例中，子组件可以调用
                // console.log(this.list.path)
                this.$axios.get(`/api/v4/api/film/${this.list.path}`,{
                    // /api//v4/api/film/now-playing'
                    
                    __t:new Date().getTime(),//获取当前时间戳1542360314865,
                    page:1,
                    count:1
                })
                .then((res)=>{
                    // 从网站的首页-network-xhr(now-playing)-preview中找到data.films
                    this.movielist=res.data.data.films
                    console.log(res.data.data)
                })
                .catch((err)=>{
                    console.log(err)
                })
            }
        },
        created(){
            this.getData()
        }
    }

</script>
<!-- 固定写法引入less  -->
<style  lang="less" scoped>
@import url('../../../styls/main.less');

    .homelist{
        background: #eee;
    }
    ul{
        li{
            .w(341);
            .h(240);
            margin:20px auto;
            background:#fff;

            img{
                width:100%;//宽度为100%时不能用.w()
            }
            .contain{
                .fs(12);
                // background: red;
                display:flex;
                justify-content:space-between;
                align-items:center;
                .padding(5,15,15,15);
                box-sizing: border-box;
                .left .p2{
                    color:#999;
                }
                .right{
                    color:red;
                    .fs(16);
                }
            }
        }
    }
    .bottom{
        .w(160);
        .h(30);
        border:1px solid #999;
        border-radius:15px;
        .fs(18);
        margin:0 auto;
        test-align:center;
        .lh(30);

    }
</style>
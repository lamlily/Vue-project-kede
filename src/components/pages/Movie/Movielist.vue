<!-- 做法1：tab选项卡
    做法2：把下面封装成两个组件；点击切换组件
    做法3: 把下面封装成一个组件；每次点击就重新发起ajax请求（传参)更新
 -->

<template>
    <div class="movie">
        <!-- 我是movielist vue -->
        <ul class="movielist"
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled='loading'
          infinite-scroll-distance="50"
        >
        <!-- 给ul加上无限加载的mint-ui组件,直接复制；加载方法为loadMore -->

     

            <li
            v-for="(item,index) in movielist" 
            :key="index"
            >
                <img :src="item.poster.origin" alt="" />
                <!-- 使用的是变量则在src前加 : -->
                <div class="desc">
                    <p>{{item.name}}</p>
                    <!-- 电影名 -->
                    <!-- <p>{{item.desc}}</p> -->
                    <!-- 简介 -->
                    <p class="bottom" >{{item.premiereAt|getDate}}上映，星期{{item.premiereAt|getDay}}</p>
                    <!-- 家影院上映，人购票 -->
                </div>
                <div class="grade">
                    <!-- <p>{{item.grade}}</p> -->
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                </div>
            </li>
        </ul>
    </div>
</template>


<script type="text/javascript">
//引入vue
import Vue from 'vue';
//引入加载的字体图标mint-ui组件；
import {Toast} from 'mint-ui';
//引入无限加载mint-ui组件
import {InfiniteScroll} from "mint-ui";
Vue.use(InfiniteScroll);

    export default{
        name:'Movielist',
        // 注册组件
        components:{},
        props:["path"],
        data(){
            return{
                // name:"这里是home组件"
                movielist:[],
                // 每次请求到的都是数组[]，[]，[]怎么合并成一个用concat；

                loading:false,
                // 加载过程中不让加载字体图标滚动，false为触发滚动。true为不能滚动，默认为false可以滚动

                // 分页，默认为0;总页数为10
                current:0,
                total:10
             
            }
        },
        methods:{
            // 无限加载的方法
            loadMore(){
                console.log('触发加载')
                
                this.getData()
                 // 每次请求数据都要有加载图标显示在加载中；
                 // 引入mint-ui中的toast组件（加载旋转字体图标）
            //     let toast = Toast({
            //         message:"数据加载中...",//配置信息
            //         // position:'bottom',//距离
            //         iconClass: "fa fa-cog fa-spin",
            //         // 'icon icon-success'，以上为到字体图标库找到的加载的菊花图（可换），只需要类名即可；一般还要配置一个类名fa-spin使用才可以转起来
            //         duration:-1//5000多长时间消失，若为-1则不会自动关闭
            //     });
            //     // 在这里加载到底了需要再次（第二次第三次）请求数据；
            //     this.$axios.get(`/api/v4/api/film/coming-soon`,{
            //         // /api//v4/api/film/now-playing'
                    
            //         __t:new Date().getTime(),//获取当前时间戳1542360314865,
            //         page:1,
            //         count:1
            //     })
            //     .then((res)=>{
            //         // 从网站的首页-network-xhr(now-playing)-preview中找到data.films
            //         this.movielist=this.movielist.concat(res.data.data.films)
            //         // 数据加载字体图标关闭（不管是否请求成功都要关闭）
            //         toast.close();
            //         console.log(res.data.data)
            //     })
            //     .catch((err)=>{
            //         // 数据加载字体图标关闭（不管是否请求成功都要关闭）
            //         toast.close();
            //         console.log(err)
            //     })
            },

            // 因为以上代码(再次请求数据)和getData()完全一致，因此可以简化代码，直接在上面调用getData();




            // 获取数据（和首页homelist一样的）
             getData(){


                // 因为页面到底会出现加载图标一直滚动因为距离一直在滚动的范围；因此请求数据前要先判断如果页数到了最后一页就不需要再次请求数据了
                if(this.current==this.total){
                    // 到底了提示已经到底了并移除
                    Toast({
                    message:"已经到底了...",//配置信息
                    position:'bottom',//距离，底部
                // 移除图标
                    duration:1000//5000多长时间消失，若为-1则不会自动关闭
                });
                    return false;
                }


                // 引入mint-ui中的toast组件（加载旋转字体图标）
                let toast = Toast({
                    message:"数据加载中...",//配置信息
                    // position:'bottom',//距离
                    iconClass: "fa fa-cog fa-spin",
                    // 'icon icon-success'，以上为到字体图标库找到的加载的菊花图（可换），只需要类名即可；一般还要配置一个类名fa-spin使用才可以转起来
                    duration:-1//5000多长时间消失，若为-1则不会自动关闭
                });


                // 触发请求，一旦在加载中时让loading为true即不滚动
                this.loading=true


                // 从网站的首页-network-xhr(now-playing)-headers-requesturl中找到请求的地址
                // https://m.maizuo.com/v4/api/film/now-playing?__t=1542360314865&page=1&count=5
                // axios已经挂在到了vue的实例中，子组件可以调用
                this.$axios.get(`/api/v4/api/film/${this.path}`,{params:{
                    __t:new Date().getTime(),//获取当前时间戳1542360314865,
                    // page:1,
                    page:this.current+1,
                    // 默认为0所以this.current+1
                    // count:1
                    current:7
                }
                    // /api//v4/api/film/now-playing'
                    
                })
                .then((res)=>{
                    // 从网站的首页-network-xhr(now-playing)-preview中找到data.films
                    // this.movielist=res.data.data.films
                    // 数组的合并用concat，将每次获取到的请求数据的数组合并到一个数组显示
                     this.movielist=this.movielist.concat(res.data.data.films)
                    // 数据加载字体图标关闭（不管是否请求成功都要关闭）
                    toast.close();
                    // 请求后滚动图标再次滚动
                    this.loading=false
                    // 每次请求完成页数发生变化
                    this.current=res.data.data.page.current
                    this.total=res.data.data.page.total
                    console.log(res.data.data)
                })
                .catch((err)=>{
                    // 数据加载字体图标关闭（不管是否请求成功都要关闭）
                    toast.close();
                    // 请求后滚动图标再次滚动
                    this.loading=false
                    console.log(err)
                })
            }
        },


        //计算属性与监听器watch，可以监听某个值的变化
        watch:{
            path:function(newVal,oldVal){
            //数据需要重新请求后赋值
                this.movielist=[];
            //当前页数变为0
                this.current=0;
                //重新请求数据
                this.getData();
                console.log("new"+newVal)
                console.log("old"+oldVal)
            }
        },

        created(){
            // 发起ajax请求
            // this.getData();
            // 但是因为使用了无限加载后，有一个infinite-scroll-immediate-check：初始状态下，没有数据，就会自动执行一次加载方法，自己去请求；
            
        }

    }
</script>


<style lang="less" scoped>
@import url('../../../styls/main.less');
ul{
    .w(345);
    margin:0 auto;
    li{
        .padding(20,0,20,0);
        border-bottom:dashed 1px #c9c9c9;
        display:flex;
        .fs(16);
        img{
            .w(60);
            .h(82);
        }
        .desc{
            .w(231);
            // align-items:center;
            // justify-content:center;
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            text-align: left;
            .padding(0,0,0,20);
            box-sizing: border-box;
            // p:first-child{
            //     font-weight: bold;
            // }
            p:last-child{
                color:@color-grade;
                .fs(14);
            }
        }
        .grade{
            display:flex;
            flex-direction:row;
            align-items:top;
           // text-align: center;
           p{
            .margin(0,5,0,0);
            color:@color-grade;
            }
            i{
            color:#999;
            }
        }
    }
}

</style>
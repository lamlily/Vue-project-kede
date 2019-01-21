<template>
    <div class="banner">
        <!-- <h1>{{name}}</h1> -->
        <!-- 复制swiper网站html代码到此处 -->
       <div class="swiper-container">
            <div class="swiper-wrapper">
            <!-- 通过v-for循环动态生成数据 -->
                <div class="swiper-slide" v-for="(item,index) in bannerlist" :key="index">
                    <!--轮播图的图片 -->
                    <img :src="item.imageUrl" alt="" />
                    <!-- 通过axios请求get获取到网站的图片 -->
                </div>
                <!-- <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div> -->
                
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
            
            <!-- 如果需要导航按钮 -->
            <!-- <div class="swiper-button-prev"></div> -->
            <!-- <div class="swiper-button-next"></div> -->
            
            <!-- 如果需要滚动条 -->
            <!-- <div class="swiper-scrollbar"></div> -->
            <!-- {{bannerlist}} -->
        </div>

    </div>
</template>


<script type="text/javascript">
// 引入swiper 轮播图插件
import Swiper from 'swiper'
// 引入vue    
import Vue from "vue"
// 引入axios(main.js)
import Axios from 'axios'

    export default{
        name:'Banner',
        data(){
            return{
                // name:'这里是Banner组件'
                bannerlist:[]
            }
        },
        methods:{
            getBannerData(){
                Axios.get('/api/v4/api/billboard/home?__t=1542262686031',{})
               .then((res)=>{
                    if (res.data.status==0) {
                         this.bannerlist=res.data.data.billboards
                         Vue.nextTick(()=>{
                            console.log(this)
                            this.initSwiper()
                         })
                    }else{
                        alert(res.data.msg)
                    }
                  
                })  
                .catch((err)=>{
                    console.log(err)
                })
            },
            initSwiper(){
                console.log(111)
                // 复制swiper 的 script里的代码到此处，不需要的可以删减
                    var mySwiper = new Swiper ('.swiper-container', {
                    // direction: 'vertical', // 垂直切换选项
                    loop: true, // 循环模式选项
                    
                    // 如果需要分页器
                    pagination: {
                      el: '.swiper-pagination',
                    },
                    
                    // // 如果需要前进后退按钮
                    // navigation: {
                    //   nextEl: '.swiper-button-next',
                    //   prevEl: '.swiper-button-prev',
                    // },
                    
                    // // 如果需要滚动条
                    // scrollbar: {
                    //   el: '.swiper-scrollbar',
                    // },
                })
            }

        },

        mounted(){
     
        },
        created(){
            //created发起ajax请求
            this.getBannerData()
        }



        
         
    }



   

</script>


<style lang='less' scoped >
/*引入配置样式*/
@import url('../../../styls/main.less');
/*引入swiper 轮播图插件 样式*/
@import url('../../../../node_modules/swiper/dist/css/swiper.min.css');

img{
    .w(375);
    .h(210);
}

</style>
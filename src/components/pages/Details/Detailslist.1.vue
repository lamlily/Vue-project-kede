
<template>
<!-- <Details_header></Details_header> -->
    <div class="detailslist" >
        <!-- {{detailslist}} -->
        <div class="top">
            <div class="turn"><</div>
            <div class="banner">
                <!-- 复制swiper网站html代码到此处 -->
               <div class="swiper-container ">
                    <div class="swiper-wrapper">
                    <!-- 通过v-for循环动态生成数据 -->
                        <div class="swiper-slide" v-for="(item,index) in bannerlist" :key="index">
                            <!--轮播图的图片 -->
                            <img :src="item._big" alt="" />
                            <!-- 通过axios请求get获取到网站的图片 -->
                        </div>
                        <!-- <div class="swiper-slide">Slide 2</div>
                        <div class="swiper-slide">Slide 3</div> -->
                        
                    </div>
                    <!-- 如果需要分页器 -->
                    <div class="swiper-pagination"></div>     
                </div>
            </div>
            
        </div>
        <ul  class="goodsInfo" >
            <li v-for="(item,index) in detailslist" :key="index" >
                <p class="price">
                <span>￥{{item.goods_info.goods_price}}</span><span>￥{{item.goods_info.goods_marketprice}}</span><span>包税价</span>
                </p>
                <!-- <img src="" alt="" /> -->
                
                <p class="title"><span class="kuajing">跨境<span>自营</span></span>{{item.goods_info.goods_name}}</p>
                <p class="desc">{{item.goods_info.goods_jingle}}</p>

                <div class="shui">
                    <p>
                        <img :src="item.goods_info.goods_country_img" alt="" />
                        <span>{{item.goods_info.goods_country}}</span>
                        <span>【{{item.goods_info.goods_bussiness_store}}】</span>
                        <span>税费：预计{{item.goods_info.goods_costprice}}</span>
                    </p>

                    <p>
                        <span>{{item.goods_info.contractlist[1].cti_name}}</span>
                        <span>{{item.goods_info.contractlist[3].cti_name}}</span>
                        <span>{{item.goods_info.contractlist[4].cti_name}}</span>
                    </p>
                </div>

                <div class="adv" 
                    v-for="(item2,index2) in item.adv_list" :key="index2">
                    <img :src="item2.adv_content" alt="" />
                </div>

                <div class="yunfei">
                    <p class="yixuan">
                        已选：{{item.store_info.bind_all_gc}}件
                        <i class="fa fa-angle-right" aria-hidden="true"></i> 
                    </p>
                    <p>运费：{{item.goods_hair_info.content}}</p>
                    <p>说明：{{item.store_info.store_explain}}</p>   
  

                    <div class="commend">
                            <p>
                                商品评价（{{item.store_info.store_recommend}}）
                                <span>好评率 100%<i class="fa fa-angle-right" aria-hidden="true"></i> </span>
                                
                            </p>
                    </div>
                    <div class="pinpai">
                        <div class="ptop">
                            <div><img :src="item.brand.brand_pic" alt="" /></div>
                            <div>
                                <p>{{item.brand.brand_name}}</p>
                                <p>在售商品{{item.brand.goods_count}}件</p>
                            </div>   
                            <span>进入品牌<i class="fa fa-angle-right" aria-hidden="true"></i> </span>     
                        </div >   
                        <ul class="goods" >
                            <li class="goods0"v-for="(item3,index3) in (item.brand.goods).slice(0,3)" :key="index3" >
                                <img :src="item3.goods_image" alt="" />
                                <p><span>{{item3.goods_name}}</span></p>
                                <p><span>{{item3.goods_jingle}}</span></p>
                                <p><span>￥{{item3.goods_promotion_price}}</span></p>
                            </li>
                        </ul>           
                    </div>
                </div>

                <div class="recommend" >
                        <div class="ptop">         
                            <p>相关推荐</p>
                            <p>同类热销推荐</p>
                                                           
                        </div >   
                       <ul class="goods goods0">
                         <li v-for="(item4,index4) in (item.goods_commend_list).slice(0,3)" :key="index4">
                            <img :src="item4.goods_image_url" alt="" />
                            <p><span>{{item4.goods_name}}</span></p>
                            <p>￥{{item4.goods_promotion_price}}</p>
                        </li>  

                       </ul>    
                </div>

                <div class="goods_details"></div>
                    
              

            </li>
        </ul>
      
    </div>

<!-- <Details_footer></Details_footer> -->

</template>


<script >
//引入vue
import Vue from 'vue';
//引入加载的字体图标mint-ui组件；
// import {Toast} from 'mint-ui';
// 引入swiper 轮播图插件
import Swiper from 'swiper'
import {lazyload} from 'mint-ui';
//头部
// import Details_header from "./Details_header.vue"
//底部
// import Details_footer from "./Details_footer.vue"


    export default{
        name:'Detailslist',
        // components:{Details_header,Details_footer},
        data(){
            return{

              detailslist:[],
              bannerlist:[],

              //加载数据显示功能
               loading:false,
                // 加载过程中不让加载字体图标滚动，false为触发滚动。true为不能滚动，默认为false可以滚动

                // 分页，默认为0;总页数为10
                current:0,
                total:10
            }
        },
        methods:{

            getData(){

            // 因为页面到底会出现加载图标一直滚动因为距离一直在滚动的范围；因此请求数据前要先判断如果页数到了最后一页就不需要再次请求数据了
                // if(this.current==this.total){
                //     // 到底了提示已经到底了并移除
                //     Toast({
                //     message:"已经到底了...",//配置信息
                //     position:'bottom',//距离，底部
                // // 移除图标
                //     duration:1000//5000多长时间消失，若为-1则不会自动关闭
                // });
                //     return false;
                // }
                // // 引入mint-ui中的toast组件（加载旋转字体图标）
                // let toast = Toast({
                //     message:"数据加载中...",//配置信息
                //     // position:'bottom',//距离
                //     iconClass: "fa fa-cog fa-spin",
                //     // 'icon icon-success'，以上为到字体图标库找到的加载的菊花图（可换），只需要类名即可；一般还要配置一个类名fa-spin使用才可以转起来
                //     duration:-1//5000多长时间消失，若为-1则不会自动关闭
                // });
                // // 触发请求，一旦在加载中时让loading为true即不滚动
                // this.loading=true



            // this.$axios.get(`/api/mobile/index.php?act=goods&op=goods_detail&goods_id=877779407&key=&dis_id=&client=wap`,{
            let id = this.$route.params.id
            //接收传参id声明并赋值
            this.$axios.get(`/api/mobile/index.php?act=goods&op=goods_detail&goods_id=${id}&key=&dis_id=&client=wap`,{
    
                
                // params:{
                //     __t:new Date().getTime(),//获取当前时间戳1542360314865,
                //     // page:1,
                //     page:this.current+1,
                //     // 默认为0所以this.current+1
                //     // count:1
                //     current:7}

            })
            .then((res)=>{
                console.log(res)
                
                this.detailslist=this.detailslist.concat(res.data.datas)
                this.bannerlist=this.bannerlist.concat(res.data.datas.image_list)

                
                
                // this.pic0=res.data.datas.list[1].home1.image
                
               
                // console.log(this.detailslist)
                console.log(this.bannerlist)
                console.log(res)
                console.log(res.data.datas.goods_info)
                console.log(this.detailslist)

                console.log(this.detailslist[0].goods_info)
                console.log(this.detailslist[0].adv_list[0].adv_content)
                console.log(this.detailslist[0].adv_list)
            

                // 数据加载字体图标关闭（不管是否请求成功都要关闭）
                    toast.close();
                    // 请求后滚动图标再次滚动
                    this.loading=false
                    // 每次请求完成页数发生变化
                    // this.current=res.data.data.page.current
                    // this.total=res.data.data.page.total
                 
                //swiper   
                Vue.nextTick(()=>{
                    console.log(this)
                    this.initSwiper()
                })
                
            })
            .catch((err)=>{
                console.log(err)
            })
          },
          //banner
          initSwiper(){
                console.log(111)
                    var mySwiper = new Swiper ('.swiper-container', {
                    // direction: 'vertical', // 垂直切换选项
                    loop: true, // 循环模式选项
                    autoplay: {
                    delay: 2500,
                    // disableOnInteraction: false,
                    },
                    // 分页器
                    pagination: {
                      el: '.swiper-pagination',
                    },
                   
                })
            }

        },
           
        created(){
            this.getData()
        }


    }

</script>


<style lang="less" scoped>
// 引入配置样式总模块，固定写法
@import url('../../../styls/main.less');
/*引入swiper 轮播图插件 样式*/
@import url('../../../../node_modules/swiper/dist/css/swiper.min.css');

.details{

    .top{
        .w(375);
        .h(411);
        .turn{
            .h(36);
        }
        .banner{
            .h(375);
            // border:1px solid #ccc;
            img{
                .h(375);

            }
        }
    }
    .goodsInfo{
        p.price{
            span{
                .margin(0,10,0,0);
                .padding(0,0,0,10);
            }
            span:first-of-type{
                .fs(26);
                font-weight: bold;
                color: #ff0066 !important;
            }
            span:nth-of-type(2){
                .fs(12);
                text-decoration:line-through;
                color:#ccc;
                text-align: center;
                font-weight: bold;

            }
            span:last-of-type{
                .fs(12);
                background: #ff0066 ;
                color:#eee;
                .border-radius(10);
                .padding(1,5,3,5);

            }
        }

        p.title{
            // word-break: break-all;
            .fs(16);
            font-weight: bold;
            background-color: #fff;
            color: #333;
            .margin(10,5,0,10);
            // .padding(10,0,0,50);
             span.kuajing{
                .fs(14);
                text-indent: 2em;
                background: purple;
                .border-radius(10);
                color:#fff;
                .padding(2,2,2,2);

            }
        }
        p.desc{
            .fs(12);
            color: #666;
            .margin(10,10,10,10);
        }
        .shui{
            .h(93);
            .fs(12);
            background: #eee;
            padding: 0.5rem 0rem .5rem .5rem;
            color: #333;
            .margin(10,10,10,10);
            box-sizing: border-box;
            p:first-of-type{
                border-bottom: 1px solid #ddd;
                padding: 0rem 0rem .4rem 0rem;
              img{
                .w(13);
                .h(13);
                }  
                span:nth-of-type(2){
                    .margin(0,120,0,0);
                }
            }
            p:nth-of-type(2){
                padding: 0.3rem 0rem .5rem 0rem;
                span{
                    .margin(0,30,10,5);
                }
            }
            
        }
        .adv{
            .h(156);  

            img{
              .w(375);
              .h(156);  
            }            
        }
        .yunfei{
            .fs(14);
            color: #333;
            border-bottom: solid #EEE 0.02rem;
            padding: 0.4rem 0;
            background: #eee;
            p{
                border-bottom: 1px solid #ccc;
                background: #fff;
                padding: 0.8em 1em ;
                i{
                    .margin(0,0,0,270);
                }

            }
        }
        .commend{
            .fs(14);
            .h(44);
            .margin(10,0,35,0);

            p{
                display: flex;
                justify-content:space-between;
                .h(44);
                padding: 0.8em 1em ;
                .lh(44);

                // border:1px solid #ccc;
                span{
                    color:#f06;
                   i{
                    .margin(0,0,0,5);
                    color:#000;
                    } 
                }
                
            }        
        }
        .pinpai,.recommend{
            .h(286);
            .fs(14);
            // background: red;
            // .margin(20,0,10,0);
            .ptop{
                display:flex;
                .h(84);
                justify-content:space-between;
                background: #fff;
                span{
                    .lh(84);
                    color:#f06;

                    i{
                        .margin(0,15,0,5);
                        color:#000;

                    }

                }
                img{
                    .h(84);
                }
            }
            ul.goods{
                // .h(189);
                display:flex;
                justify-contert:space-between;
                background: #fff;
                li{
                    width:33.3%;

                    img{
                        .w(100);
                        .h(86);
                        .padding(0,10,0,15);
                        background: #fff;

                    }
                    p{
                    .fs(12);
                    
                    }
                     p:first-of-type{
                        // .h(40);
                        // text-align: center;
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                    }
                    p:nth-of-type(2){

                        text-align: center;
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                        color:#999;
                    }
                    p:last-of-type{
                        color:#ff0066;
                    }

                }
                p:nth-of-type(3){

                }
                
            }
       
        }
        .recommend{
            margin-bottom: 40px;
            background: #eee;
            .h(230);
            .ptop{
                align-items:center;
                p{
                    flex:1;
                    text-align: center;
                    border-bottom: 1px solid #ccc;
                    .padding(0,0,20,0);

                }

            }
        }
       
        
    }
}
    

    
    
</style>


<template>
  <!-- <Details_header></Details_header> -->
  <div class="detailslist">
    <!-- {{detailslist}} -->
    <div class="top">
      <!-- <div class="turn"></div> -->
      <div class="banner">
        <!-- 复制swiper网站html代码到此处 -->
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <!-- 通过v-for循环动态生成数据 -->
            <div class="swiper-slide">
              <!-- <div class="swiper-slide" v-for="(item,index) in bannerlist" :key="index">  -->
              <!--轮播图的图片 -->
              <!-- <img :src="item.src" alt> -->
              <img src="../../../assets/b1.jpg" alt>
              <!-- <img src="../../../assets/b2.jpg" alt>
              <img src="../../../assets/b3.jpg" alt>
              <img src="../../../assets/b4.jpg" alt>
              <img src="../../../assets/b5.jpg" alt>-->
              <!-- 通过axios请求get获取到网站的图片 -->
            </div>
            <!-- <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>-->
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
    <div class="nav">
      <ul>
        <li
          v-for="(item,index) in navlist"
          :key="index"
          @click="toggle(item.path)"
          :class="selInit==item.path?'sel':''"
        >
          <i :class="item.icon" aria-hidden="true"></i>
          {{item.title}}
        </li>
      </ul>
    </div>
    <ul class="goodsInfo" :path="selInit">
      <li>
        <div class="goodprice">
          <div class="price">
            <p>168元包邮：ReVIA蕾美彩色日抛30片装！</p>
            <p>
              <del>￥324.00</del>
            </p>
            <p>
              ￥168.00
              <span class="zuhe">组合价</span>
            </p>
            <p>
              <span>购买赠送 168 积分</span>
              <span>已降 156.00元</span>
            </p>
          </div>
          <div class="shoucang">
            <i class="fa fa-heart-o"></i>
          </div>
        </div>

        <div class="set">
          <div class="settop">
            <span>套餐组合</span>
            <span>
              含
              <span style="color:#f06;">3</span>件商品，剩余
              <span style="color:#f06;">3</span>件需选择参数
            </span>
          </div>
          <div class="setmain">
            <div class="setmain0">
              <img alt src="../../../assets/b2.jpg">
              <p class="main">
                <span>ReVIA蕾美彩色日抛10片装-迷雾深灰 MIst Iris（Namie同款）</span>
                <br>
                <span class="choose">
                  <span>请选择颜色/度数</span>
                  <span>V</span>
                </span>
              </p>
            </div>

            <div class="setmain0">
              <img alt src="../../../assets/b3.jpg">
              <p class="main">
                <span>ReVIA蕾美彩色日抛10片装-迷雾深灰 MIst Iris（Namie同款）</span>
                <br>
                <span class="choose">
                  <span>请选择颜色/度数</span>
                  <span>V</span>
                </span>
              </p>
            </div>

            <div class="setmain0">
              <img alt src="../../../assets/b4.jpg">
              <p class="main">
                <span>ReVIA蕾美彩色日抛10片装-迷雾深灰 MIst Iris（Namie同款）</span>
                <br>
                <span class="choose">
                  <span>请选择颜色/度数</span>
                  <span>V</span>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div class="recommend">
          <div class="ptop">
            <p class="pinglun">评论</p>
          </div>
          <ul class="goods goods0">
            <li>
              <div class="user">
                <div class="utop">
                  <img src="https://pic.keede.com//app/images/sinaimg.gif" alt class="touxiang">
                  <p>1***A</p>
                  <p>2019/1/21 16:43:46</p>
                </div>
                <div class="umid">*****</div>
                <div class="ubottom">好</div>
              </div>
              <div class="pic">
                <img
                  alt
                  src="https://pic.keede.com//remark/513aecaf-b94f-4e11-9d17-28fc2e52353c.jpg"
                >
                <img src="https://pic.keede.com//remark/f4a6208c-8382-45f6-ae92-50db0d3a228c.jpg">
              </div>
              <p class="color">颜色：自然黑Black （Name同款）</p>
            </li>
          </ul>
        </div>

        <div class="recommend">
          <ul class="goods goods0">
            <li>
              <div class="user">
                <div class="utop">
                  <img src="https://pic.keede.com//app/images/sinaimg.gif" alt class="touxiang">
                  <p>1***A</p>
                  <p>2019/1/21 16:43:46</p>
                </div>
                <div class="umid">*****</div>
                <div class="ubottom">好</div>
              </div>
              <div class="pic">
                <img
                  alt
                  src="https://pic.keede.com//remark/513aecaf-b94f-4e11-9d17-28fc2e52353c.jpg"
                >
              </div>
              <p class="color">颜色：自然黑Black （Name同款）</p>
              <div class="ptop">
                <p class="pinglun more">更多评论 (434)</p>
              </div>
            </li>
          </ul>
        </div>

        <div class="recommend">
          <div class="ptop">
            <p class="kefu">在线客服</p>
            <p class="kefu">电话客服</p>
          </div>
          <div class="ptop">
            <p class="like">猜你喜欢</p>
          </div>
          <ul class="goods goods0">
            <li class="others">
              <div class="pic0">
                <img
                  alt
                  src="https://pic.keede.com/MobileMain/8e91c48c-5f28-43c2-ade0-6a8a1923d0bf-250-250.jpg"
                >
                <p class="color">HAN RAZR -X9</p>
                <P>￥169</P>
              </div>
              <div class="pic0">
                <img
                  alt
                  src="https://pic.keede.com/MobileMain/7b79442a-cc75-4358-b61e-bf2109885982-250-250.jpg"
                >
                <p class="color">HAN RAZR -X9</p>
                <P>￥169</P>
              </div>

              <div class="ptop"></div>
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
import Vue from "vue";
//引入加载的字体图标mint-ui组件；
// import {Toast} from 'mint-ui';
// 引入swiper 轮播图插件
import Swiper from "swiper";
import { lazyload } from "mint-ui";
//头部
// import Details_header from "./Details_header.vue"
//底部
// import Details_footer from "./Details_footer.vue"

export default {
  name: "Detailslist",
  // components:{Details_header,Details_footer},
  data() {
    return {
      detailslist: [],
      bannerlist: [],
      // { src: "../../../assets/b1.jpg" },
      // { src: "../../../assets/b2.jpg" },
      // { src: "../../../assets/b3.jpg" }

      navlist: [
        { icon: "fa fa-file-code-o ", title: "简介", path: "simpledesc" },
        { icon: "fa fa-picture-o", title: "详情", path: "detaildesc" },
        { icon: "fa fa-commenting-o", title: "评论", path: "commend" }
      ],
      selInit: "simpledesc",

      //加载数据显示功能
      loading: false,
      // 加载过程中不让加载字体图标滚动，false为触发滚动。true为不能滚动，默认为false可以滚动

      // 分页，默认为0;总页数为10
      current: 0,
      total: 10
    };
  },
  methods: {
    toggle(val) {
      this.selInit = val;
    },
    getData() {
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
      let id = this.$route.params.id;
    },
    //banner
    initSwiper() {
      console.log(111);
      var mySwiper = new Swiper(".swiper-container", {
        // direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: {
          delay: 2500
          // disableOnInteraction: false,
        },
        // 分页器
        pagination: {
          el: ".swiper-pagination"
        }
      });
    }
  },

  created() {
    this.getData();
  }
};
</script>


<style lang="less" scoped>
// 引入配置样式总模块，固定写法
@import url("../../../styls/main.less");
/*引入swiper 轮播图插件 样式*/
@import url("../../../../node_modules/swiper/dist/css/swiper.min.css");

.details {
  .top {
    .w(375);
    .h(375);
    .margin(45, 0, 0, 0);
    .turn {
      .h(36);
    }
    .banner {
      .h(375);
      // border:1px solid #ccc;
      img {
        .h(375);
      }
    }
  }

  .nav {
    ul {
      .w(350);
      display: flex;
      justify-content: center;
      .fs(18);
      margin: 0 auto;
      border-bottom: 1px solid #ddd;

      li {
        .w(175);
        .h(52);
        border-bottom: 2px solid #fff;
        .lh(45);
        text-align: center;
        i {
          .margin(0, 5, 0, 0);
        }
      }
      .sel {
        border-bottom: 3px solid #8fc320;
        color: #8fc320;
        font-weight: bold;
        // .fs(18);
      }
    }
    img.topimg {
      .w(375);
      .h(194);
    }
  }

  .goodsInfo {
    .goodprice {
      display: flex;
      .margin(0, 0, 30, 0);

      .price {
        p {
          .margin(0, 10, 0, 0);
          .padding(0, 0, 0, 10);
          .lh(30);
        }
        p:first-of-type {
          .fs(16);
        }
        p:nth-of-type(2) {
          .fs(12);
          text-decoration: line-through;
          color: #ccc;
          font-weight: bold;
        }
        p:nth-of-type(3) {
          .fs(16);
          font-weight: bold;
        }
        span.zuhe {
          .fs(12);
          background: #8fc320;
          color: #eee;
          .border-radius(10);
          .padding(1, 5, 3, 5);
        }
        p:last-of-type {
          span {
            .fs(14);
            border: 1px solid #f06;
            color: #f06;
          }
        }
      }
      .shoucang {
        .padding(40, 0, 0, 10);
        .fs(22);
        border-left: 1px solid #ccc;
        color: #ccc;
        .margin(10, 0, 0, 0);
      }
    }

    .set {
      .h(474);
      // .margin(0,0,10,0);
      border-bottom: 1px solid #ddd;

      img {
        .w(92);
        .h(92);
      }
      .settop {
        .fs(16);
        .h(50);
        .lh(50);
        border-bottom: 1px solid #ccc;
        border-top: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        .padding(0, 20, 0, 20);
        span:nth-of-type(2) {
          color: #999;
        }
      }
      .setmain {
        .setmain0 {
          display: flex;
          .margin(10, 0, 0, 10);
          p.main {
            display: flex;
            flex-direction: column;
            // justify-content: center;
            span {
              .fs(14);
              color: rgb(90, 86, 86);
              .margin(0, 20, 0, 20);
            }
            span.choose {
              border: 1px solid #ccc;
              display: flex;
              justify-content: space-around;
              .margin(0, 20, 0, 20);
              .h(38);
              .lh(38);
            }
          }
        }
      }
    }

    .recommend {
      .h(286);
      .fs(16);
      // background: red;
      .margin(20, 0, 20, 20);
      border-bottom: 1px solid #ddd;
      .ptop {
        display: flex;
        .h(50);
        .lh(50);
        justify-content: space-around;
        background: #fff;
        span {
          .lh(84);
          color: #f06;

          i {
            .margin(0, 15, 0, 5);
            color: #000;
          }
        }
        img {
          .h(84);
        }
        .kefu {
          border: 1px solid #ddd;
          border-radius: 30px;
          .w(146);
          .h(47);
          text-align: center;
        }
        .like {
          .w(350);
          .h(47);
          border-bottom: 1px solid #ddd;
          border-top: 1px solid #ddd;
          .margin(20, 0, 0, 0);
        }
      }
      ul.goods {
        // .h(189);
        display: flex;
        justify-contert: space-between;
        background: #fff;
        .lh(30);
        li {
          .user {
            .utop {
              display: flex;
              justify-content: space-between;
              img.touxiang {
                border-radius: 50%;
                .w(30);
                .h(30);
              }
            }
            .umid,
            .ubottom {
              .padding(0, 0, 0, 40);
            }
          }

          .pic {
            display: flex;
            img {
              .w(100);
              .h(86);
              .padding(0, 10, 0, 15);
              background: #fff;
            }
          }
           .pic0{
            // display:flex;
            img{
              .w(162);
              .h(162);
            }
          }
          
        }
        li.others{
          display:flex;
          .margin(0,0,100,0);
          border-bottom:1px solid #ccc;
          .padding(0,0,10,0);
        }
     

        p.color {
          color: #999;
          .padding(15, 0, 0, 0);
        }
        .more {
          .w(350);
          border-top: 1px solid #ddd;
          .margin(10, 0, 0, 0);
          text-align: center;
        }
      }
    }
  }
}
</style>

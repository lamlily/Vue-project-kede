
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
            <!-- <div class="swiper-slide"> -->
            <div class="swiper-slide" v-for="(item,index) in bannerlist" :key="index">
              <!--轮播图的图片 -->
              <img :src="item" alt class="imgs">

              <!-- 通过axios请求get获取到网站的图片 -->
            </div>
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
          :class="selInit==item.path? 'sel' : ''"
        >
          <i :class="item.icon" aria-hidden="true"></i>
          {{item.title}}
        </li>
      </ul>
    </div>
    <ul class="goodsInfo" :path="selInit">
      <li>
        <p class="price">
          <span></span>
          <span></span>
          <span>包税价</span>
        </p>
        <!-- <img src="" alt="" /> -->
        <p class="title">
          <span class="kuajing">
            跨境
            <span>自营</span>
          </span>
        </p>
        <p class="desc"></p>

        <div class="shui">
          <p>
            <img alt>
            <span></span>
            <span></span>
            <span></span>
          </p>

          <p>
            <span></span>
            <span></span>
            <span></span>
          </p>
        </div>

        <div class="adv">
          <img alt>
        </div>

        <div class="yunfei">
          <p class="yixuan">
            已选：件
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </p>
          <p>运费：</p>
          <p>说明：</p>

          <div class="commend">
            <p>
              商品评价
              <span>
                好评率 100%
                <i class="fa fa-angle-right" aria-hidden="true"></i>
              </span>
            </p>
          </div>
          <div class="pinpai">
            <div class="ptop">
              <div>
                <img alt>
              </div>
              <div>
                <p></p>
                <p>在售商品件</p>
              </div>
              <span>
                进入品牌
                <i class="fa fa-angle-right" aria-hidden="true"></i>
              </span>
            </div>
            <ul class="goods">
              <li class="goods0">
                <img alt>
                <p>
                  <span></span>
                </p>
                <p>
                  <span></span>
                </p>
                <p>
                  <span></span>
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div class="recommend">
          <div class="ptop">
            <p>相关推荐</p>
            <p>同类热销推荐</p>
          </div>
          <ul class="goods goods0">
            <li>
              <img alt>
              <p>
                <span></span>
              </p>
              <p>￥</p>
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

import Swiper from "swiper";
import { lazyload } from "mint-ui";

export default {
  name: "Detailslist",
  // components:{Details_header,Details_footer},
  data() {
    return {
      detailslist: [],
      bannerlist: [
        "../../../assets/b1.jpg",
        "../../../assets/b2.jpg",
        "../../../assets/b3.jpg"
      ],

      navlist: [
        { icon: "fa fa-file-code-o ", title: "简介", path: "simpledesc" },
        { icon: "fa fa-picture-o", title: "详情", path: "detaildesc" },
        { icon: "fa fa-commenting-o", title: "评论", path: "commend" }
      ],
      selInit: "simpledesc",

      //加载数据显示功能
      loading: false,

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
    this.initSwiper();
    this.getData();
  }
};
</script>


<style lang="less" scoped>
// 引入配置样式总模块，固定写法
@import url("../../../styls/main.less");
/*引入swiper 轮播图插件 样式*/
@import url("../../../../node_modules/swiper/dist/css/swiper.min.css");

.detailslist {
  .top {
    .w(375);
    .h(375);
    .turn {
      .h(36);
    }
    .banner {
      .h(375);
      .swiper-container {
        .w(375);
        .h(375);
        .swiper-wrapper {
          .swiper-slide {
            .imgs {
              .w(375);
              .h(375);
            }
          }
        }
      }
      // border:1px solid #ccc;
    }
  }
  .goodsInfo {
    p.price {
      span {
        .margin(0, 10, 0, 0);
        .padding(0, 0, 0, 10);
      }
      span:first-of-type {
        .fs(26);
        font-weight: bold;
        color: #ff0066 !important;
      }
      span:nth-of-type(2) {
        .fs(12);
        text-decoration: line-through;
        color: #ccc;
        text-align: center;
        font-weight: bold;
      }
      span:last-of-type {
        .fs(12);
        background: #ff0066;
        color: #eee;
        .border-radius(10);
        .padding(1, 5, 3, 5);
      }
    }

    p.title {
      // word-break: break-all;
      .fs(16);
      font-weight: bold;
      background-color: #fff;
      color: #333;
      .margin(10, 5, 0, 10);
      // .padding(10,0,0,50);
      span.kuajing {
        .fs(14);
        text-indent: 2em;
        background: purple;
        .border-radius(10);
        color: #fff;
        .padding(2, 2, 2, 2);
      }
    }
    p.desc {
      .fs(12);
      color: #666;
      .margin(10, 10, 10, 10);
    }
    .shui {
      .h(93);
      .fs(12);
      background: #eee;
      padding: 0.5rem 0rem 0.5rem 0.5rem;
      color: #333;
      .margin(10, 10, 10, 10);
      box-sizing: border-box;
      p:first-of-type {
        border-bottom: 1px solid #ddd;
        padding: 0rem 0rem 0.4rem 0rem;
        img {
          .w(13);
          .h(13);
        }
        span:nth-of-type(2) {
          .margin(0, 120, 0, 0);
        }
      }
      p:nth-of-type(2) {
        padding: 0.3rem 0rem 0.5rem 0rem;
        span {
          .margin(0, 30, 10, 5);
        }
      }
    }
    .adv {
      .h(156);

      img {
        .w(375);
        .h(156);
      }
    }
    .yunfei {
      .fs(14);
      color: #333;
      border-bottom: solid #eee 0.02rem;
      padding: 0.4rem 0;
      background: #eee;
      p {
        border-bottom: 1px solid #ccc;
        background: #fff;
        padding: 0.8em 1em;
        i {
          .margin(0, 0, 0, 270);
        }
      }
    }
    .commend {
      .fs(14);
      .h(44);
      .margin(10, 0, 35, 0);

      p {
        display: flex;
        justify-content: space-between;
        .h(44);
        padding: 0.8em 1em;
        .lh(44);

        // border:1px solid #ccc;
        span {
          color: #f06;
          i {
            .margin(0, 0, 0, 5);
            color: #000;
          }
        }
      }
    }
    .pinpai,
    .recommend {
      .h(286);
      .fs(14);
      // background: red;
      // .margin(20,0,10,0);
      .ptop {
        display: flex;
        .h(84);
        justify-content: space-between;
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
      }
      ul.goods {
        // .h(189);
        display: flex;
        justify-contert: space-between;
        background: #fff;
        li {
          width: 33.3%;

          img {
            .w(100);
            .h(86);
            .padding(0, 10, 0, 15);
            background: #fff;
          }
          p {
            .fs(12);
          }
          p:first-of-type {
            // .h(40);
            // text-align: center;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          p:nth-of-type(2) {
            text-align: center;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #999;
          }
          p:last-of-type {
            color: #ff0066;
          }
        }
        p:nth-of-type(3) {
        }
      }
    }
    .recommend {
      margin-bottom: 40px;
      background: #eee;
      .h(230);
      .ptop {
        align-items: center;
        p {
          flex: 1;
          text-align: center;
          border-bottom: 1px solid #ccc;
          .padding(0, 0, 20, 0);
        }
      }
    }
  }
  .nav {
    ul {
      .w(350);
      display: flex;
      justify-content: center;
      // align-items:center;
      // justify-content:center;
      // .padding(20,20,20,20);
      .fs(16);
      margin: 0 auto;
      // border-bottom:1px solid #8FC320;

      li {
        .w(175);
        .h(45);
        border-bottom: 2px solid #fff;
        .lh(45);
        text-align: center;
        .margin(5, 5, 15, 5);
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
}
</style>

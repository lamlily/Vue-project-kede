
<template>
  <div class="detailslist">
    <div class="top">
      <mt-swipe :auto="auto" :speed="speed" class="banner">
        <mt-swipe-item class="banner-item" v-for="(item,idx) in imgurl" :key="idx">
          <img class="img" :src="item" alt>
        </mt-swipe-item>
        <!-- <mt-swipe-item>32222</mt-swipe-item> -->
      </mt-swipe>
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
                  <img
                    style="margin-right:70px;"
                    src="https://pic.keede.com//app/images/sinaimg.gif"
                    alt
                    class="touxiang"
                  >
                  <p style="margin-right:60px;">1***A</p>
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
</template>
<script >
//引入vue
import Vue from "vue";
export default {
  name: "Detailslist",
  data() {
    return {
      auto: 5000, //自动播放间隔时长
      speed: 300, //动画持续时长
      imgurl: [
        require("../../../assets/b1.jpg"),
        require("../../../assets/b2.jpg"),
        require("../../../assets/b3.jpg")
      ],
      navlist: [
        { icon: "fa fa-file-code-o ", title: "简介", path: "simpledesc" },
        { icon: "fa fa-picture-o", title: "详情", path: "detaildesc" },
        { icon: "fa fa-commenting-o", title: "评论", path: "commend" }
      ],
      selInit: "simpledesc",
    };
  },
  methods: {
    toggle(val) {
      this.selInit = val;
    }
  },
  created() {}
};
</script>
<style lang="less" scoped>
// 引入配置样式总模块，固定写法
@import url("../../../styls/main.less");
.detailslist {
  //限制最大宽度
  // max-width: @divMaxWidth;
  // margin: @divMargin;
  .top {
    .w(375);
    .h(245);
    .margin(45, 0, 0, 0);
    .turn {
      .h(36);
    }
    .banner {
      .h(225);
      .banner-item {
        .h(225);
        .img {
          .w(375);
          .h(245);
        }
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
              // .margin(0, 20, 0, 20);
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
      .margin(10, 0, 10, 20);
      border-bottom: 1px solid #ddd;
      .ptop {
        display: flex;
        .h(50);
        .lh(50);
        justify-content: space-between;
        background: #fff;
        // border-bottom: 1px solid #ddd;
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
        justify-content: space-between;
        background: #fff;
        .lh(30);
        .margin(30, 0, 0, 0);
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
          .pic0 {
            // display:flex;
            img {
              .w(162);
              .h(162);
            }
          }
        }
        li.others {
          display: flex;
          .margin(0, 0, 100, 0);
          border-bottom: 1px solid #ccc;
          .padding(0, 0, 10, 0);
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

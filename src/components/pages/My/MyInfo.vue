<template>
  <div class="myinfo">
    <div class="top">
      <div class="touxiang">
        <img src="../../../assets/touxiang.png">
      </div>
      <div class="info">
        <p class="num">13316032132</p>
        <p class="vip">普通会员</p>
      </div>
    </div>
    <ul class="detailinfo">
        <li class="yue">
            <span class="active">0.00</span>
            <span>余额</span>   
        </li>
        <li class="coupon">
            <span class="active">0.00</span>
            <span>优惠券</span>
        </li>
        <li class="jifen">
            <span class="active">300</span>
            <span>积分</span>  
        </li>
    </ul>
    <ul class="mymenu">
       <li class="menu1">
           <ul>
               <li>我的订单</li>
               <li>查看订单 &nbsp; ></li>
           </ul>
       </li>
       <li class="menu2">
           <ul>
               <li>
                   <span><i class="fa fa-money" aria-hidden="true"></i></span>
                   <span>待付款</span>
               </li>
               <li>
                   <span><i class="fa fa-truck" aria-hidden="true"></i></span>
                   <span>待发货</span>
               </li>
               <li>
                   <span><i class="fa fa-camera" aria-hidden="true"></i> </span>
                   <span>待评价</span>
               </li>
               <li>
                   <span><i class="fa fa-exchange" aria-hidden="true"></i></span>
                   <span>退换货</span>
               </li>
           </ul>
       </li>

    </ul>
    <ul class="myserve">
       <li class="serve1">
           <ul>
               <li>我的服务</li>
           </ul>
       </li>
       <li class="serve2">
           <ul>
               <li>
                   <span><i><img src="../../../assets/1.png" alt=""></i></span>
                   <span>我的拼团</span>
               </li>
               <li>
                   <span><i><img src="../../../assets/2.png" alt=""></i></span>
                   <span>预售优惠</span>
               </li>
               <li>
                   <span><i><img src="../../../assets/3.png" alt=""></i></span>
                   <span>我的收藏</span>
               </li>
               <li>
                   <span><i><img src="../../../assets/4.png" alt=""></i></span>
                   <span>浏览记录</span>
               </li>
               <li>
                   <span><i><img src="../../../assets/5.png" alt=""></i></span>
                   <span>收货地址</span>
               </li>
               <li>
                   <span><i><img src="../../../assets/6.png" alt=""></i></span>
                   <span>验光单</span>
               </li>
           </ul>
       </li>
    </ul>
    <ul class="more">
       <li class="more1">
           <ul>
               <li>我的服务</li>
           </ul>
       </li>
       <li class="more2">
           <ul>
               <li>
                   <span><i><img src="../../../assets/7.png" alt=""></i></span>
                   <span>账户安全</span>
               </li>
               <li>
                   <span><i><img src="../../../assets/8.png" alt=""></i></span>
                   <span>在线客服</span>
               </li>
               <li>
                   <span><i><img src="../../../assets/9.png" alt=""></i></span>
                   <span>电话客服</span>
               </li>
               <li>
                   <span><i><img src="../../../assets/10.png" alt=""></i></span>
                   <span>意见反馈</span>
               </li>
               <li>
                   <span><i><img src="../../../assets/11.png" alt=""></i></span>
                   <span>关于可得</span>
               </li>

           </ul>
       </li>
    </ul>

    <!-- <Footer></Footer> -->


  </div>
</template>

<script >

import Footer from "../../commons/Footer.vue";


export default {
  name: "MyInfo",
  components: {Footer},
  data() {
    return {};
  },
  methods: {},
  created() {}
};
</script>


<style lang="less" scoped>
// 引入配置样式总模块，固定写法
@import url("../../../styls/main.less");
div.myinfo {
    background:#eee;
  div.top {
    .h(150);
    background: linear-gradient(to bottom, #fff, #eee);;
    display:flex;
    align-items:center;
    .padding(40,0,0,0);
    box-sizing:border-box;
    .touxiang {
      img {
        .w(80);
        .h(80);
        .margin(15,15,15,15);
      }
    }
    .info {
      p {
        font-size: 15px;
        color: #000;
        line-height: 30px;
      }
      P:last-of-type{
          background:#FFA926;
          border-radius:25px;
          color:#fff;
      }
    }
  }
  ul.detailinfo{
      display:flex;
      justify-content:space-around;
      .fs(14);
      .h(61);
      border-bottom:1px solid #ddd;
      .padding(0,0,5,0);
      background:#fff;
      box-sizing: content-box;

      li{
          display:flex;
          flex-direction: column;
         .padding(20,0,0,0);
        //  border-right:1px solid #ccc;
        //  justify-content:space-around;
      }
  }
  .active{
      color:#f00;
  }
  ul.mymenu,ul.myserve,ul.more{
      background:#fff;
      .fs(14);
      .margin(0,0,20,0);
      
      
    //   border:1px solid red;
    li.menu1,li.serve1,li.more1{
        border-bottom:1px solid #ddd;
        .h(40);
        ul{
        display:flex;
        justify-content: space-between;
        .h(40);
        .padding(10,20,0,20);
            li:first-of-type{
                .fs(16);
                font-weight:bold;

            }
        }
        // flex-direction: column;
    }
    li.menu2,li.serve2,li.more2{
        ul{
            display:flex;
            justify-content: left;
            flex-wrap:wrap;
            text-align:center;

            // .h(77);
            li{
                display:flex;
                flex-direction: column;
                justify-content:space-between;
                // align-items: center;
                .padding(20,0,20,0);
                width:25%;
                .h(93);
                border:1px solid #ddd;
                border-top:0;
                border-left:0;
                i{
                    .fs(18);
                    img{
                        .w(30);
                        .h(30);
                    }
                }
            

            }
        }
    }
    li.more2{
        .margin(0,0,55,0);
    }
}


}
</style>

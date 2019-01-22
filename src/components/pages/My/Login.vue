<template>
  <div class="login">
    
    <div class="my_nav">
        <img class="topimg" src="../../../assets/login.png" alt="">      
        <ul>         
            <li
            v-for="(item,index) in navlist" 
            :key="index"
            @click="toggle(item.path)"
            :class='selInit==item.path?"sel":""'
            >{{item.title}}</li>             
        </ul>         
    </div>
    <!-- <Mylist :path='selInit'></Mylist> -->


    <form action>
      <!-- <h4>注册</h4> -->
      <input type="text" placeholder="手机号/邮箱">
      <input type="text" placeholder="动态验证码" class="getcode">
      <span class="code">
        <a href class="getcode2">获取验证码</a>
      </span>
      <span></span>
      <input type="button" value="提交">
      <span class="xieyi">点击提交表示已同意
        <a class="xieyi" href="#">《可得用户协议》</a>
      </span>
      <span>———————————&nbsp;&nbsp;第三方登录&nbsp;&nbsp;—————————</span>
      <img src="../../../assets/pay.jpg" alt>
    </form>

    <!-- <form action class="mima" >
      <input type="text" placeholder="手机号/邮箱">
      <input type="text" placeholder="密码" class="getcode">  
      <input type="button" value="登录">
      <a href="#" class="forget">忘记密码</a> <br/>
      <span>———————————&nbsp;&nbsp;第三方登录&nbsp;&nbsp;—————————</span>
    </form> -->
    
  </div>
</template>


<script >
export default {
  name: "Login",
  components: {},
  data(){
      return{
        navlist:[{title:"快速登录/注册",path:"toregister"},{title:"密码登录",path:"tologin"}],
        selInit:"toregister"
      }
  },
  methods:{
      toggle(val){
          this.selInit = val;
      }
  },
  created() {}
};
</script>


<style lang="less" scoped>
// 引入配置样式总模块，固定写法
@import url("../../../styls/main.less");
form {
  height: 100%;
  // background: pink;
  position: relative;

  h4 {
    .w(37);
    .h(70);
    color: #999;
    .fs(18);
    text-align: center;
    .lh(70);
    margin: 0 auto;
  }
  input {
    .w(330);
    .h(40);
    border: 1px solid #ccc;
    .padding(0, 0, 0, 10);
    // box-sizing: border-box;
  }

  span.code {
    position: absolute;
    .right(30);
    .top(140);
    .w(70);
    .h(23);
    .fs(14);
    .lh(23);
    // border-left: 1px solid #ccc;
    // padding-left: 15px;
    .padding(0, 0, 0, 15);
  }
  input.uname {
    .w(150);
    .h(44);
    .margin(0, 10, 0, 0);
  }
  input.getcode {
    .margin(0, 20, 0, 18);
  }
  input:nth-of-type(4) {
    .margin(0, 0, 0, 7);
  }
  p:last-of-type {
    .w(330);
    .h(50);
    .fs(12);
    // margin:5px auto;
    text-align: left;
    color: #999;
    .margin(15, 0, 0, 15);
  }
  input.checkbox {
    .w(12);
    .h(12);
    margin-left: 0;
  }
  span:last-of-type {
    .fs(12);
    color: #999;
  }
  span.xieyi {
    .fs(12);
    .padding(0, 95, 0, 10);
  }
  input:last-of-type {
    .margin(20, 5, 0, 10);
    background: #89b929;
    color: #fff;
    .fs(16);
  }
  a.getcode2 {
    text-decoration: none;
    color: #999;
    position: absolute;
    right: 0px;
    bottom: 70px;

  }
  a.xieyi {
    color: #8fc320;
  }

}

form.mima{
    a.forget{
        text-align:right;
        .margin(5,5,5,255);
        .fs(14);
        color:#EDAE1B;
    }
}


.my_nav{
    ul{
        .w(350);
        display:flex;
        justify-content:center;
        // align-items:center;
        // justify-content:center;
        // .padding(20,20,20,20);
        .fs(16);
        margin:0 auto;           
        // border-bottom:1px solid #8FC320;

        li{
            .w(175);
            .h(45);
            border-bottom:2px solid #fff;
            .lh(45);
            text-align: center;
            .margin(5,5,15,5);
        }
        .sel{
            border-bottom:3px solid #8FC320;
            // color:#8FC320;
            font-weight:bold;
            .fs(18);
        }
    }
    img.topimg{
        .w(375);
        .h(194);
    }

} 

</style>

<template>
  <div class="login">
    <form action>
      <h4>注册</h4>
      <input type="text" placeholder="手机号/邮箱">
      <input type="text" placeholder="动态验证码" class="getcode">
      <span class="code">
        <a href>获取验证码</a>           
      </span>    
      <span class="xieyi">点击提交表示已同意《可得用户协议》</span>
      <span>
      </span>
      <input type="button" value="提交">
      <span>————————————  第三方登录  ——————————</span>
    </form>
  </div>
</template>


<script >
export default {
  name: "Login",
  components: {},
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
form{
    height:100%;
    // background: pink;
    position:relative;

    h4{
        .w(37);
        .h(70);
        color:#999;
        .fs(18);
        text-align: center;
        .lh(70);
        margin:0 auto;
    }
    input{
        .w(330);
        .h(40);
        border:1px solid #ccc;
        .padding(0,0,0,10);
        // box-sizing: border-box;

    }

    span.code{
        position:absolute;
        .right(30);
        .top(140);
        .w(70);
        .h(23);
        .fs(14);
        .lh(23);
        border-left:1px solid #ccc;
        // padding-left: 15px;
        .padding(0,0,0,15);

    }
    input.uname{
        .w(150);
        .h(44);
        .margin(0,10,0,0);
    }
    input.getcode{
        .margin(0,20,0,15);

    }
    input:nth-of-type(4){
        .margin(0,0,0,7);
    }
    p:last-of-type{
        .w(330);
        .h(50);
        .fs(12);
        // margin:5px auto;
        text-align: left;
        color:#999;
        .margin(15,0,0,20);
    }
    input.checkbox{
        .w(12);
        .h(12);
        margin-left:0;        
    }
    span:last-of-type{
        .fs(12);
    }
    span.xieyi{
        .fs(12);
        .padding(0,95,0,10);

    }
    input:last-of-type{
        .margin(20,0,0,0);
        background:#58bc58;
        color:#fff;
        .fs(16);

    }
    a{text-decoration:none;color:#58bc58;}

}


</style>

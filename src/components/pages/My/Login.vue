<template>
  <div class="login">
    <div class="my_nav">
      <img class="topimg" src="../../../assets/login.png" alt>
      <ul>
        <li
          v-for="(item,index) in navlist"
          :key="index"
          @click="toggle(item.path)"
          :class="selInit==item.path?'sel':''"
        >{{item.title}}</li>
      </ul>
    </div>
    <!-- <Mylist :path='selInit'></Mylist> -->
    <form action>
      <!-- <h4>注册</h4> -->
      <input type="text" placeholder="手机号/邮箱" class="uname" v-model="user">
      <input
        type="text"
        :placeholder="selInit=='toregister'?'动态验证码':'密码'"
        class="getcode"
        v-model="password"
      >
      <span class="code">
        <span class="getcode2" :class="selInit=='toregister'?'':'hide'">获取验证码</span>
      </span>
      <span></span>
      <input type="button" value="提交" class="submit" @click="getData" style="margin-left:25px;">
      <span class="xieyi">
        点击提交表示已同意
        <a class="xieyi" href="#">《可得用户协议》</a>
      </span>
      <span style="margin-left:25px;">—————————&nbsp;&nbsp;第三方登录&nbsp;&nbsp;——————————</span>
      <img src="../../../assets/pay.jpg" alt>
    </form>
  </div>
</template>


<script >
export default {
  name: "Login",
  components: {},
  data() {
    return {
      navlist: [
        { title: "快速登录/注册", path: "toregister" },
        { title: "密码登录", path: "tologin" }
      ],
      selInit: "tologin",
      rootPath: "",

      user: null,
      password: null,
      isTrue: true
      // formlist:["动态验证码","密码"]
    };
  },
  methods: {
    toggle(val) {
      this.selInit = val;
    },

    getData() {
      if (this.isTrue == true) {
        console.log(1111111111111);

        if (this.password != null) {
          console.log(2222222222222);
          
          var params = new URLSearchParams();
          params.append("uname", this.username);
          params.append("getcode", this.password);
          console.log(8888888);
          this.$axios
            .get(
              `${this.rootPath}/users/login`,
              // params)
              {
                params: {
                  user: this.user,
                  password: this.password
                }
              }
            )
            .then(res => {
              this.goods = res.data.data;
              console.log(res);
              if (res.data.status == "success") {
                location.href = "/";
                let isLogin = true;
              } else {
                alert("密码错误");
              }
            })
            .catch(err => {
              console.log(err);
            });
        }
      }
    }

    //   this.$axios({
    //     method: "post",
    //     // headers: { "content-type": "application/x-www-form-urlencoded" },//局部更改
    //     url: "http://47.93.0.253:3000/users/login",
    //     data: this.$qs.stringify({
    //       name: "lemon"
    //     })
    //   }).then(res => {
    //     console.log(res);
    //   });
    // }
  },
  created() {
    this.rootPath = this.$store.getters.getRootPath;
    // this.getData();
  }
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
    // .w(150);
    .h(44);
    .margin(0, 10, 0, 25);
  }
  input.getcode {
    .margin(0, 20, 0, 25);
  }
  input.submit{
    .margin(0, 0, 0, 15);
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
    .margin(0, 0, 0, 18);
  }
  span.xieyi {
    .fs(12);
    .padding(0, 95, 0, 20);
  }
  input:last-of-type {
    .margin(20, 5, 0, 20);
    background: #89b929;
    color: #fff;
    .fs(16);
  }
  span.getcode2 {
    text-decoration: none;
    color: #999;
    position: absolute;
    right: -8px;
    bottom: 70px;
    .margin(0, 12, 0, 0);
    border-left: 1px solid #ddd;
  }
  a.xieyi {
    color: #8fc320;
  }
}

form.mima {
  a.forget {
    text-align: right;
    .margin(5, 5, 5, 255);
    .fs(14);
    color: #edae1b;
  }
}

.hide {
  display: none;
}

.my_nav {
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
    }
    .sel {
      border-bottom: 3px solid #8fc320;
      // color:#8FC320;
      font-weight: bold;
      .fs(18);
    }
  }
  img.topimg {
    .w(375);
    .h(194);
  }
}

</style>

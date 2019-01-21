<template>
  <div class="slider">
    <!-- <h1>{{name}}</h1> -->
    <!-- 添加动画在元素前 -->
    <transition
      enter-active-class="animated slideInLeft"
      leave-active-class="animated slideOutLeft"
    >
      <!-- 导航侧边栏 -->
      <ul v-show="show">
        <!--循环动态生成li导航侧边栏  -->
        <li v-for="(item,index) in navlist" :key="index" @click="goPage(item.path)">
          <!-- @click='hide' -->
          <!-- 点击侧边栏隐藏再跳转 -->
          {{item.name}}
          <!-- {{show}} -->
          <i class="fa fa-angle-right" aria-hidden="true"></i>

          <!-- 把Li变成切换的路由 -->
          <!--   <router-link
                     v-for="(item,index) in navlist" 
                     :key="index"
                     @click="hide"
                      :to='item.path' 
                      tag="li"
          active-class="red">{{item.name}}</router-link>-->
          <!-- 注意若to=“变量”则将to 改为:to -->
          <!-- <router-link to="/movie" tag="li" active-class="red">电影页</router-link> -->
          <!-- 注意：侧边栏点击事件无法隐藏因为router-link不能也不这么实现事件所以用回Li标签+router.push()/router.replace写代码的方式而非《标签router-link》实现跳转 -->
        </li>

        <!-- li>影片
                    <i class="fa fa-angle-right" aria-hidden="true"></i>   
                </li>
                <li>影院
                    <i class="fa fa-angle-right" aria-hidden="true"></i>   
                </li>
                <li>商城
                    <i class="fa fa-angle-right" aria-hidden="true"></i>   
                </li>
                <li>我的
                    <i class="fa fa-angle-right" aria-hidden="true"></i>   
                </li>
                <li>卖座卡
                    <i class="fa fa-angle-right" aria-hidden="true"></i>   
        </li>-->
      </ul>
    </transition>

    <!-- 添加动画在元素前 -->
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <!-- 遮罩层，层级要在侧边栏下面，首页上面 -->
      <div class="mask" v-show="show"></div>
    </transition>
  </div>
</template>


<script type="text/javascript">
export default {
  name: "Slider",
  props: ["show"],
  data() {
    return {
      // name:'这里是Slider组件'
      // navlist:['首页','影片','影院','商城','我的','卖卡座']
      //为了可以获取到 name名字  和  to 跳转的path 把数组改为数组对象；因为每一个选项要跳转到不同的页面 item.path; item.name
      navlist: [
        { name: "首页", path: "/home" },
        { name: "影片", path: "/movie" },
        { name: "影院", path: "/details" },
        { name: "商城", path: "/shopmall" },
        { name: "我的", path: "/my" },
        { name: "卖卡座", path: "/vipcard" }
      ]
    };
  },
  // 点击隐藏侧栏再跳转to 其他页面（子组件修改父组件的某个值 :show 用 回调或者 自定义事件）
  methods: {
    // hide(){
    // 将hide隐藏侧边栏改为既隐藏又跳转的功能gopage(传参)
    goPage(path) {
      // 首先触发自定义再跳转；
      console.log(777);
      //子元素触发自定义事件
      this.$emit("sliderhide");
      // 跳转页面
      this.$router.push(path);
    }
  }
};
</script>


<style lang='less' scoped >
/*引入配置样式*/
@import url("../../styls/main.less");
.slider {
  /*color:skyblue;*/
  ul {
    position: fixed;
    .top(50);
    .right(110);
    bottom: 0;
    left: 0;
    z-index: 99;
    background: @bg-nav;
    color: @color-nav;
    /* display:flex;不需要
            justify-content: space-between;*/
    /*.w();
            .h();*/
    li {
      /*.w();*/
      .h(50);
      display: flex;
      justify-content: space-between;
      /*.padding(0,16,0,16);*/
      .padding(0, 16, 0, 16);
      .fs(14);
      align-items: center;
      border: 1px dotted #333;
    }
  }
  .mask {
    position: fixed;
    .top(50);
    right: 0px;
    bottom: 0px;
    left: 0px;
    background: rgba(0, 0, 0, 0.5);
  }
  .red {
    color: red;
  }
}
</style>
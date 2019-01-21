// 1.下载路由 npm install vue-router --save
// 2.注册路由 src下的router下的index.js 路由文件的基本配置
// 引入Vue
import Vue from 'vue'
// 引入VueRouter路由
import VueRouter from 'vue-router'
// 实例化Vue.use才可以调用this.$route
Vue.use(VueRouter)
    //1. 引入组件(3.调用切换跳转组件需要先引入组件)
import Home from '../components/pages/Home/Home.vue'

import App from '../App.vue'
// 引入电影页movie
// import Movie from '../components/pages/Movie/Movie.vue'
// 后缀名vue可以不写
// 引入详情页details
import Details from "../components/pages/Details/Details.vue"

import Classify from "../components/pages/Classify/Classify.vue"
//引入我的页面my
// import My from "../components/pages/My/My.vue"
//引入My我的页面下的子页面login登录页面
import Login from "../components/pages/My/Login.vue"
//引入我的页面下的子页面Myinfo个人信息页面
import Myinfo from "../components/pages/My/MyInfo.vue"


// 2.设置路由 配置
// 写法1：
let router = new VueRouter({
    routes: [
        { path: '/', redirect: 'home' }, //重定向
        //把App.vue作为一个页面，根据子路由来切换相应的模块
        {
            path: '/app',
            component: App,
            name: 'App',
            children: [
                { path: '/home', component: Home, name: 'Home' },
                { path: '/classify', component: Classify, name: 'Classify' },
                // { path: '/car', component: Car, name: 'car' }
            ]
        },
        //根据相应的路由进入相应页面
        { path: '/login', component: Login, name: 'Login' },
        // { path: '/geRen', component: geRen, name: 'geRen' },
        { path: '/details', component: Details, name: 'Details' },
        // { path: '/liebiao', component: GoodsList, name: 'liebiao' }
    ]
})

router.beforeEach((to, from, next) => {
    // let token = localStorage.getItem("token");
    console.log(to.path)
        // if (to.path == '/car' || to.path == 'geren') { //应该先判断token是否验证成功   //注意无限循环
        //     router.push({
        //         name: "Login"
        //     })
        // } else {
        //     next()
        // }

})

// 抛出路由
export default router

// 3.挂载路由App.vue
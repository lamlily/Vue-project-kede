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
// 引入电影页movie
import Movie from '../components/pages/Movie/Movie.vue'
// 后缀名vue可以不写
// 引入详情页details
import Details from "../components/pages/Details/Details.vue"
//引入我的页面my
import My from "../components/pages/My/My.vue"
//引入My我的页面下的子页面login登录页面
import Login from "../components/pages/My/Login.vue"
//引入我的页面下的子页面Myinfo个人信息页面
import Myinfo from "../components/pages/My/MyInfo.vue"


// 2.设置路由 配置
// 写法1：
let router = new VueRouter({
    routes:[
    {
        path:'/',
        component:Home,
        name:'home'
    },
    {
        path:'/home',//hash为home则加载home组件
        component:Home,
        name:'home'
    },
    {
        path:'/movie',
        component:Movie,
        name:'movie'
    },
    {
        //路由传参：
        //1.动态路由
        path:'/details/:id',
        component:Details,
        name:"details"
    },
    
        // 路由传参
        // 2.name+params
        // 3.path+query
        // 以上两种路由传参则不许还要配置直接用上面的
    {
        path:'/my',
        component:My,
        name:'my',
        //嵌套路由，子路由属于父路由，childre:[{},{}]可多个在里面；（嵌套路由的path不加斜杠）
        children:[
            {
                path:'login',
                component:Login,
                name:'login'
            },{
                path:'myinfo',
                component:Myinfo,
                name:'myinfo'
            }
        ]
    }
    ]
})
// 配置路由写法2:
// const routes=[
//     {path:'/home',component: Home,name:'home'},
//     {path:'/movie',component: Movie,name:'movie'}
// ]
// const router = new VueRouter({
//     routes//缩写；相当于 routes: routes
// })



// 抛出路由
export default router

// 3.挂载路由App.vue;
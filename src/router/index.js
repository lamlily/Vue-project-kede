// 1.下载路由 npm install vue-router --save
// 2.注册路由 src下的router下的index.js 路由文件的基本配置
// 引入Vue
import Vue from "vue";
// 引入VueRouter路由
import VueRouter from "vue-router";
// 实例化Vue.use才可以调用this.$route
Vue.use(VueRouter);
//1. 引入组件(3.调用切换跳转组件需要先引入组件)
// 异步加载组件
const Home = () =>
    import ("../components/pages/Home/Home.vue");
// import Home from '../components/pages/Home/Home.vue'

const App = () =>
    import ("../App.vue");
// import App from '../App.vue'
// 后缀名vue可以不写
// 引入详情页details
const Details = () =>
    import ("../components/pages/Details/Details.vue");
// import Details from "../components/pages/Details/Details.vue";

const Classify = () =>
    import ("../components/pages/Classify/Classify.vue");
// import Classify from "../components/pages/Classify/Classify.vue";
// import My from "../components/pages/My/My.vue";

//引入My我的页面下的子页面login登录页面
const Login = () =>
    import ("../components/pages/My/Login.vue");
// import Login from "../components/pages/My/Login.vue";

const Myinfo = () =>
    import ("../components/pages/My/Myinfo.vue");
// import Myinfo from "../components/pages/My/Myinfo.vue";

//引入我的页面下的子页面Myinfo个人信息页面
const My = () =>
    import ("../components/pages/My/My.vue");
// import My from "../components/pages/My/My.vue"
const Car = () =>
    import ("../components/pages/Car/Car.vue");
// import Car from "../components/pages/Car/Car.vue"
const Goods = () =>
    import ("../components/pages/Goods/Goods.vue");
// import Goods from "../components/pages/Goods/Goods.vue"

// 2.设置路由 配置
let router = new VueRouter({
    // 使用history路由模式  默认模式hash（URL中带#）
    mode: "history",
    routes: [
        { path: '/', redirect: 'home' }, //重定向
        //把App.vue作为一个页面，根据子路由来切换相应的模块
        {
            path: "/app",
            component: App,
            name: "App",
            children: [
                { path: "/home", component: Home, name: "Home" },
                //path 的'/home'与'home'的区别，加了斜杠会把app省略
                { path: "/classify", component: Classify, name: "Classify" },
                { path: "/car", component: Car, name: "Car" },
                { path: "/my", component: My, name: "My" },
                { path: "/goods", component: Goods, name: "Goods" }
            ]
        },
        //根据相应的路由进入相应页面
        { path: "/login", component: Login, name: "Login" },
        { path: "/myinfo", component: Myinfo, name: "Myinfo" },
        { path: "/details", component: Details, name: "Details" }
    ],
    // 保持页面滚动距离（顶部）
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    }
});

//使用loader状态
// import { Indicator } from "mint-ui";

// //路由守卫
// router.beforeEach((to, from, next) => {
//   let isLogin = localStorage.getItem("isLogin");
//   console.log(isLogin);
//   console.log(Vue)
//   //发送验证请求，验证token是否过期
//   // let rootPath = this.$store.getters.getRootPath;
//   // this.$axios.post(`${tihs.}`)
//   // if(isLogin){}
//   // console.log(to.path)
//   // if (to.path == '/car' || to.path == '/myinfo') { //应该先判断token是否验证成功   //注意无限循环
//   //     router.push({
//   //         name: "/login"
//   //     })
//   // } else {
//   //     next()
//   // }

//   next();
// });

// 抛出路由
export default router;
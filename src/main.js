// 引入vue
import Vue from "vue";
Vue.config.productionTip = false;
// 引入全局配置样式reset.less  ： import + url
import "./styls/reset.less";
// 引入动画animate.css
import "../node_modules/animate.css/animate.css";
Vue.config.productionTip = false;

// 引入axios为了发起ajax请数据，第三方插件；把axios挂在到父类原型链上，所有子类组件都可以继承该属性；（不用每个组件都写调用）
import Axios from "axios";
Vue.prototype.$axios = Axios;
Axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded"; //全局更改
import qs from "qs"; //配合qs模块转化post请求的参数，记得先npm install qs
Vue.prototype.$qs = qs;

// 创建过滤器，注册(一定要返回数据return)（日期，年月日）
// how引用（要替换的数据 |  注册的过滤器）
Vue.filter("getDate", function(value) {
    // return new Date(value).getDate()+'月'+new Date(value).getDate()+'日'
    return (
        new Date(value).getMonth() + 1 + "月" + new Date(value).getDate() + "日"
    );
    // 如何拼接日期
});
//创建过滤器（星期几）
Vue.filter("getDay", function(value) {
    // return new Date(value).getDate()+'月'+new Date(value).getDate()+'日'
    var w = new Date(value).getDay();
    var str = "日一二三四五六";
    // 0为日，1为一，2为二，3为三，4为四，5为五；6为六；
    var w2 = str[w];
    return w2;
    // 如何拼接日期
});

// 引入路由，挂载到实例new Vue中加上router，则子类组件都可以继承通过this.$route进行使用
import router from "./router/index.js";

// 引入MintUi的使用（引入组件和全局的css文件并实例化）
//已引入全部mint-ui，无需再在组件内引入组件，可直接复制样式文件使用该UI
import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
Vue.use(MintUI);

import store from "./store/index.js";

//路由守卫
router.beforeEach((to, from, next) => {
    let isLogin = localStorage.getItem("isLogin");
    console.log(to.path);
    //发送验证请求，验证token是否过期
    let rootPath = store.getters.getRootPath;
    Axios.post(
            `${rootPath}/users/autoLoginKua`,
            qs.stringify({
                token: isLogin
            })
        )
        .then(res => {
            let status = res.data.status;
            if (status === true) {
                next();
            } else {
                console.log(false);
                let path = to.path;
                if (path == "/car" || path == "/myinfo") {
                    router.push(
                        "/login",
                        () => {},
                        e => {
                            console.log(e);
                        }
                    );
                    // next();为什么不用next函数也能进入下一步
                } else {
                    next();
                }
            }
        })
        .catch(err => {
            console.log(err);
        });
    // next();
});

/* eslint-disable no-new */
let vm = new Vue({
    el: "#app",
    router,
    store,
    create() {},
    // 把App组件挂载到#app的这个节点上
    render: h => h("router-view")
});
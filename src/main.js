// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 引入vue
import App from './App'
// 引入一个组件
Vue.config.productionTip = false
    // 引入全局配置样式reset.less  ： import + urls
import './styls/reset.less'
// 引入动画animate.css
import '../node_modules/animate.css/animate.css'
Vue.config.productionTip = false

// 引入axios为了发起ajax请数据，第三方插件；把axios挂在到父类圆形脸上，所有子类组件都可以继承该属性；（不用每个组件都写调用）
import Axios from 'axios'
Vue.prototype.$axios = Axios

// 创建过滤器，注册(一定要返回数据return)（日期，年月日）
// how引用（要替换的数据 |  注册的过滤器）
Vue.filter('getDate', function(value) {
        // return new Date(value).getDate()+'月'+new Date(value).getDate()+'日'
        return new Date(value).getMonth() + 1 + '月' + new Date(value).getDate() + '日'
            // 如何拼接日期
    })
    //创建过滤器（星期几） 
Vue.filter('getDay', function(value) {
    // return new Date(value).getDate()+'月'+new Date(value).getDate()+'日'
    var w = new Date(value).getDay()
    var str = "日一二三四五六"
        // 0为日，1为一，2为二，3为三，4为四，5为五；6为六；
    var w2 = str[w]
    return w2
        // 如何拼接日期
})



// 引入路由，挂载到实例new Vue中加上router，则子类组件都可以继承通过this.$route进行使用
import router from './router/index.js'


// 引入MintUi的使用（引入组件和全局的css文件并实例化）
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})


// vue的文档，在vue官网，学习-教程
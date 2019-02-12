// 状态管理
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// 实例化Vuex，创建一个仓库
// 库
const store = new Vuex.Store({
    state: {
        // 根路径
        rootPath: "http://47.93.0.253:3000",

        // 毒物页之间的兄弟传参
        goodType: "",
        goodsList: [],
        // 判断登录状态
        isLogin: false

    },
    // 修改数据的方法 真正改数据的操作
    mutations: {
        // 修改数据的第一个方法
        editGoodType(state, obj) {
            state.goodType = obj.goodType;
            state.goodsList = obj.goodsList;
        },
        editGallery(state, obj) {
            state.galleryImgUrl = obj.galleryImgUrl;
            state.galleryStatus = obj.galleryStatus;
        },
        editisLogin(state, obj) {
            state.isLogin = obj.isLogin;
        }



    },
    // 获取数据的方法
    getters: {
        // 获取GoodType的方法
        getGoodType(state) {
            return {
                goodType: state.goodType,
                goodsList: state.goodsList
            }
        },

        getRootPath(state) {
            return state.rootPath;
        },
        getIsLogin(state) {
            return state.isLogin;
        }
    },
    // 异步的方法放这里
    // 触发多个数据的改变才使用
    // 触发mutations，其实就是把刚才commit从组件放出来，换个地方放到actions
    actions: {
        setAuthor(context, data) {
            context.commit("editAuthor", data);
            // context.commit('editCount')
        },
        setGallery(context, obj) {
            setTimeout(() => {
                context.commit("editGallery", obj);
            }, 1000);
        }
    }
});
// 暴露store仓库到`main.js`的根容器里面
// console.log(Vuex,store)
export default store;
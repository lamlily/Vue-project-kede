
<!-- 详情页需要先判断是否有发起ajax请求，如果有则为该页重新发起的请求，若没有则为首页的数据请求；详情页 用路由传参 vue-router  1.routes:[{path:'/user/:id",component:User}]  2.$route params:  router.push({name:'user",params:{userId:123}})  

跳转到详情页两种方式；router-link或this.$router.push()编程式导航用-->
<template>
    <div class="details" >
        <!-- 我是details -->
      <ul>
        <img src=""></img>
        <li class="desc">
            <p>影片简介</p>
            <p>导演：{{detailsinfo.director}}</p>
            <p>主演：{{detailsinfo.actors}}</p>
            <p>地区语言：{{detailsinfo.language}}</p>
            <p>类型：{{detailsinfo.category}}</p>
            <p>上映日期：{{detailsinfo.premiereAt|getDate}}上映</p>
            <p> {{detailsinfo.synopsis}}</p>
        </li>
        <button class="buyBtn">立即购票</button>
        <!-- {{detailsinfo}} -->
      </ul>
    </div>

</template>


<script >


    export default{
        name:'Details',
        components:{},
        data(){
            return{
              detailsinfo:'111'
            }
        },
       methods:{

       },
        // 获取传参一般在生命周期的created（）中
        created(){
            // console.log(this.$router)
            // 此处获取到的params是在数组的hisory--current--params中太麻烦
            // 应该用 this.$route来获取传参，直接数组里的得到params
            console.log(this.$route)
            console.log(this.$route.params.id)//得到123
            let id = this.$route.params.id
            // 接收到参数后就发起ajax请求(把请求的网址写到这里，注意跨域问题，要其暗号   s/api/,参数用 ${参数}同时记得把homelist的传参也改为${id}方法中就要传参，外面的引号改为字符串模版反引号)
            this.$axios.get(`/api/v4/api/film/${id}?__t=1542619980901`)
            .then((res)=>{
                console.log(res)
                this.detailsinfo=res.data.data.film
                // console.log(res.data.data.film)
                // console.log(this.detailsinfo)
            })
            .catch((err)=>{
                console.log(err)
            })
        }


    }

</script>


<style lang="less" scoped>
// 引入配置样式总模块，固定写法
@import url('../../../styls/main.less');
ul{
    .w(375);
    .h(592);
    background: #eee;

    img{
        .w(375);
        .h(211);
        background: #000;
    }
    li{
        .fs(12);
        text-align: left;
        .padding(0,0,0,20);
        p{
            .margin(0,0,5,0);
        }
        p:first-child{
            .fs(16);
        }
    }
    button{
        .fs(14);
        .w(156);
        .h(36);
        background: orange;
        color:#fff;
        border-radius: 15px;
    }
}

    
    
</style>


<!-- 详情页需要先判断是否有发起ajax请求，如果有则为该页重新发起的请求，若没有则为首页的数据请求；详情页 用路由传参 vue-router  1.routes:[{path:'/user/:id",component:User}]  2.$route params:  router.push({name:'user",params:{userId:123}})  -->
<template>
    <div class="details" >
        我是details
      <ul>
        <img src=""></img>
        <li class="desc"></li>
      </ul>
    </div>

</template>


<script >


    export default{
        name:'Details',
        components:{},
        data(){
            return{
              
            }
        },
        methods:{
            getData(){
                // 从网站的首页-network-xhr(now-playing)-headers-requesturl中找到请求的地址
                // https://m.maizuo.com/v4/api/film/now-playing?__t=1542360314865&page=1&count=5
                // axios已经挂在到了vue的实例中，子组件可以调用
                //console.log(this.li/st.path)
                this.$axios.get(`/api/v4/api/film/${this.path}`,{
                    // /api//v4/api/film/now-playing'
                    
                    __t:new Date().getTime(),//获取当前时间戳1542360314865,
                    page:1,
                    count:1
                })
                .then((res)=>{
                    // 从网站的首页-network-xhr(now-playing)-preview中找到data.films
                    this.movielist=res.data.data.films
                    console.log(res.data.data)
                })
                .catch((err)=>{
                    console.log(err)
                })
            }
        },
        created(){
        
        }


    }

</script>


<style lang="less" scoped>
// 引入配置样式总模块，固定写法
@import url('../../../styls/main.less');


    
    
</style>

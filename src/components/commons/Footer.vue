<template>
    <div class="footer" >
       <ul>
           <!-- li @click='goPage(item.path)'>
                <i class="fa fa-university" aria-hidden="true"></i>
                <span>商城</span>
            </li>
           <li @click='goPage(item.path)'>
                <i class="fa fa-bars" aria-hidden="true"></i>
                <span>分类</span>
           </li>
           <li @click='goPage(item.path)'>
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                <span>购物车</span>
           </li>
           <li @click='goPage(item.path)'>
                <i class="fa fa-user" aria-hidden="true"></i>
                <span>我的</span>
           </li> -->
           <li 
           v-for="(item,index) in tablist"
           :key="index"
           @click='goPage(item.path),sel(item.name)'  
            
           >
           <!-- 点击事件多个用逗号隔开 -->
                <i :class="item.icon" aria-hidden="true" 
                ></i>
                <span :class='selInit==item.name?"active":" "' >{{item.name}}</span>
           </li>
       </ul>
    </div>

</template>


<script >

    export default{
        name:'Footer',
        components:{},
        data(){
            return{
              tablist:[{name:'首页',path:"/home",icon:"fa fa-university"},{name:'毒物',path:"/goods",icon:"fa fa-bars"},{name:'购物车',path:'/shoppingcar',icon:"fa fa-shopping-cart"},{name:'我的',path:"/my",icon:"fa fa-user"}],

              selInit:"首页"
            }
        },
        methods:{
          //添加高亮类名
          sel(name){
            this.selInit=name
          },
          

           goPage(path){
            console.log(999)
            this.$router.push(path)
           }
        },
        created(){
        
        }


    }

</script>


<style lang="less" scoped>
// 引入配置样式总模块，固定写法
@import url('../../styls/main.less');

.footer{
    .w(375);
    .h(56);
    position:fixed;
    bottom:0;
    left:0;
    right:0;
    background: #fff;

    ul{
        display:flex;
        jsutify-content:space-between;
        li{
            // .w(20);
            flex:1;
            .fs(12);
            display:flex;
            flex-direction:column;
            jsutify-content:center;
            text-align: center;
            .padding(5,5,5,5);
            color:#999;
            margin-top: 5px;
            i{
                .fs(22);
            }

        }
    }
}
.active{
    // background: #ff0066;
    color:#8FC320;
}

    
    
</style>

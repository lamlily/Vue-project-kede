<template>
    <div class="Details_footer" >
       <ul class="tab1">
           <li 
           v-for="(item,index) in tablist"
           :key="index"
           @click='goPage(item.path),sel(item.name)'   
           >
           <!-- 点击事件多个用逗号隔开 -->
                <i :class="item.icon" aria-hidden="true" ></i>
                <span :class='selInit==item.name?"active":" "'>{{item.name}}</span>
           </li>
       </ul>

       <ul class="tab2">
            <li 
            v-for="(item,index2) in tablist2"
           :key="index2"
           @click='goPage(item.path),sel(item.name)'
           >
                <i :class="item.icon" aria-hidden="true" ></i>
                <span :class='selInit==item.name?"active":" "'>{{item.name}}</span>
           </li>
       </ul>
    </div>

</template>


<script >


    export default{
        name:'Details_footer',
        components:{},
        data(){
            return{
              tablist:[{name:'首页',path:"/home",icon:"fa fa-university"},{name:'收藏',path:"",icon:"fa fa-heart-o"},{name:'购物车',path:"/car",icon:"fa fa-shopping-bag"}],
              tablist2:[{name:'加入购物车',path:'',icon:"fa fa-shopping-cart"}],
              selInit:""
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
@import url('../../../styls/main.less');

.Details_footer{
    .w(375);
    .h(56);
    z-index: 1000;
    position:fixed;
    bottom:0;
    left:0;
    right:0;
    background: #000;
    color:#fff;
    display:flex;
    jsutify-content:space-between;
    

    ul{
        width:50%;
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
            margin-top: 5px;
            i{
                .fs(22);
                color:#999;
            }

        }
    }
    ul.tab2{
        background: #8FC320;
        border-top:1px solid #8FC320;
       
        li{
            flex-direction: row;
            justify-content: center;
            align-items: center;
             .fs(16);
            i{
                color:#fff;
                .margin(4,10,0,0);
            }
        }
    }
    

}
.active{
    // background: #ff0066;
    color:#8FC320;
}

    
    
</style>

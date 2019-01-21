<template>
    <div class="footer" >
       <ul>
           <li 
           v-for="(item,index) in tablist"
           :key="index"
           @click='goPage(item.path),sel(item.name)'   
           >
           <!-- 点击事件多个用逗号隔开 -->
                <i :class="item.icon" aria-hidden="true" ></i>
               <!--  <span :class='selInit==item.name?"active":" "'></span> -->
               <!--  <i class="fa fa-map-o" aria-hidden="true"></i> -->
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
              tablist:[{name:'商城',path:"/home",icon:"fa fa-arrow-circle-left"},{name:'分类',path:"/goods",icon:"fa fa-arrow-circle-right"},{name:'商',path:"/home",icon:"fa fa-folder-o"},{name:'购物车',path:'/shoppingcar',icon:"fa fa-columns"},{name:'我的',path:"/my",icon:"fa fa-window-restore"}],

              selInit:"商城"
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
    
    position:fixed;
    bottom:0;
    left:0;
    right:0;
    ul{
      .h(45);
        display:flex;
        jsutify-content:space-between;
        background: #fff;
        background: #eee;

        li{
            // .w(20);
            flex:1;
            .fs(12);
            // display:flex;
            // flex-direction:column;
            jsutify-content:center;
            text-align: center;
            .lh(45);
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
    color:#ff0066;
}

    
    
</style>

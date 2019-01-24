<template>
    <div class="Car_footer" >
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
              tablist:[{name:"总金额￥606.00 已优惠￥108.00"},{name:"合计￥498.00（不含运费）"}],
              tablist2:[{name:'结算（6）',path:''}],
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

.Car_footer{
    .w(375);
    .h(70);
    z-index: 1000;
    position:fixed;
    bottom:55px;
    left:0;
    right:0;
    background: #000;
    color:#fff;
    display:flex;
    justify-content:space-between;
    

    ul{
        .padding(0,10,0,20);
        li{
            .fs(12);
            i{
                .fs(22);
                color:#999;
            }

        }
    }
    ul.tab2{
        width:33.33%;
        background: #8FC320;
        border-top:1px solid #8FC320;
       .lh(70);
       text-align:center;
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
    color:#000;
}

    
    
</style>

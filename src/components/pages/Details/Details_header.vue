<template>
    <div class="Details_header">
        <!-- <div>这里是header</div> -->
        <div class="box">
           <i class="fa fa-angle-left" aria-hidden="true"></i> 
           <span>
               <i class="fa fa-star-o" aria-hidden="true"></i>
                />
               <i class="fa fa-share-square-o" aria-hidden="true"></i> 
           </span>        
        </div>
          
    </div>
</template>

<script type="text/javascript">


    export default{
        name:'Details_header',
        components:{},
        data(){
            return{
               
            }
        },
        methods:{
            search(){
                this.$router.push("/search")
            }
        }
    }

</script>


<style lang="less" scoped>
// 引入配置样式总模块，固定写法
@import url('../../styls/main.less');
.Details_header{
    position:fixed;
    top:0;
    left:0;
    z-index:999;
    .box{
        // width:100%;
        // .w(375);
        .h(46);
        // height:2rem;
        // position:fixed;
        top:0;
        left:0;
        // background:#d92e35;
        // 自改色
        background: #ff0066;
        display: flex;
        align-items:center;
        
        // span{
        //     display:flex;
        // }
        
    }
}
</style>

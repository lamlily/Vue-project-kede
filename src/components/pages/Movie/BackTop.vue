<template>
    <div class="backtop" @click='add'>
        <transition
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
        >
            <div class='contain' v-show="show">
                <!--top -->
                <!--字体图标返回顶部箭头 -->
                <i class="fa fa-arrow-up" aria-hidden="true"></i>
            </div>  
        </transition>
    </div>

</template>


<script >


    export default{
        name:'BackTop',
        components:{},
        data(){
            return{
               show:false,
               //默认开始显示为false;
               distance:200
               //监听距离
            }
        },
        methods:{
            add(){
            //点击top按钮滚动返回到顶部
                window.scrollTo(0,0);
            }
        },
        created(){
        //事件监听器
            window.addEventListener('scroll',()=>{
                console.log(window.scrollY)
                //屏幕滚动过的y轴的距离
                let y = window.scrollY
                //判断如果屏幕滚动距离>=设置的distance则显示返回顶部按钮；默认为false；显示为true
                if(y>=this.distance){
                    if(this.show==false){
                    //减少赋值操作；每次j舰艇都赋值操作次数太多
                        this.show=true
                    }

                }else{
                    if(this.show==true){
                        this.show=false
                        //返回距离小于设置距离应该隐藏
                    }
                    
                }
            })
        }


    }

</script>


<style lang="less" scoped>
// 引入配置样式总模块，固定写法
@import url('../../../styls/main.less');
    .contain{
        position:fixed;
        right:20px;
        bottom:20px;
        .w(50);
        .h(50);
        border-radius:50%;
        background:#000;
        color:#fff;
        .fs(22);
        text-align:center;
        .lh(50);
        //display:flex;
        //jsutify-content:center;
        //align-items:center;

        i{
            .w(40);
            .h(40);
        }


    }
    
</style>

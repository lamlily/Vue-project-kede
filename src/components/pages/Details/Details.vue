
<template>
    <div class="details">
        <!-- 我是Details.vue -->

        <detailslist></detailslist>

        <BackTop></BackTop>

        <details_footer></details_footer>

    </div>
</template>


<script type="text/javascript">
import Detailslist from './detailslist.vue'
import BackTop from '../../commons/BackTop.vue'
import Details_footer from "./Details_footer.vue"

    export default{
        name:'Details',
        // 注册组件
        components:{Detailslist,BackTop,Details_footer},
        data(){
            return{
                         
            }
        },
        methods:{
           
        }

    }
</script>


<style lang="less" scoped>
@import url('../../../styls/main.less');


</style>
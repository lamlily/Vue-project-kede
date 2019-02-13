<template>
  <div class="goodNav">
    <div class="swiper-container swiper-container1">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,idx) of nav" @click="getData(item)" :key="idx" :class="goodname ==item? 'active':''">{{item}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper';
export default {
  data() {
    return {
      nav: [
        "隐形眼镜",
        "彩色眼镜",
        "海外购",
        "护理用品",
        "框架眼镜",
        "太阳镜",
        "进口美妆"
      ],
      goodname:""

    };
  },
  methods: {
    // goPage(item) {
    //   console.log(item);
    //   //修改仓库中的数据
    //   this.$store.commit("editGoodType",item);
    //   this.item = item;
    //   // console.log(this.$store.getters.getGoodType);//查看仓库中的数据是否被修改
    // },
    //请求数据
    getData(item){
      this.goodname = item;//改变高亮
      //获取根路径
      let path = this.$store.getters.getRootPath;
      // console.log(path)
      this.$axios.get(path+"/index/findGood",{
        params: {
            goodType:item
          }
      })
      .then((res)=>{
        // console.log(res.data);
        //把数据存进store
        this.$store.commit("editGoodType",{goodsList:res.data});
        // console.log(this.$store.getters.getGoodType.goodsList)
      })
      .catch((err)=>{
        console.log(err)
      })
    }
  },
  created(){
    this.goodname = this.nav[0];//进入页面的第一次请求
    this.getData(this.goodname);
  },
  mounted() {
    let swiper = new Swiper(".swiper-container1", {
      slidesPerView: 5,
      spaceBetween: 10,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  }
};
</script>
<style lang="less" scoped>
@import "../../../styls/mixin.less";
@import url("../../../../node_modules/swiper/dist/css/swiper.min.css");
.goodNav {
  .h(50);
  .w(375);
  .padding(20,10,20,10);
  // .margin(45,0,0,0);
  display: flex;
  justify-content: space-between;
  align-content: center;
  z-index: 999;
  background: #fff;
//   position: fixed;
//   .top(78);
//   .left(0);
//   .right(0);
  .swiper-container1 {
    .h(50);
    // .w(600);
    .swiper-wrapper {
      .h(30);
      .fs(14);
      // .w(50);
      color: #333;
    }
    .active{
      color:blue;
    }
  }
}
</style>

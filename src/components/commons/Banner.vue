<template>
  <div>
    <mt-swipe :auto="auto" :speed="speed" class="banner">
      <mt-swipe-item class="banner-item" v-for= "(item,idx) in imgurl" :key="idx">
        <img class="img" :src="item" alt>
      </mt-swipe-item>
      <!-- <mt-swipe-item>32222</mt-swipe-item> -->
    </mt-swipe>
  </div>
</template>
<script>
export default {
  data() {
    return {
      auto: 5000,//自动播放间隔时长
      speed: 300,//动画持续时长
      imgurl:[
          "https://pic.keede.com/Images/2019app/20190118/banner_sb.jpg",
          "https://pic.keede.com/Images/2018app/20181214/banner_sj.jpg",
          "https://pic.keede.com/event/2019/2018nhjqs/banner_sj.jpg",
          "https://pic.keede.com/event/2019/2019han/banner-kj.jpg",
          "https://pic.keede.com/event/2019/2019han/banner-kj.jpg"
      ]
    };
  }
};
</script>
<style lang="less" scoped>
@import url("../../styls/main.less");
div {
  .margin(20,0,0,0);
  .banner {
    .h(225);
    .banner-item {
      .h(225);
      .img {
        .w(375);
        .h(245);
      }
    }
  }
}
</style>

<template>
  <div class="home_pinpai">
    <ul>
      <li v-for="(item,idx) in imgurl" :key="idx">
        <img :src="item.img" alt>
        <span v-text="item.name"></span>
      </li>
    </ul>
  </div>
</template>


<script type="text/javascript">
export default {
  name: "Home",
  // 注册组件
  components: {},
  data() {
    return {
      imgurl: [
        {
          img:
            "https://pic.keede.com//AppGoodsClassImage/5d4c47a2-4574-4027-81f8-5fdfbd9e0a3c.jpg",
          name: "强生"
        },
        {
          img:
            "https://pic.keede.com//AppGoodsClassImage/5d4c47a2-4574-4027-81f8-5fdfbd9e0a3c.jpg",
          name: "强生"
        },
        {
          img:
            "https://pic.keede.com//AppGoodsClassImage/5d4c47a2-4574-4027-81f8-5fdfbd9e0a3c.jpg",
          name: "强生"
        },
        {
          img:
            "https://pic.keede.com//AppGoodsClassImage/5d4c47a2-4574-4027-81f8-5fdfbd9e0a3c.jpg",
          name: "强生"
        },
        {
          img:
            "https://pic.keede.com//AppGoodsClassImage/5d4c47a2-4574-4027-81f8-5fdfbd9e0a3c.jpg",
          name: "强生"
        },
        {
          img:
            "https://pic.keede.com//AppGoodsClassImage/5d4c47a2-4574-4027-81f8-5fdfbd9e0a3c.jpg",
          name: "强生"
        },
        {
          img:
            "https://pic.keede.com//AppGoodsClassImage/5d4c47a2-4574-4027-81f8-5fdfbd9e0a3c.jpg",
          name: "强生"
        },
        {
          img:
            "https://pic.keede.com//AppGoodsClassImage/5d4c47a2-4574-4027-81f8-5fdfbd9e0a3c.jpg",
          name: "强生"
        }
      ]
    };
  }
};
</script>


<style lang="less" scoped>
@import url("../../../styls/main.less");

.home_pinpai {
  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 25%;
      img {
        width: 70%;
        .margin(15, 0, 15, 0);
      }
      span {
        .fs(14);
        text-align: center;
      }
    }
  }
}
</style>
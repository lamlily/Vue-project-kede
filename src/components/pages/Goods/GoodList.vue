<template>
  <div class="goodlist">
    <ul>
      <li class="li_item" v-for="(item,idx) in goodsList" :key="idx">
        <div class="img_top"><img :src="path+item.imgUrl"></div>
        <div class="p_midd">
          <p v-text="item.goodIntro"></p>
        </div>
        <div class="other_bott">
          <div class="name_l">
            <span>许多年以后</span>
          </div>
          <div class="name_r">
            <i class="fa fa-heart-o" aria-hidden="true"></i>
            <i class="fa fa-heart" aria-hidden="true"></i>
            <span>8</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      goodsList: [],
      path: ""
    };
  },
  methods: {},
  created() {
    //从仓库获取数据
    this.goodsList = this.$store.getters.getGoodType.goodsList;
    this.path = this.$store.getters.getRootPath;
  },
  watch: {
    "$store.getters.getGoodType.goodsList": function() {
      //你需要执行的代码
      this.goodsList = this.$store.getters.getGoodType.goodsList;
      console.log(this.goodsList);
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../../styls/mixin.less";
.goodlist {
  ul {
    .w(375);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background: #eee;
    .li_item {
      width: 48%;
      border: 1px solid #ccc;
      .margin(10, 0, 10, 0);
      background: #fff;
      .img_top {
        img {
          width: 100%;
        }
      }
      .p_midd {
        p {
          .fs(14);
          .padding(5, 10, 5, 10);
        }
      }
      .other_bott {
        display: flex;
        justify-content: space-between;

        .name_l {
          display: flex;
          justify-content: space-between;
          width: 50%;
          .padding(15, 5, 5, 10);
          span {
            .fs(12);
          }
        }
        .name_r {
          display: flex;
          justify-content: space-between;
          width: 50%;
          .padding(15, 5, 5, 10);
          i {
            .fs(14);
          }
          span {
            .fs(14);
          }
        }
      }
    }
  }
}
</style>
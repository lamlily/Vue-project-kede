// 瀑布流布局
<template>
  <div class="goodlist">
    <ul id="wrap" ref="wrap">
      <li class="li_item" v-for="(item,idx) in goodsList" :key="idx" @click="goPage(item.goodId)">
        <div class="img_top">
          <img :src="path+item.imgUrl" ref="img">
        </div>
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
  methods: {
    waterfall() {
      let wrap = this.$refs.wrap;
      // console.log(this.$refs.img[0].offsetHeight);
      let items = wrap.children; //子元素数量
      let itemWidth = items[0].offsetWidth; //元素宽度
      //1.计算列数及列间距
      let cols = parseInt(window.innerWidth / itemWidth); //列数
      let gap = (window.innerWidth % itemWidth) / (cols + 1); //间距
      let pos = [];
      for (var i = 0; i < cols; i++) {
        var obj = {
          left: gap * (i + 1) + itemWidth * i, //记录第一行的left、top数据
          top: gap
        };
        pos.push(obj);
      }
      // 遍历数组，
      for (let i = 0; i < items.length; i++) {
        let currentImg = items[i].children[0].children[0]; //得到img元素节点
        var minIdx = 0;
        var minTop = pos[0].top; //假设第一项为最小值
        for (var j = 0; j < pos.length; j++) {
          if (pos[j].top < minTop) {
            //如果这个值比最小值小则重把这个值赋值为最小值，同时记录列数
            minIdx = j;
            minTop = pos[j].top;
          }
        }
        items[i].style.left = pos[minIdx].left + "px"; //设置定位位置
        items[i].style.top = minTop + "px";
        //更新top值
        pos[minIdx].top += items[i].offsetHeight + gap;
        //设置父元素高度
        wrap.style.height = pos[minIdx].top + 70 + "px";
      }
    },
    goPage(id){
      console.log(id)
      //跳转到商品详情页
      this.$router.push('/details');
    }
  },
  created() {
    //从仓库获取数据
    this.goodsList = this.$store.getters.getGoodType.goodsList;
    this.path = this.$store.getters.getRootPath;
  },
  updated() {
    // 设置延时器，等待图片渲染完成再执行函数，
    setTimeout(() => {
      this.waterfall();
      console.log(9999999999);
    }, 200);
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

    position: relative;
    .li_item {
      width: 43%;
      border: 1px solid #ccc;
      .margin(10, 0, 10, 0);
      background: #fff;

      position: absolute;
      left: 0;
      top: 0;
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
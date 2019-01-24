<template>
  <!-- 简单瀑布流实现，还需改为ref属性，优化节点获取的操作，优化代码 -->
  <!--
  瀑布流布局
      1）计算当前大容器能容纳多少列
          列数 = parseInt(大容器宽度/容器宽度)
      2）计算水平间隔
          间隔 = 大容器宽度%容器宽度/(列数+1)
      3）创建一个数组pos
          用来保存第一行每列图片左上角坐标(left,top)
      4）遍历所有items，定位
          遍历数组pos，查找最小top值，然后更新当前top值
              top += gap + 容器高度(等待图片加载完毕后才能获取到)
          *异步加载，for循环遍历很快，onload需要等待，i已经加到了最大值。
      * 滚动条宽度为17px，记得减掉
  -->
  <div class="wrap" id="wrap" ref="wrap">
    <div v-for="(item,idx) in imgsArr" :key="idx">
      <h3>瀑布流</h3>
      <a href="#" title>
        <img :src="item.src" alt title>
      </a>
      <p v-text="item.xing"></p>
      <span>瀑布流瀑流</span>
    </div>
  </div>
</template>
<script>
export default {
  components: {
  },
  data() {
    return {
      imgsArr: [
        {
          src:
            "https://pic.keede.com/CommunityArticleImgs/33a0f219-36d0-41ef-8c2f-0e1c01a1bd04.jpg",
          xing: "#"
        },

        {
          src:
            "https://pic.keede.com/CommunityArticleImgs/33a0f219-36d0-41ef-8c2f-0e1c01a1bd04.jpg",
          xing: "不费呃呃呃"
        },
        {
          src:
            "https://pic.keede.com/CommunityArticleImgs/33a0f219-36d0-41ef-8c2f-0e1c01a1bd04.jpg",
          xing: "不舒服is电费呃呃呃"
        },
        {
          src:
            "https://pic.keede.com/CommunityArticleImgs/33a0f219-36d0-41ef-8c2f-0e1c01a1bd04.jpg",
          xing: "不舒服is的返回水电电费呃呃呃"
        },
        {
          src:
            "https://pic.keede.com/CommunityArticleImgs/33a0f219-36d0-41ef-8c2f-0e1c01a1bd04.jpg",
          xing: "不舒服is的返回水电费hi水电费呃呃呃"
        },
        {
          src:
            "https://pic.keede.com/CommunityArticleImgs/33a0f219-36d0-41ef-8c2f-0e1c01a1bd04.jpg",
          xing: "不舒呃呃"
        },
        {
          src:
            "https://pic.keede.com/CommunityArticleImgs/89338837-db55-4f83-b3be-e54735ee1597.jpg",
          xing: "不舒服is的返回水电费hi水电费呃呃呃"
        }
      ],
      group: 0
    };
  },
  methods: {
    waterfall() {
      let wrap = document.querySelector("#wrap");
      console.log(wrap);
      
      let items = wrap.children; //子元素数量

      let itemWidth = items[0].offsetWidth;//元素宽度
      //1.计算列数及列间距
      let cols = parseInt(window.innerWidth / itemWidth);//列数
      let gap = (window.innerWidth % itemWidth) / (cols + 1);//间距
      let pos = [];
      for (var i = 0; i < cols; i++) {
        var obj = {
          left: gap * (i + 1) + itemWidth * i,//记录第一行的left、top数据
          top: gap
        };
        pos.push(obj);
      }
      console.log(pos);
      // 遍历数组，
      for (let i = 0; i < items.length; i++) {
        let currentImg = items[i].children[1].children[0];//得到img元素节点
        currentImg.onload = function() {//图片加载完成后再计算
          var minIdx = 0;
          var minTop = pos[0].top;//假设第一项为最小值
          for (var j = 0; j < pos.length; j++) {
            if (pos[j].top < minTop) {//如果这个值比最小值小则重把这个值赋值为最小值，同时记录列数
              minIdx = j;
              minTop = pos[j].top;
            }
          }
          items[i].style.left = pos[minIdx].left + "px";//设置定位位置
          items[i].style.top = minTop + "px";
          //更新top值
          pos[minIdx].top += items[i].offsetHeight + gap;
        };
      }
    }
  },
  mounted() {
    console.log(this.$refs.wrap);
    this.waterfall();
  }
};
</script>
<style lang="less" scoped>
@import "../../../styls/mixin.less";
div.wrap {
  width: 100%;
  margin: 0 auto;
  position: relative;
  background: #ddd;
  div {
    width: 43%;
    .padding(4, 4, 4, 4);
    border: 1px solid #000;
    position: absolute;
    left: 0;
    top: 0;
    background: #fff;
    h3 {
      .lh(35);
    }
    a {
      img {
        width: 100%;
      }
    }
  }
}
</style>

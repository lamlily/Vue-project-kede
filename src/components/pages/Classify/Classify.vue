<template>
  <div class="total">
    <Search></Search>
    <div class="fenlei">
      <div class="left">
        <span
          v-for="(item,idx) in type"
          :key="idx"
          v-text="item"
          @click="disActive(item)"
          :class="Lname == item? active:''"
        ></span>
      </div>
      <div class="right">
        <div class="right_div" v-for="(item,idx) in titleList" :key="idx">
          <h3 v-text="item.smallType"></h3>
          <ul>
            <li v-for="(i,id) in item.data" :key="id">
              <img :src="i.img" alt>
              <p v-text="i.p"></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Search from "../../commons/Search";

import { Indicator } from "mint-ui";
export default {
  data() {
    return {
      type: [
        "隐形眼镜",
        "彩色眼镜",
        "护理用品",
        "隐形海淘",
        "近视眼镜",
        "太阳眼镜",
        "功能眼镜",
        "个护美妆"
      ],
      titleList: [],
      Lname: "彩色眼镜",
      active: "active"
    };
  },
  components: {
    Search
  },
  methods: {
    // 点击执行请求数据
    disActive(item) {
      this.Lname = item;
      this.getData();
    },
    // 请求数据方法
    getData() {
      //请求数据
      //先显示load状态
      Indicator.open({
        text: "加载中...",
        spinnerType: "double-bounce"
      });
      let path = "http://47.93.0.253:3000";
      this.$axios
        .get(path + "/index/findType", {
          params: {
            bigType: this.Lname
          }
        })
        .then(response => {
          //合并数据
          console.log(response.data);
          this.titleList = response.data[0].data;
          // console.log(this.titleList);
          // 关闭加载状态
          Indicator.close();
        })
        .catch(error => {
          console.log(error);
          // 关闭加载状态
          Indicator.close();
        });
    }
  },
  created() {
    this.getData();
  }
};
</script>
<style lang="less" scoped>
@import url("../../../styls/main.less");
.total {
  height: 100%;
  @divMaxWidth: 750px;
  @divMargin: 0 auto;
  .fenlei {
    //外层盒子控制最大宽度
    @divMaxWidth: 750px;
    @divMargin: 0 auto;
    display: flex;
    justify-content: left;
    position: fixed;
    .top(45);
    // .left(0);
    // .right(0);
    .bottom(55);
    width:750px;
    .left {
      overflow-y: auto;
      .w(100);
      height: 100%;
      background: #eee;
      // display: flex;
      // flex-direction: column;
      span {
        display: block;
        .fs(14);
        .h(50);
        .lh(50);
        text-align: center;
      }

      span.active {
        background: #fff;
      }
    }
    .right {
      //设置滚动条
      overflow-y: auto;
      .w(275);
      .right_div {
        .margin(15, 0, 15, 0);
        h3 {
          .padding(0, 0, 0, 10);
          .fs(16);
        }
        ul {
          display: flex;
          justify-content: left;
          flex-wrap: wrap;

          li {
            width: 33%;
            .padding(5, 0, 5, 0);
            img {
              width: 90%;
            }
            p {
              .fs(14);
              text-align: center;
            }
          }
        }
      }
    }
  }
}
//去除滚动条默认样式
::-webkit-scrollbar {
  width: 2px;
  // background: none;
}
</style>

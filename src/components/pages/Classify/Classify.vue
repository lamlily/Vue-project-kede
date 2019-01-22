<template>
  <div>这是分类页
    <Search></Search>
    <div class="fenlei">
      <div class="left">
        <span v-for="(item,idx) in type" :key="idx" v-text="item"></span>
      </div>
      <div class="right">

      </div>
    </div>
  </div>
</template>
<script>
import Search from "../../commons/Search";
export default {
  data() {
    return {
      type:[
        '隐形眼镜','彩色眼镜','护理用品','隐形海淘','近视眼镜','太阳眼镜','功能眼镜','个护美妆'
      ]
    };
  },
  components: {
    Search
  },
  methods: {}
};
</script>
<style lang="less" scoped>
@import url("../../../styls/main.less");
.fenlei{
  display: flex;
  justify-content: center;
  .left{
    .w(100);
    .h(50);
    .lh(50);
    display:flex;
    flex-direction: column;
    text-align: center;
    span{
      display: block;
      .fs(14);
      background: #eee;
    }
    span:hover{
      background: #fff;
    }
  }
  .right{
    .w(275);
  }
}
</style>

<template>
  <div class="wrapper">
    <div style="margin-bottom:-80px">
      <img style="width:100%;" src="@/assets/img/vue-mk-header.jpg">
    </div>
    <div class="main main-raised">
      <div class="fuwu">

        <div class="t">
          <h3>服务项目</h3>
          <p>Service Items</p>
        </div>

        <div class="c">
          <div class="item" @click="goto('platform')">
            <img src="@/assets/img/33.jpg">
            <span>分销平台</span>
          </div>
          <div class="item" @click="goto('weMedia')">
            <img src="@/assets/img/22.jpg">
            <span>自媒体带货</span>
          </div>
          <div class="item" @click="goto('storage')">
            <img src="@/assets/img/11.jpg">
            <span>海外仓储</span>
          </div>
        </div>
        <div class="b">
          <span @click="goto('service')">查看更多产品</span>
        </div>
      </div>
      <img src="@/assets/img/index.jpg" style="width:100%;">

      <div class="introduce">
        <div class="left">
          <h3>公司介绍</h3>
          <p>海仓国际自成立以来，一直秉持着诚信、创新、发展、卓越、共赢的企业价值观，坚持以人为本，客户至上，以诚为本，行动力至上。以提升公司运转效率和客户满意度为首要宗旨，一直致力于成为高效、精准、敏捷及第三方仓储服务...</p>
          <span>查看更多信息</span>
        </div>
        <img class='right' src="@/assets/img/cc.jpg">
      </div>
      <div class="introduce contact" :style="{background:backgroundImage}">
        <div class="left">
          <h3>联系我们</h3>
          <p><strong>公司地址:</strong>广东省深圳市龙岗区平湖街道禾花社区富安大道8号海源国际金融中心1001</p>
          <p><strong>联系电话:</strong>18124676080</p>
        </div>
        <img class='right' src="@/assets/img/123.jpeg">
      </div>
    </div>
  </div>
</template>

<script>


export default {
  components: {

  },
  name: "index",
  bodyClass: "index-page",
  props: {
    image: {
      type: String,
      default: require("@/assets/img/vue-mk-header.jpg")
    },
    
  },
  data() {
    return {
      firstname: null,
      email: null,
      password: null,
      backgroundImage: "url(" + require("@/assets/img/bg11.jpg") + ")",
    };
  },
  methods: {
    goto(url){
      this.$router.push({ name:url})
    }
  },
  computed: {

  },
  mounted() {

  },
  beforeDestroy() {
  }
};
</script>
<style lang="scss">


@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
}

</style>

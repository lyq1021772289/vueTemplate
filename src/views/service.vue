<template>
  <div class="wrapper">
    
    <div class="main main-raised">
      <div class="fuwu">

        <div class="t">
          <h3>服务项目</h3>
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

      </div>
    </div>
  </div>
</template>

<script>
export default {
  bodyClass: "landing-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/bg7.jpg")
    },

    },


  data() {
    return {
 
    };
  },
  methods: {
    goto(url){
      this.$router.push({ name:url})
    }
  },
  computed: {
    
  }
};
</script>

<style lang="scss" scoped>
  .fuwu{
    .t{text-align: left;}
  }

</style>

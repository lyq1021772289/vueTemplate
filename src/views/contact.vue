<template>
  <div class="wrapper">
    <div class="main main-raised">
      <h3 style="font-weight:400;margin-bottom:20px;">公司地址</h3>
      <div class="introduce contact" :style="{background:backgroundImage}">
        <div class="left">
          
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

  data() {
    return {
      backgroundImage: "url(" + require("@/assets/img/bg11.jpg") + ")",
    };
  },

  computed: {
   
  }
};
</script>

<style lang="css">

</style>

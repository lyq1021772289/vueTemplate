<template>
  <footer style="margin-top:40px;"
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <div class="footerGuarantee">
        <div v-for="(item) in guarantee" :key="item.title">
          <i class="material-icons">layers</i>
          <div>
            <p style="font-weight:bold;margin:0 4px;width:100%">{{item.title}}</p>
            <p style="font-size:12px;margin:0 4px;width:100%">{{item.content}}</p>
          </div>
        </div>
      </div>
      <div class="footerNav">
        <span v-for="(item) in router" :key="item.name" @click="goto(item.name)">{{item.props.name}}</span>
      </div>
      <div class='footerSpan'>
        地址：广东省深圳市龙岗区平湖街道禾花社区富安大道8号海源国际金融中心1001 
      </div>
      <div class='footerSpan'>Copyright © 海仓国际电子商务（深圳）有限公司</div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      router:this.$router.options.routes.filter(item=>!item.hidden),
      guarantee:[
        {icon:'',title:'协助维权',content:'蒙受经济损失，可申请百度协助'},
        {icon:'',title:'虚假赔偿',content:'遇到品牌或资质冒用，可申请百度保障'},
        {icon:'',title:'欺诈赔偿',content:'遇到欺诈，经核查属实，可申请保障退还费用'}
      ],
    };
  },
  methods:{
    goto(url){
      this.$router.push({ name:url})
    }
  }
};
</script>
<style>
  .footerGuarantee{
    display: flex;
    width:100%;
    justify-content: center;
    margin-bottom:4%;
  }
  .footerGuarantee i{font-size: 40px;margin-right:1%;}
  .footerGuarantee>div{display: flex;margin: 0 2%;align-items: center;}
  .footerNav{
    display: flex;
    width:100%;
    justify-content: center;
    margin-bottom:4%;
  }
  .footerNav span{font-size:16px;padding:0 3%;cursor: pointer;font-weight: 400;}
  .footerNav span:hover{color:#3388ff;}
  .footerNav span +span{border-left:1px solid #aaa}
  .footerSpan{width:100%;line-height:150%;font-size:14px;text-align: center;font-weight: 400;}
</style>

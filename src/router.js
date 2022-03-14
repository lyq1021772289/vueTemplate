import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import service from "./views/service.vue";
import introduce from "./views/introduce.vue";
import contact from "./views/contact.vue";
import platform from "./views/platform.vue";
import weMedia from "./views/weMedia.vue";
import storage from "./views/storage.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";

Vue.use(Router);

let router= new Router({
  routes: [
    {
      path: "/",
      name: "index",
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
        name:'首页'
      },
      meta:{
        title:"首页"
      }
    },
    {
      path: "/service",
      name: "service",
      components: { default: service, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
        name:'服务项目'
      },
      meta:{
        title:"服务项目"
      }
    },
    {
      path: "/introduce",
      name: "introduce",
      components: { default: introduce, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        name:'公司介绍'
      },
      meta:{
        title:"公司介绍"
      }
    },
    {
      path: "/contact",
      name: "contact",
      components: { default: contact, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
        name:'联系我们'
      },
      meta:{
        title:"联系我们"
      }
    },
    {
      path: '/platform',
      name: 'platform',
      components: { default: platform, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
        name:'分销平台'
      },
      meta:{
        title:"分销平台"
      },

      hidden:true,

    },
    {
      path: '/weMedia',
      name: 'weMedia',
      components: { default: weMedia, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
        name:'自媒体带货'
      },
      meta:{
        title:"自媒体带货"
      },

      hidden:true,

    },
    {
      path: '/storage',
      name: 'storage',
      components: { default: storage, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
        name:'海外仓储'
      },
      meta:{
        title:"海外仓储"
      },

      hidden:true,

    },
  ],

});

router.afterEach((to) => {//from参数暂时用不到
  if (to.meta.title) {
    document.title = to.meta.title
  }
})
export default router
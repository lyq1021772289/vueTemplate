<template>
  <md-toolbar
    id="toolbar"
    md-elevation="0"
    class="md-transparent md-absolute"
    :class="extraNavClasses"
    :color-on-scroll="colorOnScroll"
  >
    <div class="md-toolbar-row md-collapse-lateral">
      <div class="md-toolbar-section-start">
        <h3 class="md-title"><img src='@/assets/img/logo.jpg'/><img style='width:70px;margin-left:10px;' src='@/assets/img/icon-safeguard-sign.svg'/></h3>
        
      </div>
      <div class="md-toolbar-section-end">
        <md-button
        class="md-just-icon md-simple md-toolbar-toggle"
        :class="{ toggled: toggledClass }"
        @click="toggleNavbarMobile()"
      >
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </md-button>

        <div class="md-collapse">
          <div class="md-collapse-wrapper">
            <mobile-menu nav-mobile-section-start="false">
              <!-- Here you can add your items from the section-start of your toolbar -->
            </mobile-menu>
            <md-list>

              <md-list-item v-for="(item) in router" :key="item.name"
                href="javascript:;"
                @click="goto(item.name)">

                <p>{{item.props.name}}</p>
              </md-list-item>
    
             
            </md-list>
          </div>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>


import MobileMenu from "@/layout/MobileMenu";
export default {
  components: {
    MobileMenu
  },
  props: {
    type: {
      type: String,
      default: "white",
      validator(value) {
        return [
          "white",
          "default",
          "primary",
          "danger",
          "success",
          "warning",
          "info"
        ].includes(value);
      }
    },
    colorOnScroll: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      extraNavClasses: "",
      toggledClass: false,
      router:this.$router.options.routes.filter(item=>!item.hidden)
    };
  },
  computed: {
    showDownload() {
      const excludedRoutes = ["login", "landing", "profile"];
      return excludedRoutes.every(r => r !== this.$route.name);
    }
  },


  methods: {
    bodyClick() {
      let bodyClick = document.getElementById("bodyClick");

      if (bodyClick === null) {
        let body = document.querySelector("body");
        let elem = document.createElement("div");
        elem.setAttribute("id", "bodyClick");
        body.appendChild(elem);

        let bodyClick = document.getElementById("bodyClick");
        bodyClick.addEventListener("click", this.toggleNavbarMobile);
      } else {
        bodyClick.remove();
      }
    },
    toggleNavbarMobile() {
      this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar;
      this.toggledClass = !this.toggledClass;
      this.bodyClick();
    },
    goto(url){
      this.$router.push({ name:url})
    }
  },
  mounted() {
  },
  beforeDestroy() {
  }
};
</script>
<style>
  .md-toolbar.md-theme-default.md-transparent{
    background:#fff !important
  }
  .md-title img{width:100px;}
  #material-kit .md-toolbar.md-transparent .md-list .md-list-item-content{color:#333;font-size:16px;}
</style>

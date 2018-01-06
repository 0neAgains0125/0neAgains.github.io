<template>
  <div class="main-header">
    <div class="container">
        <nav class="navbar navbar-default sticky">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand-logo" href="index.html">
                    <img src="/public/dict/img/png/logo_2.png" alt="CAR HOUSE">
                </a>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <!-- <li v-for="(menu,key) in menus" :key="key">
                        <a :href="menu[langCode].path" :title="menu[langCode].title" :class="menu[langCode].path === activedMenu[langCode].path ? 'active' : ''">{{menu[langCode].displayName}}</a></li>
                    -->
                   <li class="dropdown" v-for="(menu,key) in menus" v-if="menu.parentId === 0 && menu.display === undefined" :key="key">
                       <a v-if="children(menu.id).length ===0" :href="menu[langCode].path" :title="menu[langCode].title" :class="menu[langCode].path === activedMenu[langCode].path ? 'active' : ''">{{menu[langCode].displayName}}</a>
                        <template v-else >
                            <a :href="menu[langCode].path" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{menu[langCode].displayName}}<span class="caret"></span></a>
                            <ul class="dropdown-menu" >
                                <li v-for="child in children(menu.id)" :key="child.id">
                                    <a :href="child[langCode].path" :title="child[langCode].title" :class="child[langCode].path === activedMenu[langCode].path ? 'active' : ''">{{child[langCode].displayName}}</a></li>
                            </ul>
                        </template>
                    </li>
                    <!-- <li><a href="index.html" class="active">Home</a></li>
                    <li class="dropdown">
                        <a href="car_list.html" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Car Listing<span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="car_list.html">Car List (Right Sidebar)</a></li>
                            <li><a href="car_list_2.html">Car List (Left Sidebar)</a> </li>
                            <li><a href="car_grid.html">Car Grid (Right Sidebar)</a></li>
                            <li><a href="car_grid_2.html">Car Grid (Left Sidebar)</a></li>
                            <li><a href="car_details.html">Car Details</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="login.html" class="dropdown-toggle" data-toggle="dropdown" role="button"
                           aria-haspopup="true" aria-expanded="false">Pages<span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="login.html">Login</a></li>
                            <li><a href="signup.html">Signup</a></li>
                            <li><a href="forgot-password.html">Forgot Password</a></li>
                            <li><a href="404.html">404</a></li>
                        </ul>
                    </li>
                    <li><a href="about.html">About Us</a></li>
                    <li class="dropdown">
                        <a href="car_list.html" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog<span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="with-right-sidebar.html">With Right Sidebar</a></li>
                            <li><a href="fullwidth.html">Fullwidth</a></li>
                            <li><a href="blog-single-sidebar.html">Blog Single Sidebar</a></li>
                            <li><a href="blog-single.html">Blog Single</a></li>
                        </ul>
                    </li> -->
                    <!-- <li><a href="contact.html">Contact Us</a></li>
                    <li class="dropdown">
                        <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{$t('language')}}<span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="javascript:;" @click="changeLanguage('vi')" v-html="$t('vietnamese')"></a></li>
                            <li><a href="javascript:;" @click="changeLanguage('en')" v-html="$t('english')"></a></li>
                        </ul>
                    </li> -->
                </ul>
            </div>
            <!-- /.navbar-collapse -->
            <!-- /.container -->
        </nav>
    </div>
</div>
</template>
<script>
import Vue from "vue";
export default {
  data() {
    return {
      menus: require("../json/menu.json")
    };
  },
  methods: {
    changeLanguage(langCode) {
      const currentLocale = this.$i18n.locale;
      const currentPath = this.$route.params.lang;
      this.$router.push({
        path: `/${langCode}/${this.activedMenu[langCode].path}`,
        params: { lang: langCode }
      });
      if (currentLocale !== langCode) {
        Vue.config.lang = langCode;
      }
    },
    children(id) {
      const chr = this.menus.filter(menu => menu.parentId === id);
      return chr;
    }
  },
  computed: {
    langCode() {
      return this.$i18n.locale;
    },

    activedMenu() {
      const menu = this.menus.find(
        menu => this.$route.fullPath.indexOf(menu[this.langCode].path) > -1
      );
      return menu;
    }
  }
};
</script>



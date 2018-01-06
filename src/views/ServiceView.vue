<template>
<div class="blog-body">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-md-8 col-xs-12">
              <slot></slot>
            </div>
             <div class="col-lg-4 col-md-4 col-xs-12">
                <service-recent-news></service-recent-news>
                <service-helping-center></service-helping-center>
            </div>
        </div>
    </div>
  </div>

</template>
<script>
import RecentNews from "../components/RecentNews.vue";
import HelpingCenter from "../components/HelpingCenter.vue";
export default {
  name: "service-view",
  components: {
    "service-recent-news": RecentNews,
    "service-helping-center": HelpingCenter
  },
  data() {
    return {
      transition: "fade"
    };
  }
};
</script>

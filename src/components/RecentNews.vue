<template>
  <!-- Recent news Start-->
                <div class="Recent-news">
                    <h2 class="title">Recent News</h2>
                    <recent-news-item v-for="item in recentNewsItems" :key="item"></recent-news-item>
                </div>
                <!-- Recent news end-->
</template>

<script>
import RecentNewsItem from "./RecentNewsItem.vue";
export default {
  props: ["item"],
  components: {
    "recent-news-item": RecentNewsItem
  },
  data() {
    return {
      recentNewsItems: 3
    };
  }
};
</script>

<style>

</style>

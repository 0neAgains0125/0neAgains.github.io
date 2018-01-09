<template>
<transaction :name="transition">
  <home-page-banner></home-page-banner>
  <home-page-intro></home-page-intro>
<home-page-cars :data-source="listOfCars"></home-page-cars>
<home-page-our-services></home-page-our-services>
</transaction>
</template>

<script>
import { watchList } from "../api";
import Banner from "../components/Banner.vue";
import Introduction from "../components/Introduction.vue";
import OurServices from "../components/OurServices.vue";
import CarGrid from "./CarGrid.vue";

export default {
  name: "home-page",
  props:['type'],
  components: {
    "home-page-banner": Banner,
    "home-page-cars": CarGrid,
    "home-page-intro": Introduction,
    "home-page-our-services": OurServices
  },

  data() {
    return {
      mode: "grid",
      transition: "slide-right",
      displayedPage: Number(this.$route.params.page) || 1,
      displayedItems: this.$store.getters.activeItems,
      listOfCars: require("../json/product.json")
    };
  },

  computed: {
    page() {
      return Number(this.$route.params.page) || 1;
    },
    maxPage() {
      const { itemsPerPage, lists } = this.$store.state;
      return Math.ceil(lists[this.type].length / itemsPerPage);
    },
    hasMore() {
      return this.page < this.maxPage;
    }
  },

  beforeMount() {
    if (this.$root._isMounted) {
      this.loadItems(this.page);
    }
    // watch the current list for realtime updates
    this.unwatchList = watchList(this.type, ids => {
      this.$store.commit("SET_LIST", { type: this.type, ids });
      this.$store.dispatch("ENSURE_ACTIVE_ITEMS").then(() => {
        this.displayedItems = this.$store.getters.activeItems;
      });
    });
  },

  beforeDestroy() {
    this.unwatchList();
  },
  created() {
    console.log(this.$route);
  },
  watch: {
    page(to, from) {
      this.loadItems(to, from);
    }
  },

  methods: {
   
    loadItems(to = this.page, from = -1) {
      this.$bar.start();
      this.$store
        .dispatch("FETCH_LIST_DATA", {
          type: this.type
        })
        .then(() => {
          if (this.page < 0 || this.page > this.maxPage) {
            this.$router.replace(`/${this.type}/1`);
            return;
          }
          this.transition =
            from === -1 ? null : to > from ? "slide-left" : "slide-right";
          this.displayedPage = to;
          this.displayedItems = this.$store.getters.activeItems;
          console.log(this.displayedItems);
          this.$bar.finish();
        });
    }
  }
};
</script>

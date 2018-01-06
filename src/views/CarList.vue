<template>
<div class="list-car-box">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 list-car-pic clearfix">
                            <img src="https://cms.kelleybluebookimages.com/content/dam/kbb-editorial/make/toyota/camry/2018/first-review/8a-2018-Toyota-Camry-first-review.jpg" alt="audi-q7-2017" class="img-responsive">
                        </div>
                        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12 car-content clearfix">
                            <div class="header b-items-cars-one-info-header  s-lineDownLeft">
                                <h3>
                                    <a href="/bang-gia-xe/1">Audi q7 2017</a>
                                    <span>$54,905</span>
                                </h3>
                            </div>
                            <div class="line-border"></div>

                            <p>Next level Pinterest farm-to-table selvage gentrify street art raw denim Helvetica street art pork belly.</p>

                            <div class="item">
                                <div class="col-md-5 col-sm-5 col-xs-12 col-pad">
                                    <p>
                                        <span>Body Style</span> sedan
                                    </p>
                                    <p>
                                        <span>Milengge</span>35.000 KM
                                    </p>
                                    <p>
                                        <span>Transmissione</span>6 Speed Auto
                                    </p>
                                </div>
                                <div class="col-md-5 col-sm-5 col-xs-12 col-pad">
                                    <p>
                                        <span>Engine:</span>DOHC 24-valve V-6
                                    </p>
                                    <p>
                                        <span>Color:</span>White
                                    </p>
                                    <p>
                                        <span>Specs</span>2-Passenger
                                    </p>
                                </div>
                                <div class="col-md-2 col-sm-2 col-xs-12 col-pad">
                                    <div class="ster-icon">
                                        <i class="fa fa-star orange-color"></i>
                                        <i class="fa fa-star orange-color"></i>
                                        <i class="fa fa-star orange-color"></i>
                                        <i class="fa fa-star orange-color"></i>
                                        <i class="fa fa-star-o orange-color"></i>
                                    </div>
                                    <a href="car_details.html" class="btn details-button">Details</a>                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

</template>

<script>
import { watchList } from "../api";
import CarItem from "../components/CarItem.vue";

export default {
  name: "list-of-cars",

  components: {
    "car-item": CarItem
  },

  props: {
    type: String
  },

  data() {
    return {
      transition: "slide-right",
      displayedPage: Number(this.$route.params.page) || 1,
      displayedItems: this.$store.getters.activeItems
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

<template>
<div class="recent-car content-area">
    <div class="container">
        <div class="recent-car-content">
            
         <div class="row">
   
</div>
<div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="option-bar">
                   <div class="row">
                       <div class="col-lg-6 col-md-6 col-sm-6">
                           <div class="section-heading ">
                               <i class="fa fa-car"></i>
                               <h2>recent cars</h2>
                               <div class="border"></div>
                               <h4>Check our all motors</h4>
                           </div>
                       </div>
                       <div class="col-lg-6 col-md-6 col-sm-6 text-right">
                           <div class="sorting-options">
                               <select class="sorting">
                                   <option>Price: High to low</option>
                                   <option>Price: Low to high</option>
                                   <option>Sells: High to low</option>
                                   <option>Sells: Low to high</option>
                               </select>
                               <a href="car_list.html" class="change-view-btn "><i class="fa fa-th-list"></i></a>
                               <a href="car_grid.html" class="change-view-btn active-view-btn"><i class="fa fa-th-large"></i></a>
                           </div>
                       </div>
                   </div>
               </div>
<div class="row">
  <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12" v-for="car in 12" :key="car">
        <car-item :car-item="car"></car-item>
    </div>
</div>
                <!-- Page navigation start-->
               <div class="text-center">
                  <nav aria-label="Page navigation">
                    <ul class="pagination">
                        <li>
                            <a href="car_grid.html#" aria-label="Previous">
                                <span aria-hidden="true">«</span>
                            </a>
                        </li>
                        <li class="active"><a href="car_grid.html#">1 <span class="sr-only">(current)</span></a></li>
                        <li><a href="car_grid.html#">2</a></li>
                        <li><a href="car_grid.html#">3</a></li>
                        <li><a href="car_grid.html#">4</a></li>
                        <li><a href="car_grid.html#">5</a></li>
                        <li>
                            <a href="car_grid.html#" aria-label="Next">
                                <span aria-hidden="true">»</span>
                            </a>
                        </li>
                    </ul>
                </nav>
               </div>
                <!-- Page navigation end-->
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

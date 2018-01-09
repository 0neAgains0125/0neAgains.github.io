<template>
<transition :name="transition">
  <div class="car-list content-area">
    <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-4 col-xs-12">
                <!-- Sidebar start-->
                <aside class="sidebar">
                    <div class="section-heading">
                        <i class="fa fa-search"></i>
                        <h2>{{$t('Search Car')}}</h2>
                        <div class="border"></div>
                        <h4>{{$t('Search your desire car')}}</h4>
                    </div>

                    <div class="search-block">
                        <h2 class="title">{{$t('Review Rating')}}</h2>
                        <ul class="ratings">
                            <li>
                                <a href="car_list_2.html#">
                                    <i class="fa fa-star-o orange-color"></i>
                                    <i class="fa fa-star-o orange-color"></i>
                                    <i class="fa fa-star-o orange-color"></i>
                                    <i class="fa fa-star-o orange-color"></i>
                                    <i class="fa fa-star-o orange-color"></i>
                                    <span>(100)</span>
                                </a>
                            </li>
                            <li>
                                <a href="car_list_2.html">
                                    <i class="fa fa-star orange-color"></i>
                                    <i class="fa fa-star-o orange-color"></i>
                                    <i class="fa fa-star-o orange-color"></i>
                                    <i class="fa fa-star-o orange-color"></i>
                                    <i class="fa fa-star-o orange-color"></i>
                                    <span>(1525)</span>
                                </a>
                            </li>
                            <li>
                                <a href="car_list_2.html#">
                                    <i class="fa fa-star orange-color"></i>
                                    <i class="fa fa-star orange-color"></i>
                                    <i class="fa fa-star-o orange-color"></i>
                                    <i class="fa fa-star-o orange-color"></i>
                                    <i class="fa fa-star-o orange-color"></i>
                                    <span>(252)</span>
                                </a>
                            </li>
                            <li>
                                <a href="car_list_2.html#">
                                    <i class="fa fa-star orange-color"></i>
                                    <i class="fa fa-star orange-color"></i>
                                    <i class="fa fa-star orange-color"></i>
                                    <i class="fa fa-star-o orange-color"></i>
                                    <i class="fa fa-star-o orange-color"></i>
                                    <span>(5665)</span>
                                </a>
                            </li>
                            <li>
                                <a href="car_list_2.html#">
                                    <i class="fa fa-star orange-color"></i>
                                    <i class="fa fa-star orange-color"></i>
                                    <i class="fa fa-star orange-color"></i>
                                    <i class="fa fa-star orange-color"></i>
                                    <i class="fa fa-star-o orange-color"></i>
                                    <span>(1587)</span>
                                </a>
                            </li>
                            <li>
                                <a href="car_list_2.html#">
                                    <i class="fa fa-star orange-color"></i>
                                    <i class="fa fa-star orange-color"></i>
                                    <i class="fa fa-star orange-color"></i>
                                    <i class="fa fa-star orange-color"></i>
                                    <i class="fa fa-star orange-color"></i>
                                    <span>(554)</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="search-block">
                        <h2 class="title">{{$t('Price')}}</h2>

                        <div class="slider-price-amont">
                            <span class="pull-left">$1000</span>
                            <span class="pull-right">$100000</span>
                        </div>
                        <!-- <input type="text" class="price-slider" style="width:100%" data-slider-min="1000" data-slider-max="100000" data-slider-step="1000" data-slider-value="[10000,50000]" /> -->

                        <br/>
                        <br/>
                        <div class="row">
                            <div class="price-box">
                                <div class="col-lg-6">
                                    <label>{{$t('Min price')}}</label>
                                    <input class="form-control" placeholder="Min price" id="minPrice" value="1000">
                                </div>
                                <div class="col-lg-6">
                                    <label>{{$t('Max price')}}</label>
                                    <input class="form-control" placeholder="Min price" id="maxPrice" value="50000">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="search-block">
                        <h2 class="title">{{$t('Brands')}}</h2>

                        <div class="checkbox checkbox-theme checkbox-circle">
                            <input id="checkbox8" type="checkbox">
                            <label for="checkbox8">
                                Altic
                            </label>
                        </div>

                        <div class="checkbox checkbox-theme checkbox-circle">
                            <input id="checkbox9" type="checkbox">
                            <label for="checkbox9">
                                Fortuner
                            </label>
                        </div>

                        <div class="checkbox checkbox-theme checkbox-circle">
                            <input id="checkbox10" type="checkbox">
                            <label for="checkbox10">
                                Innovar
                            </label>
                        </div>

                        <div class="checkbox checkbox-theme checkbox-circle">
                            <input id="checkbox11" type="checkbox">
                            <label for="checkbox11">
                                Vios
                            </label>
                        </div>

                        <div class="checkbox checkbox-theme checkbox-circle">
                            <input id="checkbox12" type="checkbox">
                            <label for="checkbox12">
                                Camry
                            </label>
                        </div>
                    </div>

                   

                    <div class="search-block"></div>
                </aside>
                <!-- Sidebar end-->
                
                <used-car-recent-news></used-car-recent-news>
                 
               
            </div>
            <used-car-list-item :data-source="listOfCarsView"></used-car-list-item>
        </div>
    </div>
</div>
</transition>
</template>

<script>
import { watchList } from "../api";
import CarList from "./CarList.vue";
import RecentNews from "../components/RecentNews.vue";
export default {
  name: "home-page",
  components: {
    "used-car-list-item": CarList,
    "used-car-recent-news": RecentNews
  },
 props:['type'],

  data() {
    return {
      transition: "slide-right",
      displayedPage: Number(this.$route.params.page) || 1,
      displayedItems: this.$store.getters.activeItems,
      listOfCarsView: require("../json/product.json")
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
    },
    handleChangeMode(mode) {
      if (this.mode !== mode) this.mode = mode;
    }
  }
};
</script>

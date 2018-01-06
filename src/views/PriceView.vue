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
                        <h2>Search Car</h2>
                        <div class="border"></div>
                        <h4>Search your desire car</h4>
                    </div>

                    <div class="search-block">
                        <h2 class="title">Review Rating</h2>
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
                        <h2 class="title">Price</h2>

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
                                    <label>Min price</label>
                                    <input class="form-control" placeholder="Min price" id="minPrice" value="1000">
                                </div>
                                <div class="col-lg-6">
                                    <label>Max price</label>
                                    <input class="form-control" placeholder="Min price" id="maxPrice" value="50000">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="search-block">
                        <h2 class="title">Brands</h2>

                        <div class="checkbox checkbox-theme checkbox-circle">
                            <input id="checkbox8" type="checkbox">
                            <label for="checkbox8">
                                Audi
                            </label>
                        </div>

                        <div class="checkbox checkbox-theme checkbox-circle">
                            <input id="checkbox9" type="checkbox">
                            <label for="checkbox9">
                                BMW
                            </label>
                        </div>

                        <div class="checkbox checkbox-theme checkbox-circle">
                            <input id="checkbox10" type="checkbox">
                            <label for="checkbox10">
                                Mercedes benz
                            </label>
                        </div>

                        <div class="checkbox checkbox-theme checkbox-circle">
                            <input id="checkbox11" type="checkbox">
                            <label for="checkbox11">
                                Lamborghini
                            </label>
                        </div>

                        <div class="checkbox checkbox-theme checkbox-circle">
                            <input id="checkbox12" type="checkbox">
                            <label for="checkbox12">
                                Buick
                            </label>
                        </div>

                        <div class="checkbox checkbox-theme checkbox-circle">
                            <input id="checkbox13" type="checkbox">
                            <label for="checkbox13">
                                Bugatti
                            </label>
                        </div>

                        <div class="checkbox checkbox-theme checkbox-circle">
                            <input id="checkbox14" type="checkbox">
                            <label for="checkbox14">
                                Acura
                            </label>
                        </div>
                    </div>

                    <div class="search-block">
                        <h2 class="title">Popular cars</h2>
                        
                        <div class="checkbox checkbox-theme checkbox-circle">
                            <input id="checkbox5" type="checkbox">
                            <label for="checkbox5">
                                Lamborghini 2016
                            </label>
                        </div>

                        <div class="checkbox checkbox-theme checkbox-circle">
                            <input id="checkbox7" type="checkbox">
                            <label for="checkbox7">
                                Audi
                            </label>
                        </div>
                        <div class="checkbox checkbox-theme checkbox-circle">
                            <input id="checkbox4" type="checkbox">
                            <label for="checkbox4">
                                Jaguar F-Type R
                            </label>
                        </div>

                        <div class="checkbox checkbox-theme checkbox-circle">
                            <input id="checkbox3" type="checkbox">
                            <label for="checkbox3">
                                Porsche-Cayen-Last
                            </label>
                        </div>

                        <div class="checkbox checkbox-theme checkbox-circle">
                            <input id="checkbox2" type="checkbox">
                            <label for="checkbox2">
                                Mercedes Benz C Class
                            </label>
                        </div>

                        <div class="checkbox checkbox-theme checkbox-circle">
                            <input id="checkbox1" type="checkbox">
                            <label for="checkbox1">
                                Vencer Sarthe Supercar
                            </label>
                        </div>
                    </div>

                    <div class="search-block"></div>
                </aside>
                <!-- Sidebar end-->
                
                <used-car-recent-news></used-car-recent-news>
                 
                <!-- Car box Start-->
                <div class="thumbnail car-box">
                    <a href="car_list_2.html#" class="sale">
                        <span>sale</span>
                    </a>
                    <img src="/public/dict/img/grid/audi_q7_2017.jpg" alt="audi_q7_2017">
                    <div class="caption car-content">
                        <div class="header b-items-cars-one-info-header s-lineDownLeft">
                            <h3>
                                <a href="car_details.html">Audi q7 2017</a>
                                <span>$42,605</span>
                            </h3>
                        </div>
                        <p>Next level Pinterest farm-to-table selvage gentrify street art raw denim Helvetica street art pork belly.</p>
                        <div class="car-tags">
                            <ul>
                                <li>2016</li>
                                <li>Bensin</li>
                                <li>Sport</li>
                                <li>10.888m</li>
                            </ul>
                        </div>
                        <a href="car_details.html" class="btn details-button">Preview</a>
                    </div>
                </div>
                <!-- Car box end-->
            </div>
            <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
               <div class="row">
                 <div class="option-bar">
                   <div class="row">
                       <div class="col-lg-6 col-md-6 col-sm-6">
                           <div class="section-heading">
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
                               <a href="javascript:;" @click="handleChangeMode('list')" class="change-view-btn active-view-btn"><i class="fa fa-th-list"></i></a>
                               <a href="javascript:;" @click="handleChangeMode('grid')" class="change-view-btn"><i class="fa fa-th-large"></i></a>
                           </div>
                       </div>
                   </div>
               </div>
               </div>
                
                <div class="row">
                  <template v-if="mode === 'list'">
                    <used-car-list-item v-for="car in 10" :key="car"></used-car-list-item>
                  </template>
                  <template v-else>
                    <div class="row" v-for="car in 5" :key="car">
                      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                         <used-car-grid-item  ></used-car-grid-item>
                      </div>
                       <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                         <used-car-grid-item  ></used-car-grid-item>
                      </div>
                    </div>
                  </template>
                </div>
                
                

                <!-- Page navigation start-->
                <div class="text-center">
                  <nav aria-label="Page navigation">
                    <ul class="pagination">
                        <li>
                            <a href="car_list_2.html#" aria-label="Previous">
                                <span aria-hidden="true">«</span>
                            </a>
                        </li>
                        <li class="active"><a href="car_list_2.html#">1 <span class="sr-only">(current)</span></a></li>
                        <li><a href="car_list_2.html#">2</a></li>
                        <li><a href="car_list_2.html#">3</a></li>
                        <li><a href="car_list_2.html#">4</a></li>
                        <li><a href="car_list_2.html#">5</a></li>
                        <li>
                            <a href="car_list_2.html#" aria-label="Next">
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
</transition>
</template>

<script>
import { watchList } from "../api";
import CarList from "./CarList.vue";
import CarItem from "../components/CarItem.vue";
import RecentNews from "../components/RecentNews.vue";
export default {
  name: "price-page",
  components: {
    "used-car-list-item": CarList,
    "used-car-grid-item": CarItem,
    "used-car-recent-news": RecentNews
  },

  props: {
    type: String
  },

  data() {
    return {
      transition: "slide-right",
      displayedPage: Number(this.$route.params.page) || 1,
      displayedItems: this.$store.getters.activeItems,
      mode: "list"
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

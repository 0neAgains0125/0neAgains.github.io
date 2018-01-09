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
                               <h2>{{$t('Recent cars')}}</h2>
                               <div class="border"></div>
                               <h4>{{$t('Check our all motors')}}</h4>
                           </div>
                       </div>
                       <div class="col-lg-6 col-md-6 col-sm-6 text-right">
                           <div class="sorting-options">
                               <select class="sorting">
                                   <option>{{$t('Price: High to low')}}</option>
                                   <option>{{$t('Price: Low to high')}}</option>
                               </select>
                               <a href="javascript:;" @click="handleChangeMode('list')" class="change-view-btn "><i class="fa fa-th-list"></i></a>
                               <a href="javascript:;" @click="handleChangeMode('grid')" class="change-view-btn active-view-btn"><i class="fa fa-th-large"></i></a>
                           </div>
                       </div>
                   </div>
               </div>
                <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12" v-for="(car, index) in listOfCars" :key="index">
                        <!-- <car-item :car-item="car"></car-item> -->
                        <car-item :item="car"></car-item>
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

  props: ['dataSource'],

  data() {
    return {
      transition: "slide-right",
      displayedPage: Number(this.$route.params.page) || 1,
      displayedItems: this.$store.getters.activeItems
    };
  },

  computed: {
    listOfCars() {
      console.log(this.dataSource)
      return this.dataSource;
    }
  }
};
</script>

<template>
<div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
               <div class="row">
                 <div class="option-bar">
                   <div class="row">
                       <div class="col-lg-6 col-md-6 col-sm-6">
                           <div class="section-heading">
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
                               <a href="javascript:;" @click="handleChangeMode('list')" class="change-view-btn active-view-btn"><i class="fa fa-th-list"></i></a>
                               <a href="javascript:;" @click="handleChangeMode('grid')" class="change-view-btn"><i class="fa fa-th-large"></i></a>
                           </div>
                       </div>
                   </div>
               </div>
               </div>
                
                <div class="row">
                    <used-car-list-item v-for="(car, index) in listOfCarsView" :key="index">
                        <car-item :item="car"></car-item>
                    </used-car-list-item>
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

</template>

<script>
import { watchList } from "../api";
import CarListItem from "../components/CarlistItem.vue";

export default {
  name: "list-of-cars-view",

  components: {
    "car-item": CarListItem
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
    listOfCarsView() {
      console.log(this.dataSource)
      return this.dataSource;
    }
  }
};
</script>

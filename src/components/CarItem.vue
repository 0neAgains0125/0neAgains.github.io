<template>
   <div class="thumbnail car-box">
                        <img src="/public/dict/img/grid/bmw_emw_m3_diski_serie.jpg" alt="bmw_emw_m3_diski_serie">
                        <div class="caption car-content">
                            <div class="header b-items-cars-one-info-header s-lineDownLeft">
                                <h3>
                                    <a href="car_details.html">BMW e46 M3 Diski Serie</a>
                                    <span>$49.000</span>
                                </h3>
                            </div>

                            <p>Next level Pinterest farm-to-table selvage gentrify street art raw denim Helvetica street art pork belly.</p>
                            <div class="car-tags">
                                <ul>
                                    <li>2016</li>
                                    <li>Bensin</li>
                                    <li>Sport</li>
                                    <li>12.888m</li>
                                </ul>
                            </div>
                            <div class="ster-fa">
                                <i class="fa fa-star orange-color"></i>
                                <i class="fa fa-star orange-color"></i>
                                <i class="fa fa-star orange-color"></i>
                                <i class="fa fa-star orange-color"></i>
                                <i class="fa fa-star-o orange-color"></i>
                            </div>
                            <a :href="`xe-da-qua-su-dung/1`" class="btn details-button">Preview</a>
                        </div>
                    </div>
</template>
<script>
export default {
  name: "car-item",
  props: ["carItem"],
  computed: {
    car() {
      return this.carItem;
    }
  }
};
</script>

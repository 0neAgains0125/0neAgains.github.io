<template>
   <div class="thumbnail car-box">
                        <a href="index.html#" class="sale">
                            <span>sale</span>
                        </a>
                        <img src="https://cms.kelleybluebookimages.com/content/dam/kbb-editorial/make/toyota/camry/2018/first-review/8a-2018-Toyota-Camry-first-review.jpg" alt="Vencer-Sarthe-Supercar">
                        <div class="caption car-content">
                            <div class="header b-items-cars-one-info-header s-lineDownLeft">
                                <h3>
                                    <a href="/bang-gia-xe/1">Vencer Sarthe Supercar</a>
                                    <span>$54,000</span>
                                </h3>
                            </div>

                            <p>Next level Pinterest farm-to-table selvage gentrify street art raw denim Helvetica street art pork belly.</p>
                            <div class="car-tags">
                                <ul>
                                    <li>2010</li>
                                    <li>Bensin</li>
                                    <li>Sport</li>
                                    <li>20.000m</li>
                                </ul>
                            </div>
                            <div class="ster-fa">
                                <i class="fa fa-star orange-color"></i>
                                <i class="fa fa-star orange-color"></i>
                                <i class="fa fa-star orange-color"></i>
                                <i class="fa fa-star orange-color"></i>
                                <i class="fa fa-star-o orange-color"></i>
                            </div>
                            <a href="/bang-gia-xe/1" class="btn details-button">Preview</a>
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

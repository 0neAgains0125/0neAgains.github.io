<template>
   <div class="thumbnail car-box">
                        <a href="index.html#" class="sale">
                            <span>Sale</span>
                        </a>
                        <img :src="car.imageUrl" :alt="car.productName">
                        <div class="caption car-content">
                            <div class="header b-items-cars-one-info-header s-lineDownLeft">
                                <h3>
                                    <a :href="`/bang-gia-xe/${car.productId}`">{{car.productName}}</a>
                                    <span>{{$n(car.price)}} VND</span>
                                </h3>
                            </div>

                            <p v-html="car.origin"></p>
                            <div class="car-tags">
                                <ul>
                                    <li>{{car.productModel}}</li>
                                    <li>{{car.productColor}}</li>
                                    <li>{{car.designs}}</li>
                                    <li>{{car.gear}}</li>
                                </ul>
                            </div>
                            <div class="ster-fa">
                                <i class="fa fa-star orange-color"></i>
                                <i class="fa fa-star orange-color"></i>
                                <i class="fa fa-star orange-color"></i>
                                <i class="fa fa-star orange-color"></i>
                                <i class="fa fa-star-o orange-color"></i>
                            </div>
                            <a :href="`/bang-gia-xe/${car.productId}`" class="btn details-button">{{$t('detail')}}</a>
                        </div>
                    </div>
</template>
<script>
export default {
  name: "car-item",
  props: ["item"],
  computed: {
    car() {
      return this.item;
    }
  }
};
</script>

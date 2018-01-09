<template>
<div class="list-car-box">
    
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 list-car-pic clearfix">
                            <img :src="car.imageUrl" :alt="car.productName" class="img-responsive">
                        </div>
                        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12 car-content clearfix">
                            <div class="header b-items-cars-one-info-header  s-lineDownLeft">
                                <h3>
                                    <a :href="`/bang-gia-xe/${car.productId}`">{{car.productName}}</a>
                                    <span>{{$n(car.price)}} VND</span>
                                </h3>
                            </div>
                            <div class="line-border"></div>

                            <p>Next level Pinterest farm-to-table selvage gentrify street art raw denim Helvetica street art pork belly.</p>

                            <div class="item">
                                <div class="col-md-5 col-sm-5 col-xs-12 col-pad">
                                    <p>
                                        <span>Kiểu dáng:</span> {{car.designs}}
                                    </p>
                                    <p>
                                        <span>Số km đã đi: </span>{{car.odo}} KM
                                    </p>
                                    <p>
                                        <span>Số loại:</span> {{car.numberTypes}}
                                    </p>
                                </div>
                                <div class="col-md-5 col-sm-5 col-xs-12 col-pad">
                                    <p>
                                        <span>Hộp số:</span> {{car.gear}}
                                    </p>
                                    <p>
                                        <span>Màu:</span> {{car.productColor}}
                                    </p>
                                    <p>
                                        <span>Đăng ký lần đầu: </span> {{car.firstRegistration}}
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
                                    <a :href="`/bang-gia-xe/${car.productId}`" class="btn details-button">{{$t('detail')}}</a>  
                                </div>
                            </div>
                        </div>
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
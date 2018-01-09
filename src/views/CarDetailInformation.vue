<template>
<transaction :name="transition">
  <div class="car-details content-area">
    <div class="container">
         
        <div class="row">
            <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <div class="option-bar">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="section-heading">
                                <i class="fa fa-car"></i>
                                <h2>{{car.productName}}</h2>
                                <div class="border"></div>
                                <h4>Details of {{car.productName}}</h4>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 text-right">
                            <div class="car-details-header-price">
                                <h3>{{$n(car.price) }} VND</h3>
                                <p>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star-o"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="clearfix"></div>

                <!-- Car detail slider start-->
                <div class="car-detail-slider">
                    <div id='carousel-custom' class='carousel slide' data-ride='carousel'>
                        <div class='carousel-outer'>
                            <!-- Wrapper for slides -->
                            <div class="carousel-inner">
                                <div class="item active">
                                    <img src="/public/dict/img/details/big-1.jpg" class="thumb-preview" alt="Chevrolet Impala"/>
                                </div>
                                <div class="item">
                                    <img src="/public/dict/img/details/big-2.jpg" class="thumb-preview" alt="Chevrolet Impala"/>
                                </div>
                                <div class="item">
                                    <img src="/public/dict/img/details/big-3.jpg" class="thumb-preview" alt="Chevrolet Impala"/>
                                </div>
                                <div class="item">
                                    <img src="/public/dict/img/details/big-4.jpg" class="thumb-preview" alt="Chevrolet Impala"/>
                                </div>
                                <div class="item">
                                    <img src="/public/dict/img/details/big-5.jpg" class="thumb-preview" alt="Chevrolet Impala"/>
                                </div>
                                <div class="item">
                                    <img src="/public/dict/img/details/big-6.jpg" class="thumb-preview" alt="Chevrolet Impala"/>
                                </div>
                                <div class="item">
                                    <img src="/public/dict/img/details/big-7.jpg" class="thumb-preview" alt="Chevrolet Impala"/>
                                </div>
                            </div>

                            <!-- Controls -->
                            <a class="left carousel-control" href="car_details.html#carousel-custom" role="button" data-slide="prev">
                              <span class="slider-mover-left no-bg" aria-hidden="true">
                                 <img src="/public/dict/img/png/left-chevron.png" alt="left-chevron">
                              </span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="right carousel-control" href="car_details.html#carousel-custom" role="button" data-slide="next">
                                <span class="slider-mover-right no-bg" aria-hidden="true">
                                    <img src="/public/dict/img/png/right-chevron.png" alt="right-chevron">
                                </span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>

                        <!-- Indicators -->
                        <ol class="carousel-indicators thumbs visible-lg visible-md">
                            <li data-target="#carousel-custom" data-slide-to="0" class="active">
                                <img src="/public/dict/img/small-car/small-1.jpg" alt="Chevrolet Impala"/>
                            </li>
                            <li data-target="#carousel-custom" data-slide-to="1">
                                <img src='/public/dict/img/small-car/small-2.jpg' alt="Chevrolet Impala"/>
                            </li>
                            <li data-target="#carousel-custom" data-slide-to="2">
                                <img src='/public/dict/img/small-car/small-3.jpg' alt="Chevrolet Impala"/>
                            </li>
                            <li data-target="#carousel-custom" data-slide-to="3">
                                <img src='/public/dict/img/small-car/small-4.jpg' alt="Chevrolet Impala"/>
                            </li>
                            <li data-target="#carousel-custom" data-slide-to="4">
                                <img src='/public/dict/img/small-car/small-5.jpg' alt="Chevrolet Impala"/>
                            </li>
                            <li data-target="#carousel-custom" data-slide-to="5">
                                <img src="/public/dict/img/small-car/small-6.jpg" alt="Chevrolet Impala"/>
                            </li>
                            <li data-target="#carousel-custom" data-slide-to="6">
                                <img src="/public/dict/img/small-car/small-7.jpg" alt="Chevrolet Impala"/>
                            </li>
                        </ol>
                    </div>
                </div>
                <!-- Car detail slider End-->

                <div class="clearfix"></div>
                
                <!-- Car details content body start -->
                <div class="car-details-content-body">
                    <ul class="nav nav-tabs">
                     
                        <li class="active"><a href="car_details.html#tab3default" data-toggle="tab" aria-expanded="false">{{$t('Details')}}</a></li>
                        <li class=""><a href="car_details.html#tab4default" data-toggle="tab" aria-expanded="false">{{$t('Planned installment payment')}}</a></li>
                        <li class=""><a href="car_details.html#tab5default" data-toggle="tab" aria-expanded="false">{{$t('Estimated cost to name')}}</a></li>
                    </ul>
                    <div class="panel with-nav-tabs panel-default">
                        <div class="panel-body">
                            <div class="tab-content">
                                
                               
                                <div class="tab-pane fade technical active in" id="tab3default">
                                    <ul>
                                        <li>
                                            Tình trạng  <span> {{car.productStatus}}</span>
                                        </li>
                                        <li>
                                            Nhãn hiệu  <span> {{car.productBrand}}</span>
                                        </li>
                                        <li>
                                            Model <span> {{car.productModel}}</span>
                                        </li>
                                        <li>
                                            Số loại <span> {{car.numberTypes}}</span>
                                        </li>
                                        <li>
                                            Xuât xứ <span> {{car.origin}}</span>
                                        </li>
                                        <li>
                                            Năm sản xuất <span> {{car.yearOfManufacture}}</span>
                                        </li>
                                        <li>
                                            Màu xe <span> {{car.productColor}}</span>
                                        </li>
                                         <li>
                                            Màu nội thất  <span> {{car.interiorColor}}</span>
                                        </li>
                                        <li>
                                            Kiểu dáng  <span> {{car.designs}}</span>
                                        </li>
                                        <li>
                                            Số chỗ ngồi <span> {{car.numberOfSeat}}</span>
                                        </li>
                                        <li>
                                            Số cửa <span> {{car.numberOfDoors}}</span>
                                        </li>
                                        <li>
                                            Dẫn động <span> {{car.moving}}</span>
                                        </li>
                                        <li>
                                            Nhiên liệu <span> {{car.fuel}}</span>
                                        </li>
                                        <li>
                                            Hộp số <span> {{car.gear}}</span>
                                        </li>
                                         <li>
                                            Số km đã đi <span> {{$n(car.odo)}}</span>
                                        </li>
                                        <li>
                                            Tình trạng sở hưu <span> {{car.retirementStatus}}</span>
                                        </li>
                                        <li>
                                            Đăng ký lần đầu <span> {{car.firstRegistration}}</span>
                                        </li>
                                        <li>
                                            Chứng thực bởi <span> {{car.testedBy}}</span>
                                        </li>
                                    </ul> 
                                </div>
                                <div class="tab-pane fade" id="tab4default">
                                    <p>
                                       <img src="/public/dict/img/engine.png" alt="engine" class="img-responsive">
                                    </p>
                                </div>
                                <div class="tab-pane fade" id="tab5default">
                                    <p>
                                       <img src="/public/dict/img/engine.png" alt="engine" class="img-responsive">
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Car details content body end -->

                <!-- Comments box start -->
                <div class="comments-box">
                    <h2 class="title">{{car.productName}}</h2>
                    <div class="comments-container">
                        <ul class="blog-post-comments">
                            <li>                    
                                <span class="user-name"><b>- Bán {{car.productName}}, xe đăng kí {{car.retirementStatus}} tháng {{car.firstRegistration}}</b></span>
                                <span class="user-name"><b>- Xe đăng kiểm và đóng phí đường bộ đến tháng {{car.timeout}}</b></span>
                               
                            </li>

                            
                        </ul>
                    </div>
                </div>
                <!-- Comments box end -->
                <div class="clearfix"></div>
                <!-- Contact form start -->
              
                <!-- Contact form end -->
            </div>

            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <!-- Car sidebar right Start-->
                <div class="car-sidebar-right">
                    <!-- Car detail block Start-->
                    <div class="car-detail-block mrg-b-30">
                        <div class="section-heading">
                            <i class="fa fa-search-plus"></i>
                            <h2>{{$t('Car specification')}}</h2>
                            <div class="border"></div>
                            <h4>{{$t('Check the car specifications')}}</h4>
                        </div>
                        <h2 class="title">{{$t('detail')}}</h2>
                        <ul class="car-detail-info-list">
                            <li>
                                <span>Dòng xe:</span>{{car.vehicles}}
                            </li>
                            <li>
                                <span>Năm sản xuất:</span>{{car.yearOfManufacture}}
                            </li>
                            <li>
                                <span>Số km đã đi:</span>{{$n(car.odo)}}
                            </li>
                            <li>
                                <span>Động cơ:</span>{{car.fuel}}
                            </li>
                            <li>
                                <span>Hộp số:</span>{{car.gear}}
                            </li>
                            <li>
                                <span>Xuất xứ:</span>{{car.origin}}
                            </li>
                            <li>
                                <span>Màu sắc:</span>{{car.productColor}}
                            </li>
                        </ul>
                    </div>
                    <!-- Car detail block end-->

                    <div class="clearfix"></div>

                    <!-- Dealer contact Start-->
                    <div class="dealer-contact mrg-b-30">
                        <h2 class="title">Helping Center</h2>
                        <ul>
                            <li>
                                <span>Contact:</span> Person: Alex TM
                            </li>
                            <li>
                                <span>Address:</span> 12 Street, Los Angeles, CA, 94101
                            </li>
                            <li>
                                <span>Phone:</span> <a href="tel:+55-417-634-7071">+55 4XX-634-7071</a>
                            </li>
                            <li>
                                <span>Mobile:</span> <a href="tel:+55-417-634-7071">+55 4XX-634-7071</a>
                            </li>
                        </ul>
                    </div>
                    <!-- Dealer contact End-->

                    <div class="clearfix"></div>

                    <!-- Share Start-->
                    <div class="share mrg-b-30">
                        <h2>Share</h2>
                        <div class="clearfix"></div>
                        <ul class="social-list">
                            <li>
                                <a href="car_details.html#" class="facebook">
                                    <i class="fa fa-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="car_details.html#" class="twitter">
                                    <i class="fa fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="car_details.html#" class="linkedin">
                                    <i class="fa fa-linkedin"></i>
                                </a>
                            </li>
                            <li>
                                <a href="car_details.html#" class="google">
                                    <i class="fa fa-google-plus"></i>
                                </a>
                            </li>
                            <li>
                                <a href="car_details.html#" class="rss">
                                   <i class="fa fa-rss"></i>
                                </a>
                            </li>
                            <li>
                                <a href="car_details.html#" class="vimeo">
                                    <i class="fa fa-vimeo"></i>
                                </a>
                            </li>
                        </ul>
                   </div>
                    <!-- Share End-->

                    <div class="clearfix"></div>
                    
                    <!-- Private message to dealer Start-->
                    <div class="private-message-to-dealer mrg-b-30">
                        <h2 class="title">PRIVATE MESSAGE TO DEALER</h2>
                        <!-- Contact form start -->
                        <div class="contact-form">
                            <form id="contact_form" action="index.html" method="POST" enctype="multipart/form-data">
                                <div class="row">
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div class="form-group full-name">
                                            <input type="text" class="input-text" name="full-name" id="full-name" placeholder="Full Name">
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div class="form-group email address">
                                            <input type="text" class="input-text" name="email" id="email" placeholder="Email Address">
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div class="form-group message">
                                            <textarea id="message" class="input-text" name="message" placeholder="Write message"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div class="form-group send-message">
                                            <input type="submit" name="sent message" class=" btn btn-message" value="send message">
                                        </div>
                                    </div>
                                </div>
                            </form>     
                        </div>
                        <!-- Contact form end -->
                   </div>
                   <!-- private-message-to-dealer end-->
                    
                    <div class="clearfix"></div>
                    
                    <!-- Recent news Start-->
                   
                    <!-- Recent news End-->
                </div>
                <!-- Car sidebar right end-->
            </div>
        </div>
    </div>
</div>
</transaction>
</template>

<script>
import { watchList } from "../api";

export default {
  name: "home-page",

  data() {
    return {
      transition: "slide-right",
      listOfCars: require("../json/product.json")
    };
  },
  computed: {
    carId() {
      return parseInt(this.$route.params.id);
    },
    car() {
      return this.listOfCars.find(
        item => item.productId === this.carId
      );
    }
  },
  created() {
    console.log(this.$route,this.car);
  },
  methods:{
     
  }
};
</script>

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
                                <h2>Chevrolet Impala</h2>
                                <div class="border"></div>
                                <h4>Details of Chevrolet Impala</h4>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 text-right">
                            <div class="car-details-header-price">
                                <h3>$399,500</h3>
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
                                    <img src="/public/dict/img/details/big-6.jpg" class="thumb-preview"alt="Chevrolet Impala"/>
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
                        <li class="active"><a href="car_details.html#tab1default" data-toggle="tab" aria-expanded="true">Vehicle Overview</a></li>
                        <li class=""><a href="car_details.html#tab2default" data-toggle="tab" aria-expanded="false">Features &amp; Options</a></li>
                        <li class=""><a href="car_details.html#tab3default" data-toggle="tab" aria-expanded="false">Technical Specifications</a></li>
                        <li class=""><a href="car_details.html#tab5default" data-toggle="tab" aria-expanded="false">Other Comments</a></li>
                    </ul>
                    <div class="panel with-nav-tabs panel-default">
                        <div class="panel-body">
                            <div class="tab-content">
                                <div class="tab-pane fade active in" id="tab1default">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt aliquam. Aliquam gravida massa at sem vulputate interdum et vel eros. Maecenas eros enim, tincidunt vel turpis vel, dapibus tempus nulla. Donec vel nulla dui. Pellentesque sed ante sed ligula hendrerit condimentum. Suspendisse rhoncus fringilla ipsum quis porta. Morbi tincidunt viverra pharetra.</p>
                                    <p>Vestibulum vel mauris et odio lobortis laoreet eget eu magna. Proin mauris erat, luctus at nulla ut, lobortis mattis magna. Morbi a arcu lacus. Maecenas tristique velit vitae nisi consectetur, in mattis diam sodales. Mauris sagittis sem mattis justo bibendum, a eleifend dolor facilisis. Mauris nec pharetra tortor, ac aliquam felis. Nunc pretium erat sed quam consectetur fringilla.</p>
                                    <p>Aliquam ultricies nunc porta metus interdum mollis. Donec porttitor libero augue, vehicula tincidunt lectus placerat a. Sed tincidunt dolor non sem dictum dignissim. Nulla vulputate orci felis, ac ornare purus ultricies a. Fusce euismod magna orci, sit amet aliquam turpis dignissim ac. In at tortor at ligula pharetra sollicitudin. Sed tincidunt, purus eget laoreet elementum, felis est pharetra ante, tincidunt feugiat libero enim sed risus.</p>
                                    <p>Sed at leo sit amet mi bibendum aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent cursus varius odio, non faucibus dui. Nunc vehicula lectus sed velit suscipit aliquam vitae eu ipsum. Curabitur hendrerit magna a quam semper, at tristique mauris gravida. Donec consequat elementum lorem, ac luctus ligula. Quisque viverra fringilla mi vel aliquam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <div class="tab-pane fade features" id="tab2default">
                                    <div class="row">
                                        <div class="col-md-4 col-sm-6">
                                        <ul>
                                            <li>
                                               <i class="fa fa-check"></i>
                                               Adaptive Cruise Control
                                            </li>
                                            <li>
                                                <i class="fa fa-check "></i>
                                                Airbags
                                            </li>
                                            <li>
                                                <i class="fa fa-check"></i>
                                                Air Conditioning
                                            </li>
                                            <li>
                                                <i class="fa fa-check"></i>
                                                Alarm System
                                            </li>
                                            <li>
                                                <i class="fa fa-check"></i>
                                                Anti-theft Protection
                                            </li>
                                            <li>
                                                <i class="fa fa-check"></i>
                                                Audio Interface
                                            </li>
                                            <li>
                                                <i class="fa fa-check"></i>
                                                Automatic Climate Control
                                            </li>
                                            <li>
                                                <i class="fa fa-check"></i>
                                                Automatic Headlights
                                            </li>
                                            <li>
                                                <i class="fa fa-check"></i>
                                                Auto Start/Stop
                                            </li>
                                            <li>
                                                <i class="fa fa-check"></i>
                                                Bi-Xenon Headlights
                                            </li>
                                            <li>
                                                <i class="fa fa-check"></i>
                                                Audio Interface
                                            </li>
                                            <li>
                                                <i class="fa fa-check"></i>
                                                Bluetooth� Handset
                                            </li>
                                            <li>
                                                <i class="fa fa-check"></i>
                                                BOSE� Surround Sound
                                            </li>
                                            <li>
                                                <i class="fa fa-check"></i>
                                                Burmester� Surround Sound
                                            </li>
                                            <li>
                                                <i class="fa fa-check"></i>
                                                CD/DVD Autochanger
                                            </li>
                                         </ul>
                                    </div>
                                    <div class="col-md-4 col-sm-6">
                                        <ul>
                                            <li>
                                               <i class="fa fa-check"></i>
                                               CDR Audio
                                            </li>
                                            <li>
                                                <i class="fa fa-check"></i>
                                                Cruise Control
                                            </li>
                                            <li>
                                                <i class="fa fa-check"></i>
                                                Direct Fuel Injection
                                            </li>
                                            <li>
                                                <i class="fa fa-check"></i>
                                                Electric Parking Brake
                                            </li>
                                            <li>
                                                <i class="fa fa-check"></i>
                                                Floor Mats
                                            </li>
                                            <li>
                                                <i class="fa fa-check"></i>
                                                Garage Door Opener
                                            </li>
                                            <li>
                                                <i class="fa fa-check"></i>
                                                Leather Package
                                            </li>
                                            <li>
                                                <i class="fa fa-check"></i>
                                                Locking Rear Differential
                                            </li>
                                            <li>
                                                <i class="fa fa-check"></i>
                                                Luggage Compartments
                                            </li>
                                            <li>
                                                <i class="fa fa-check"></i>
                                                Manual Transmission
                                            </li>
                                            <li>
                                                <i class="fa fa-check"></i>
                                                Navigation Module
                                            </li>
                                            <li>
                                                <i class="fa fa-check"></i>
                                                Online Services
                                            </li>
                                            <li>
                                                <i class="fa fa-check"></i>
                                                ParkAssist
                                            </li>
                                            <li>
                                                <i class="fa fa-check"></i>
                                                Porsche Communication
                                            </li>
                                            <li>
                                                <i class="fa fa-check"></i>
                                                CD/DVD Autochanger
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-md-4 col-sm-6">
                                        <ul>
                                            <li>
                                               <i class="fa fa-check"></i>
                                               Power Steering
                                            </li>
                                            <li>
                                                <i class="fa fa-check"></i>
                                                Reversing Camera
                                            </li>
                                            <li>
                                                <i class="fa fa-check"></i>
                                                Roll-over Protection
                                            </li>
                                            <li>
                                                <i class="fa fa-check"></i>
                                                Seat Heating
                                            </li>
                                            <li>
                                                <i class="fa fa-check"></i>
                                                Seat Ventilation
                                            </li>
                                            <li>
                                                <i class="fa fa-check"></i>
                                                Sound Package Plus
                                            </li>
                                            <li>
                                                <i class="fa fa-check"></i>
                                                Sport Chrono Package
                                            </li>
                                            <li>
                                                <i class="fa fa-check"></i>
                                                Steering Wheel Heating
                                            </li>
                                            <li>
                                                <i class="fa fa-check"></i>
                                                Tire Pressure Monitoring
                                            </li>
                                            <li>
                                                <i class="fa fa-check"></i>
                                                Universal Audio Interface
                                            </li>
                                            <li>
                                                <i class="fa fa-check"></i>
                                                Voice Control System
                                            </li>
                                            <li>
                                                <i class="fa fa-check"></i>
                                                Wind Deflector
                                            </li>                              
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade technical" id="tab3default">
                                    <ul>
                                        <li>
                                            Layout / number of cylinders <span> 6</span>
                                        </li>
                                        <li>
                                            Displacement <span> 3.4 l</span>
                                        </li>
                                        <li>
                                            Engine Layout <span> Mid-engine</span>
                                        </li>
                                        <li>
                                            Horespower <span> 315 hp</span>
                                        </li>
                                        <li>
                                            @ rpm <span> 6,700 rpm</span>
                                        </li>
                                        <li>
                                            Torque <span> 266 lb.-ft.</span>
                                        </li>
                                        <li>
                                            Compression ratio <span> 12.5 : 1</span>
                                        </li>
                                    </ul> 
                                </div>
                                <div class="tab-pane fade" id="tab5default">
                                    <p>
                                        Vestibulum sit amet ligula eget nibh cursus bibendum et id eros. Nam congue, dui quis consectetur blandit, neque neque mattis diam, vitae egestas urna lectus eu turpis. In vitae commodo sem. Etiam vehicula sed ligula malesuada cursus. Cras augue elit, tempus at dignissim sed, egestas eget leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam mollis luctus nibh et bibendum. Morbi congue lectus nec congue congue. Nulla molestie feugiat quam ac sollicitudin. Nulla sed congue lectus. Donec blandit elit sit amet aliquet laoreet.
                                    </p>
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
                    <h2 class="title">Comments Section</h2>
                    <div class="comments-container">
                        <ul class="blog-post-comments">
                            <li>                    
                                <span class="user-image"><i class="fa fa-user"></i></span>
                                <span class="user-name">Sam Carlos</span>
                                <span class="date"><i class="fa fa-clock-o"></i>01.12.2016</span>
                                <span class="comment">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                </span>

                                <div class="comment-footer">
                                    <a class="share-box"><span class="like"><i class="fa fa-heart"></i>Like</span></a>
                                    <a class="share-box"><span class="respond"><i class="fa fa-comment"></i>Respond</span></a>
                                    <a class="share-box"><span class="share-2"><i class="fa fa-share-alt"></i>Share</span></a>
                                </div>
                            </li>

                            <li>
                                <span class="user-image"><i class="fa fa-user"></i></span>
                                <span class="user-name">Sam Carlos</span>
                                <span class="date"><i class="fa fa-clock-o"></i>01.12.2016</span>
                                <span class="comment">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                </span>

                                <div class="comment-footer">
                                    <a class="share-box"><span class="like"><i class="fa fa-heart"></i>Like</span></a>
                                    <a class="share-box"><span class="respond"><i class="fa fa-comment"></i>Respond</span></a>
                                    <a class="share-box"><span class="share-2"><i class="fa fa-share-alt"></i>Share</span></a>
                                </div>
                            </li>

                            <li>
                                <ul>
                                    <li>
                                        <span class="user-image"><i class="fa fa-user"></i></span>
                                        <span class="user-name">Sam Carlos</span>
                                        <span class="date"><i class="fa fa-clock-o"></i>01.12.2016</span>
                                        <span class="comment">
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                        </span>

                                        <div class="comment-footer">
                                            <a class="share-box"><span class="like"><i class="fa fa-heart"></i>Like</span></a>
                                            <a class="share-box"><span class="respond"><i class="fa fa-comment"></i>Respond</span></a>
                                            <a class="share-box"><span class="share-2"><i class="fa fa-share-alt"></i>Share</span></a>
                                        </div>                    
                                    </li>
                                </ul>
                            </li>
                  
                            <li>                    
                                <span class="user-image"><i class="fa fa-user"></i></span>
                                <span class="user-name">Sam Carlos</span>
                                <span class="date"><i class="fa fa-clock-o"></i>01.12.2016</span>
                                <span class="comment">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                </span>

                                <div class="comment-footer">
                                    <a class="share-box"><span class="like"><i class="fa fa-heart"></i>Like</span></a>
                                    <a class="share-box"><span class="respond"><i class="fa fa-comment"></i>Respond</span></a>
                                    <a class="share-box"><span class="share-2"><i class="fa fa-share-alt"></i>Share</span></a>
                                </div>                    
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- Comments box end -->
                <div class="clearfix"></div>
                <!-- Contact form start -->
                <div class="contact-form">
                    <form id="contact_form" action="index.html" method="POST" enctype="multipart/form-data">
                        <div class="row">
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div class="form-group full-name">
                                    <input type="text" class="input-text" name="full-name" id="full-name" placeholder="Full Name">
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div class="form-group email address">
                                    <input type="text" class="input-text" name="email" id="email" placeholder="Email Address">
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div class="form-group Phone Number"> 
                                    <input type="text" class="input-text" name="phone-number" id="phone-number" placeholder="Phone Number">
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="form-group message">
                                    <textarea id="message" class="input-text" name="message" placeholder="Write message"></textarea>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div class="form-group send-message">
                                    <input type="submit" name="sent message" class=" btn btn-message" value="send message">
                                </div>
                            </div>
                        </div>
                    </form>     
                </div>
                <!-- Contact form end -->
            </div>

            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <!-- Car sidebar right Start-->
                <div class="car-sidebar-right">
                    <!-- Car detail block Start-->
                    <div class="car-detail-block mrg-b-30">
                        <div class="section-heading">
                            <i class="fa fa-search-plus"></i>
                            <h2>Car specifications</h2>
                            <div class="border"></div>
                            <h4>Check the car specifications</h4>
                        </div>
                        <h2 class="title">Detials</h2>
                        <ul class="car-detail-info-list">
                            <li>
                                <span>Body Style:</span>Convertible
                            </li>
                            <li>
                                <span>Engine:</span>3.4L Mid-Engine V6
                            </li>
                            <li>
                                <span>Transmission:</span>6-speed Manual
                            </li>
                            <li>
                                <span>Drivetrain:</span>Rear Wheel Drive
                            </li>
                            <li>
                                <span>Exaterion:</span>Lime Gold Metallic
                            </li>
                            <li>
                                <span>Interior:</span>Agate Grey
                            </li>
                            <li>
                                <span>Miles:</span>12
                            </li>
                            <li>
                                <span>Doors:</span>2
                            </li>
                            <li>
                                <span>Passengers:</span>2
                            </li>
                            <li>
                                <span>Vin #:</span>WP0AB2E81EK190171
                            </li>
                            <li>
                                <span>Fuel Mileage:</span>20 City / 28 Hwy
                            </li>
                            <li>
                                <span>Fuel Type:</span>Gasoline
                            </li>
                            <li>
                                <span>Vin #:</span>WP0AB2E81EK190171
                            </li>

                            <li>
                                <span>Condition:</span>Brand New
                            </li>
                            <li>
                                <span>Owners:</span>N/A
                            </li>
                            <li>
                                <span>Waeeanty:</span>3 Years Limited
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
                    <div class="Recent-news">
                        <h2 class="title">Recent News</h2>
                    
                        <div class="media">
                            <div class="media-left">
                                <a href="car_details.html#">
                                    <img class="media-object" src="/public/dict/img/recent/recent-1.jpg" alt="recent-1">
                                </a>
                            </div>
                            <div class="media-body">
                                <a href="car_details.html">Mercedes Benz C Class</a>
                                <div class="line-dec-o"></div>
                                <span>$42.000</span>
                            </div>
                        </div>
                        <div class="media">
                            <div class="media-left">
                                <a href="car_details.html#">
                                    <img class="media-object" src="/public/dict/img/recent/recent-2.jpg" alt="recent-2">
                                </a>
                            </div>
                            <div class="media-body">
                                <a href="car_details.html">Jaguar f-type r</a>
                                <div class="line-dec-o"></div>
                                <span>$105,400</span>
                            </div>
                        </div>
                        <div class="media">
                            <div class="media-left">
                                <a href="car_details.html">
                                   <img class="media-object" src="/public/dict/img/recent/recent-3.jpg" alt="recent-3">
                                </a>
                            </div>
                            <div class="media-body">
                                <a href="car_details.html">BMW e46 m3 diski serie</a>
                                <div class="line-dec-o"></div>
                                <span>$49.000</span>
                            </div>
                        </div>
                    </div>
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

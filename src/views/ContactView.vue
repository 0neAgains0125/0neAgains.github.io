<template>
  <div class="contact-us-body">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-md-8 col-xs-12">
                <h2 class="title">Contact Form</h2>
                <div class="contact-form">
                    <form id="contact_form" action="index.html" method="POST" enctype="multipart/form-data">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <div class="form-group full-name">
                                    <input type="text" class="input-text" name="full-name" id="full-name" placeholder="Full Name">
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <div class="form-group email address">
                                    <input type="text" class="input-text" name="email" id="email" placeholder="Email Address">
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <div class="form-group Phone Number"> 
                                    <input type="text" class="input-text" name="phone-number" id="phone-number" placeholder="Phone Number">
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <div class="form-group your website">
                                    <input type="text" class="input-text" name="yor-website" id="your-website" placeholder="Your Website">
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="form-group message">
                                    <textarea id="message" class="input-text" name="message" placeholder="Write message"></textarea>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 mrg-btnn">
                                <input type="submit" name="sent message" class=" btn btn-message" value="send message">
                            </div>
                        </div>
                    </form>     
                </div>
            </div>

            <div class="col-lg-4 col-md-4  col-xs-12">
                <!-- contact details start-->
                <div class="contact-details">
                    <div class="item">
                        <div class="icon">
                            <i class="fa fa-map-marker"></i>
                        </div>
                        <div class="content">
                            <h5>Address</h5>
                            <p>Lorem Ipsum is simply dummy text printing and type setting industry 5562. po alpu</p>
                        </div>
                    </div>

                    <div class="item">
                        <div class="icon">
                            <i class="fa fa-phone"></i>
                        </div>
                        <div class="content">
                            <h5>Phone</h5>
                            <p><span>office:</span> <a href="tel:+880-825-585-5656"> 55 4XX-634-7071</a></p>
                            <p><span>Mobile:</span> <a href="tel:+880-825-585-5656"> +55 4XX-634-7071</a></p>
                        </div>
                    </div>

                    <div class="item">
                        <div class="icon">
                            <i class="fa fa-envelope-o"></i>
                        </div>
                        <div class="content">
                            <h5>Email</h5>
                            <p>
                               <span>office:</span><a href="mailto:info@themevessel.com"> info@themevessel.com</a>
                            </p>

                            <p>
                               <span>Mobile:</span><a href="tel:+880-825-585-5656"> +55 4XX-634-7071</a>
                            </p>
                        </div>
                    </div>
                </div>
                <!-- contact details end-->
                
                <!-- share start-->
                <div class="share">
                    <h2>Share</h2>
                    <ul class="social-list">
                        <li>
                            <a href="contact.html#" class="facebook">
                                <i class="fa fa-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href="contact.html#" class="twitter">
                                <i class="fa fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="contact.html#" class="linkedin">
                                <i class="fa fa-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a href="contact.html#" class="google">
                                <i class="fa fa-google-plus"></i>
                            </a>
                        </li>
                        <li>
                            <a href="contact.html#" class="rss">
                                <i class="fa fa-rss"></i>
                            </a>
                        </li>
                        <li>
                            <a href="contact.html#" class="vimeo">
                                <i class="fa fa-vimeo"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <!-- share end-->
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {};
</script>

<style>

</style>

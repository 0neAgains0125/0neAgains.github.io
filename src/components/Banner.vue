<template>
  <div class="banner">
    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
        <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox">
            <div class="item active item-1">
                <div class="container">
                    <div class="banner-slider-inner-1">
                        <h1>WE ARE WHEEL</h1>
                        <h2>Porsche 911 turbo</h2>
                        <h4>Attract, High Performance, &amp; Convert<br>Outstanding Technology Combined</h4>
                    </div>
                </div>
            </div>
            <div class="item item-2">
                <div class="container">
                        <div class="banner-slider-inner-1">
                        <h1>Explore <span>Your Dream</span></h1>
                        <h4>business from your</h4>
                        <div class="Website-text">Car House</div>
                    </div>
                </div>
            </div>
            <div class="item item-3">
                <div class="container">
                     <div class="banner-slider-inner-1">
                        <h1><span>wow Factor?</span><br>Standard</h1>
                    </div>
                </div>
            </div>
        </div>

        <!-- Controls -->
        <a class="left carousel-control" href="index.html#carousel-example-generic" role="button" data-slide="prev">
          <span class="slider-mover-left" aria-hidden="true">
             <img src="/public/dict/img/png/left-chevron.png" alt="left-chevron">
          </span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="index.html#carousel-example-generic" role="button" data-slide="next">
            <span class="slider-mover-right" aria-hidden="true">
                <img src="/public/dict/img/png/right-chevron.png" alt="right-chevron">
            </span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</div>
</template>
<script>
export default {
    props:[{
        name: "bannerItem",
    type: [String, Array, Object]
    }]
};
</script>

<template>
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
</template>

<script>
export default {
  props: ["item"],
  computed: {
    carCompactInfo() {
      return this.item;
    }
  }
};
</script>

<style>

</style>

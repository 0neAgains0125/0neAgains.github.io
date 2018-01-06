<template>
<transaction :name="transition">
  <adsisory-view>
     <adsisory-accessory></adsisory-accessory>
    </adsisory-view>
</transaction>
  
</template>

<script>
import ServiceView from "./ServiceView.vue";
import ServiceItem from "../components/ServiceItem.vue";
export default {
  components: {
    "adsisory-view": ServiceView,
    "adsisory-accessory": ServiceItem
  },
  data() {
    return {
      transition: "fade"
    };
  }
};
</script>

<style>

</style>

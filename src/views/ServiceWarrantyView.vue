<template>
<transaction :name="transition">
  <service-view>
     <service-accessory></service-accessory>
    </service-view>
</transaction>
  
</template>

<script>
import ServiceView from "./ServiceView.vue";
import ServiceItem from "../components/ServiceItem.vue";
export default {
  components: {
    "service-view": ServiceView,
    "service-accessory": ServiceItem
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

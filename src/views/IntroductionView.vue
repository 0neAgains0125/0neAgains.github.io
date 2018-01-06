
<template>
<transition name="transition">
    <div class="about-body">
        <introduction-welcome></introduction-welcome>
        <introduction-team></introduction-team>
        <introduction-comment></introduction-comment>
        <introduction-our-services></introduction-our-services>
    </div>
</transition>
</template>

<script>
import Team from "../components/Team.vue";
import OurServices from "../components/OurServices.vue";
import CustomerComment from "../components/CustomerComment.vue";
import Welcome from "../components/Welcome.vue";
export default {
  name: "introduction",
  components: {
    "introduction-welcome": Welcome,
    "introduction-team": Team,
    "introduction-comment": CustomerComment,
    "introduction-our-services": OurServices
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

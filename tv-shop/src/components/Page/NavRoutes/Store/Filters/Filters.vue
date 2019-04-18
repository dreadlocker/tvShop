<template>
  <div class="sideNav">
      <BrandFilter/>
      <hr>
      <!-- FIX later -->
      <!-- <InchesFilter/> -->
  </div>
</template>

<script>
import BrandFilter from "./BrandFilter";
import InchesFilter from "./InchesFilter";

export default {
  name: "Filters",
  components: {
    BrandFilter,
    InchesFilter
  }
};
</script>

<style lang="scss" scoped>
.sideNav {
  width: 7rem;
  border-right: 2px solid #cdcdcd;
}
</style>
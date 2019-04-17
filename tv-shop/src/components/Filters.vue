<template>
  <div class="sideNav">
    <BrandFilter/>
    <hr>
    <InchesFilter/>
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
  border: 1px solid red;
}
</style>
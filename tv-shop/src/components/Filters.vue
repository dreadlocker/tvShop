<template>
  <div class="sideNav">
    <BrandFilter/>
    <hr>
    <InchFilter/>
  </div>
</template>

<script>
import BrandFilter from "./BrandFilter";
import InchFilter from "./InchFilter";

export default {
  name: "Filters",
  components: {
    BrandFilter,
    InchFilter
  }
};
</script>

<style lang="scss" scoped>
.sideNav {
  width: 7rem;
  border: 1px solid red;
}
</style>
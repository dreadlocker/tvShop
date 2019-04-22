<template>
  <div class="sideNav">
    <BrandFilter/>
    <hr>
    <InchesFilter/>
    <!-- DA NAPRAVQ TEZI FILTRI SYTRINTA KATO TYK:
      https://techmart.bg/%D0%A2%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%B8

      ВИД НА ДИСПЛЕЯ
      LED (2)
    -->
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
  width: 8rem;
  border-right: 2px solid #cdcdcd;
}
</style>
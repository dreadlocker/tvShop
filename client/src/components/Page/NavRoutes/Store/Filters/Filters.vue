<template>
  <div class="sideNav">
    <BrandFilter/>
    <hr>
    <!-- FIX later -->
    <!-- <InchesFilter/> -->



    <!-- DA NAPRAVQ TEZI FILTRI SYTRINTA KATO TYK:
      https://techmart.bg/%D0%A2%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%B8

      TOVA TRQBVA DA PRATQ KATO URL OTNOSNO Сортирай по:
      /tvs/sortby/desc
      /tvs/sortby/asc

      OTNOSNO Брой продукти:
      /tvs/all-tvs-length/count

      ВИД НА ДИСПЛЕЯ
      LED (2)

      i SEARCH bar da dobavq
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
  width: 7rem;
  border-right: 2px solid #cdcdcd;
}
</style>
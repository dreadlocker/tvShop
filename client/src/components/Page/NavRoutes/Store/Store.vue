<template>
  <div class="store">
    <!-- <Filters/> -->
    <HamburgetMenu/>
    <AllTVs/>
  </div>
</template>

<script>
import HamburgetMenu from "../../HamburgetMenu";
import { mapActions, mapState } from "vuex";
import { ACTION_TVS_ARR } from "@/Vuex/types.js";
import axios from "axios";
import Filters from "./Filters/Filters";
import AllTVs from "./AllTVs";

export default {
  name: "Store",
  components: {
    Filters,
    HamburgetMenu,
    AllTVs,
  },
  computed: {
    ...mapState({
      tvs_arr: state => state.tvsArr
    })
  }
};
</script>

<style lang="scss" scoped>
.store {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
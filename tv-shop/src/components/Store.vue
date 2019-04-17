<template>
  <div class="store">
    <Filters/>
    <SingleTV/>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { ACTION_TVS_ARR } from "../Vuex/types.js";
import axios from "axios";
import Filters from "./Filters";
import SingleTV from "./SingleTV";

export default {
  name: "Store",
  components: {
    Filters,
    SingleTV
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
  justify-content: space-between;
}
.singleTv {
  margin: 0.2rem;
  padding: 0;
  border: 1px solid #cdcdcd;
  width: 32%;
  &:hover {
    transform: scale(0.9);
  }

  @media only screen and (max-width: 1040px) {
    // FIX za po malki ekrani
    // width: 100%;
  }
}
</style>
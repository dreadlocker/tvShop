<template>
  <div id="tvContainer">
    <div v-if="tvs_arr.length > 0" id="row">
      <CountOfTVs id="CountOfTVs"/>
      <PriceAscDesc/>
    </div>
    <TvWrapper/>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CountOfTVs from "./Filters/CountOfTVs";
import PriceAscDesc from "./Filters/PriceAscDesc";
import TvWrapper from "./TvWrapper";

export default {
  name: "AllTVs",
  components: {
    CountOfTVs,
    PriceAscDesc,
    TvWrapper
  },
  computed: {
    ...mapState({
      tvs_arr: state => state.tvsArr,
      tv_count_per_page: state => state.tvCountPerPage
    })
  },
  mounted() {
    this.first10tvs = this.tvs_arr.slice(0, this.tv_count_per_page);
  }
};
</script>

<style lang="scss" scoped>
#tvContainer {
  width: 90%;
}
#row {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 1rem;
}
img {
  cursor: pointer;
}
@media only screen and (max-width: 730px) {
  #row {
    flex-direction: column;
  }
  #CountOfTVs {
    margin-bottom: 0.5rem;
  }
}
@media only screen and (max-width: 500px) {
  img {
    width: 100%;
  }
}
</style>
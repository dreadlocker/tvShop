<template>
  <div class="store">
    <BrandFilter/>
    <div class="tvWrapper">
      <div v-for="tvObj in tvs_arr" :key="tvObj.id" class="singleTv">
        <h3>{{tvObj.model}}</h3>
        <img :src="tvObj.image">
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { ACTION_TVS_ARR } from "../Vuex/types.js";
import axios from "axios";
import BrandFilter from "./BrandFilter";

export default {
  name: "Store",
  components: {
    BrandFilter
  },
  computed: {
    ...mapState({
      tvs_arr: state => state.tvsArr
    })
  },
 
};
</script>

<style lang="scss" scoped>
.store {
  display: flex;
  justify-content: space-between;
}
.tvWrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  min-width: 200px;
  width: 90%;
  border: 1px solid green;
}
.singleTv {
  margin: 0;
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
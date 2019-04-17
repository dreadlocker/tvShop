<template>
  <div class="sideNav">
    <div>
      <p>МАРКА</p>
      <hr>
      <p class="right" v-for="name in namesArr" :key="name">
        <input v-model="checkedNames" type="checkbox" :value="name">
        {{name}}
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions, mapState } from "vuex";
import { ACTION_TVS_ARR } from "../Vuex/types.js";

export default {
  name: "BrandFilter",
  data() {
    return {
      namesArr: ["VORTEX", "NEO", "LG", "SAMSUNG", "SONY", "PHILIPS"],
      checkedNames: []
    };
  },
  computed: {
    ...mapState({
      tvs_arr: state => state.tvsArr
    })
  },
  methods: {
    ...mapActions({
      tvs_arr_action: ACTION_TVS_ARR
    })
  },
  watch: {
    checkedNames: function(checked) {
      axios
        .post("http://10.10.0.227:5432/tvs", { checked })
        .then(response => this.tvs_arr_action(response.data.tvs))
        .catch(error => console.log(error));
    }
  }
};
</script>

<style lang="scss" scoped>
.sideNav {
  width: 7rem;
  border: 1px solid red;
}
.right {
  text-align: left;
}
</style>
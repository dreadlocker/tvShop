<template>
  <div>
    <p>Инчове:</p>
    <hr>
    <p class="right" v-for="name in namesArr" :key="name">
      <input v-model="checkedNames" type="checkbox" :value="name">
      {{name}}
    </p>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions, mapState } from "vuex";
import { ACTION_TVS_ARR } from "../Vuex/types.js";

export default {
  name: "InchesFilter",
  data() {
    return {
      namesArr: [32, 40, 43, 50, 55, 65],
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
    checkedNames: function(inches) {
      axios
        .post("http://10.10.0.227:5432/tvs", { inches })
        .then(response => this.tvs_arr_action(response.data.tvs))
        .catch(error => console.log(error));
    }
  }
};
</script>

<style lang="scss" scoped>
.right {
  text-align: left;
}
</style>
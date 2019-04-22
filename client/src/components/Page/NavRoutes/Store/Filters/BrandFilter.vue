<template>
  <div>
    <p>МАРКА:</p>
    <hr>
    <p class="left" v-for="name in tvs_brand" :key="name">
      <input v-model="checkedTvNames" type="checkbox" :value="name">
      {{name}}
    </p>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions, mapState } from "vuex";
import { ACTION_TVS_ARR, ACTION_CHECKED_TV_NAMES } from "@/Vuex/types.js";

export default {
  name: "BrandFilter",
  data() {
    return {
      checkedTvNames: []
    };
  },
  computed: {
    ...mapState({
      tvs_arr: state => state.tvsArr,
      checked_tv_names: state => state.checkedTvNames,
      tvs_brand: state => state.tvsBrand
    })
  },
  mounted() {
    if (this.checked_tv_names.length > 0)
      this.checkedTvNames = this.checked_tv_names;
  },
  methods: {
    ...mapActions({
      tvs_arr_action: ACTION_TVS_ARR,
      checked_tv_action: ACTION_CHECKED_TV_NAMES
    })
  },
  watch: {
    checkedTvNames: function(models) {
      this.checked_tv_action(models);
      axios
        .post("http://10.10.0.227:5432/tvs", { models })
        .then(response => this.tvs_arr_action(response.data.tvs))
        .catch(error => console.log(error));
    }
  }
};
</script>

<style lang="scss" scoped>
.left {
  text-align: left;
}
</style>
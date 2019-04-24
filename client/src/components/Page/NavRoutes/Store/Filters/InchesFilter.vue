<template>
  <div>
    <p>Инчове:</p>
    <hr>
    <p class="left" v-for="name in inches_arr" :key="name">
      <input v-model="checkedInches" type="checkbox" :value="name">
      {{name}}
    </p>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions, mapState } from "vuex";
import { ACTION_TVS_ARR, ACTION_CHECKED_TV_INCHES } from "@/Vuex/types.js";

export default {
  name: "InchesFilter",
  data() {
    return {
      checkedInches: []
    };
  },
  computed: {
    ...mapState({
      tvs_arr: state => state.tvsArr,
      inches_arr: state => state.inchesArr.sort((a,b) => b-a),
      checked_tv_names: state => state.checkedTvNames,
      tv_count_per_page: state => state.tvCountPerPage,
      tvs_sort_by: state => state.tvsSortBy,
      checked_tv_inches: state => state.checkedTvInches,
    })
  },
  methods: {
    ...mapActions({
      tvs_arr_action: ACTION_TVS_ARR,
      action_checked_tv_inches: ACTION_CHECKED_TV_INCHES,
    })
  },
  watch: {
    checkedInches: function(inches) {
      this.action_checked_tv_inches(inches);
      axios
        .get(`http://10.10.0.227:5432/tvs/filters?
          models=${this.checked_tv_names.join('|')}&c
          riteria=${this.tvs_sort_by}&
          count=${this.tv_count_per_page}&
          inches=${this.checked_tv_inches.join('|')}`)
        .then(response => this.tvs_arr_action(response.data.tvs))
        .catch(err => console.log(err));
    }
  }
};
</script>

<style lang="scss" scoped>
.left {
  text-align: left;
}
</style>
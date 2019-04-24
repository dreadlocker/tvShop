<template>
  <div>
    <span>Сортирай по </span>
    <select @click="optionClicked" id="sortBy">
      <option value="desc">Цена низходящо</option>
      <option value="asc">Цена възходящо</option>
    </select>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions, mapState } from "vuex";
import { ACTION_TVS_SORT_BY } from "@/Vuex/types.js";
import { ACTION_TVS_ARR } from "@/Vuex/types.js";

export default {
  name: "PriceAscDesc",
    computed: {
    ...mapState({
      checked_tv_names: state => state.checkedTvNames,
      tv_count_per_page: state => state.tvCountPerPage,
      checked_tv_inches: state => state.checkedTvInches,
    })
  },
  methods: {
    ...mapActions({ 
      action_tvs_sort_by: ACTION_TVS_SORT_BY,
      tvs_arr_action: ACTION_TVS_ARR
     }),
    optionClicked(ev) {
      this.action_tvs_sort_by(ev.target.value);
      axios
        .get(`http://10.10.0.227:5432/tvs/filters?models=${this.checked_tv_names.join('|')}&criteria=${ev.target.value}&count=${this.tv_count_per_page}&inches=${this.checked_tv_inches}`)
        .then(res => this.tvs_arr_action(res.data.tvs))
        .catch(err => console.log(err));
    }
  }
};
</script>

<style lang="scss" scoped>
#sortBy {
  background-color: #42b983;
  color: white;
}
</style>
<template>
  <div>
    <span>Брой продукти </span>
    <select @click="optionClicked" id="tvsCount">
      <option>10</option>
      <option>25</option>
      <option>50</option>
    </select>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { ACTION_TV_COUNT_PER_PAGE, ACTION_TVS_ARR } from "@/Vuex/types.js";
import axios from "axios";

export default {
  name: "CurrentPageFilter",
  data() {
    return {
      tvBransdArr: [],
      checkedTvNames: []
    };
  },
  computed: {
    ...mapState({
      tvs_arr: state => state.tvsArr,
      tv_count_per_page: state => state.tvCountPerPage,
      checked_tv_names: state => state.checkedTvNames,
      tvs_sort_by: state => state.tvsSortBy,
      checked_tv_inches: state => state.checkedTvInches,
    })
  },
  mounted() {
    tvsCount.value = this.tv_count_per_page;
  },
  methods: {
    ...mapActions({
      action_tv_count_per_page: ACTION_TV_COUNT_PER_PAGE,
      tvs_arr_action: ACTION_TVS_ARR
    }),
    optionClicked(ev) {
      const index = Number(ev.target.value);
      this.action_tv_count_per_page(index);

      axios
        .get(`http://10.10.0.227:5432/tvs/filters?
          models=${this.checked_tv_names.join('|')}&
          criteria=${this.tvs_sort_by}&
          count=${this.tv_count_per_page}&
          inches=${this.checked_tv_inches}`)
        .then(res => this.tvs_arr_action(res.data.tvs))
        .catch(err => console.log(err));
    }
  },
};
</script>
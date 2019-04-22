<template>
  <div>
    <span>Брой продукти </span>
    <select @click="optionClicked" id="tvsCount">
      <option>10</option>
      <option>20</option>
      <option>30</option>
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
      tv_count_per_page: state => state.tvCountPerPage
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
    optionClicked(el) {
      const index = Number(el.target.value);
      this.action_tv_count_per_page(index);
    }
  },
  watch: {
    tv_count_per_page: function(val) {
      console.log(this.tvs_arr);
      console.log(val);
      this.tvs_arr_action(this.tvs_arr.slice(0, this.tv_count_per_page));
    }
  }
};
</script>
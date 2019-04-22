<template>
  <div>
    <span>Сортирай по </span>
    <select @click="optionClicked" class="sortBy">
      <option>Цена възходящо</option>
      <option>Цена низходящо</option>
      <!-- <option value="10">Цена възходящо</option>
      <option value="20">Цена низходящо</option> -->
    </select>
  </div>
</template>

<script>
// import { mapActions, mapState } from "vuex";
// import { ACTION_TV_COUNT_PER_PAGE } from "@/Vuex/types.js";

export default {
  name: "PriceAscDesc",
  computed: {
    // ...mapState({
    //   tvs_arr: state => state.tvsArr,
    //   tv_count_per_page: state => state.tvCountPerPage
    // })
  },
  mounted() {
    // selectEl.value = this.tv_count_per_page;
  },
  methods: {
    // ...mapActions({ action_tv_count_per_page: ACTION_TV_COUNT_PER_PAGE }),
    optionClicked(el) {
      // const index = Number(el.target.value);
      // this.action_tv_count_per_page(index);
    }
  }
};
</script>
<template>
  <div>
    <p>МАРКА:</p>
    <hr>
    <p class="left" v-for="name in tvBransdArr" :key="name">
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
      tvBransdArr: [],
      checkedTvNames: []
    };
  },
  computed: {
    ...mapState({
      tvs_arr: state => state.tvsArr,
      checked_tv_names: state => state.checkedTvNames
    })
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
  },
  mounted() {
    if (this.checked_tv_names.length > 0) this.checkedTvNames = this.checked_tv_names;
    
    const tvBransdArr = [];
    this.tvs_arr.forEach(tvObj => {
      const tvBrand = tvObj.model.split(" ")[1];
      if (!tvBransdArr.includes(tvBrand)) tvBransdArr.push(tvBrand);
    });
    this.tvBransdArr = tvBransdArr;
  }
};
</script>

<style lang="scss" scoped>
.left {
  text-align: left;
}
</style>
<template>
  <router-view v-if="tvs_arr.length > 0"/>
</template>

<script>
import axios from "axios";
import { mapState, mapActions } from "vuex";
import { ACTION_TVS_ARR, ACTION_TVS_BRAND } from "@/Vuex/types.js";

export default {
  name: "PageFromNav",
  computed: {
    ...mapState({
      tvs_arr: state => state.tvsArr
    })
  },
  methods: {
    ...mapActions({
      tvs_arr_action: ACTION_TVS_ARR,
      action_tvs_brand: ACTION_TVS_BRAND
    })
  },
  mounted() {
    axios
      .get("http://10.10.0.227:5432/tvs")
      .then(res => {
        this.tvs_arr_action(res.data.tvs);
        let brandLettersArr = [...res.data.tvs];
        brandLettersArr = res.data.tvs.map(brandObj => {
          return (brandObj = brandObj.model.split(/\s+/gi)[1]);
        });
        this.action_tvs_brand([...new Set(brandLettersArr)]);
      })
      .catch(err => console.log(err));
  }
};
</script>

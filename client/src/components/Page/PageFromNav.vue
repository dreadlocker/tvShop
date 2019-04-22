<template>
  <router-view v-if="tvs_arr.length > 0"/>
</template>

<script>
import axios from "axios";
import { mapState, mapActions } from "vuex";
import { ACTION_TVS_ARR, ACTION_TVS_BRAND, ACTION_INCHES_ARR } from "@/Vuex/types.js";

export default {
  name: "PageFromNav",
  computed: {
    ...mapState({
      tvs_arr: state => state.tvsArr,
      inches_arr: state => state.inchesArr
    })
  },
  methods: {
    ...mapActions({
      tvs_arr_action: ACTION_TVS_ARR,
      action_tvs_brand: ACTION_TVS_BRAND,
      action_inches_arr: ACTION_INCHES_ARR,
    })
  },
  mounted() {
    axios
      .get("http://10.10.0.227:5432/tvs")
      .then(res => {
        this.tvs_arr_action(res.data.tvs);
        const [brands, inches] = [[],[]];
        res.data.tvs.map(brandObj => {
           brands.push(brandObj.model.split(/\s+/gi)[1])
           inches.push(brandObj.inches);
        });

        this.action_tvs_brand([...new Set(brands)]);
        this.action_inches_arr([...new Set(inches)]);
      })
      .catch(err => console.log(err));
  }
};
</script>

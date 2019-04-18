<template>
  <router-view v-if="tvs_arr.length > 0"/>
</template>

<script>
import axios from "axios";
import { mapState, mapActions } from "vuex";
import { ACTION_TVS_ARR } from "../Vuex/types.js";

export default {
  name: "PageFromNav",
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
  mounted() {
    axios
      .get("http://10.10.0.227:5432/tvs")
      .then(res => this.tvs_arr_action(res.data.tvs))
      .catch(err => console.log(err));
  }
};
</script>
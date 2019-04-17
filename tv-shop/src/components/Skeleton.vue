<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/store">Store</router-link>|
      <router-link to="/promotions">Promotions</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view v-if="tvs_arr.length > 0"/>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapActions } from "vuex";
import { ACTION_TVS_ARR } from "../Vuex/types.js";

export default {
  name: "Skeleton",
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

<style lang="scss" scoped>
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
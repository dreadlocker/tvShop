<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/store">Store</router-link>|
      <router-link to="/promotions">Promotions</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions, mapState } from "vuex";
import { ACTION_TVS_ARR } from "../Vuex/types.js";

export default {
  name: "Home",
  data() {
    return {
      randomIndex: 0,
      interval: 0,
      src: 0
    };
  },
  computed: {
    ...mapState({
      tvs_arr: state => state.tvsArr
    })
  },
  methods: {
    ...mapActions({
      tvs_arr_action: ACTION_TVS_ARR
    }),
    renderAnimation(tvs) {
      this.randomIndex = Math.round(Math.random() * (tvs.length - 1));
      this.src = tvs[this.randomIndex].image;

      this.interval = setInterval(() => {
        this.randomIndex = Math.round(Math.random() * (tvs.length - 1));
        this.src = tvs[this.randomIndex].image;
      }, 2000);
    }
  },
  mounted() {
    axios
      .get("http://10.10.0.227:5432/tvs")
      .then(res => this.tvs_arr_action(res.data.tvs))
      .then(() => this.renderAnimation(this.tvs_arr))
      .catch(err => console.log(err));
  },
  beforeDestroy() {
    this.interval = clearInterval(this.interval);
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
<template>
  <div class="home">
    <h1>Welcome to our store</h1>
    <div>
      <img :src="src">
    </div>
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
img {
  animation: showHideImage 2000ms infinite;
}
@keyframes showHideImage {
  0% {
    transform: scale(0);
  }
  25% {
    transform: scale(1);
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
</style>
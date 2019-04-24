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
import { mapState } from "vuex";

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
      tv_images_arr: state => state.tvImagesArr,
    })
  },
  methods: {
    renderAnimation() {
      this.randomIndex = Math.round(Math.random() * (this.tv_images_arr.length - 1));
      this.src = this.tv_images_arr[this.randomIndex];
      
      this.interval = setInterval(() => {
        this.randomIndex = Math.round(Math.random() * (this.tv_images_arr.length - 1));
        this.src = this.tv_images_arr[this.randomIndex];
      }, 2000);
    }
  },
  mounted() {
    this.renderAnimation()
  },
  beforeDestroy() {
    this.interval = clearInterval(this.interval);
  }
};
</script>

<style lang="scss" scoped>
img {
  animation: showHideImage 2000ms infinite;
  width: 20rem;
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
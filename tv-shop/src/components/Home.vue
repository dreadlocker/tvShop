<template>
  <div class="home">
    <h1>Welcome to our store</h1>
    <div>
      <img :src="src">
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      // FIX da se vzeme ot masiv sus TV ot Vuex
      images: [
        "http://cdn.technomarket.bg/../media/cache/my_thumb/uploads/library/product/09162237/5b2b8077d63f2.jpeg",
        "http://cdn.technomarket.bg/../media/cache/my_thumb/uploads/library/product/09167453/5b891bad510d2.jpg",
        "http://cdn.technomarket.bg/../media/cache/my_thumb/uploads/library/product/09169564/5c0f72dd94266.jpg",
        "http://cdn.technomarket.bg/../media/cache/my_thumb/uploads/library/product/09165592/5b557f96b01e1.jpg",
        "http://cdn.technomarket.bg/../media/cache/my_thumb/uploads/library/product/09164613/5af143c0e00f7.jpeg"
      ],
      randomIndex: 0,
      interval: 0,
      src: 0
    };
  },
  mounted() {
    this.randomIndex = Math.round(Math.random() * (this.images.length - 1));
    this.src = this.images[this.randomIndex];

    this.interval = setInterval(() => {
      this.randomIndex = Math.round(Math.random() * (this.images.length - 1));
      this.src = this.images[this.randomIndex];
    }, 2000);
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
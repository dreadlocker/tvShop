<template>
  <div id="nav">
    <router-link to="/">Home</router-link>|
    <router-link to="/store">Store</router-link>|
    <router-link to="/promotions">Promotions</router-link>|
    <router-link to="/about">About</router-link>
    <router-link to="/cart" id="cartNav"></router-link>
    <div v-if="bought_TVs.length > 0" id="boughtItemsCount">{{bought_TVs.length}}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Nav",
  computed: {
    ...mapState({ bought_TVs: state => state.boughtTVs })
  },
}
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
#cartNav {
  position: absolute;
  right: 1.5rem;
  width: 30px;
  height: 30px;
  background: url("../../assets/shopping-cart.png") no-repeat;
  background-size: 100%;
}
#boughtItemsCount {
  background-color: #50d750;
  color: white;
  position: absolute;
  right: 1rem;
  border: 1px solid #46a858;
  border-radius: 50%;
  width: 1.2rem;
}
</style>
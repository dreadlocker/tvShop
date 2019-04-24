<template>
  <div id="nav">
    <router-link to="/">HOME</router-link> |
    <router-link to="/store">STORE</router-link> |
    <router-link to="/promotions">PROMOTIONS</router-link> |
    <router-link to="/about">ABOUT</router-link>
    <router-link to="/cart" id="cartNav"></router-link>
    <div v-if="bought_TVs.length > 0" id="boughtItemsCount">{{bought_TVs.length}}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Nav",
  computed: {
    ...mapState({
      bought_TVs: state => state.boughtTVs
    })
  }
};
</script>

<style lang="scss" scoped>
#nav {
  background-color: black;
  color: white;
  padding: 30px;
  margin-bottom: 1rem;
  font-size: 1.5rem;

  a {
    text-decoration: none;
    font-weight: bold;
    color: white;
    margin: 0 1rem;

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
  background-color: #42b983;
  color: white;
  position: absolute;
  right: 1rem;
  border: 1px solid #8bf69e;
  border-radius: 50%;
  width: 1.2rem;
}
</style>

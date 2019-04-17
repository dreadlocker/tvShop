<template>
  <div id="app">
    <Skeleton/>
  </div>
</template>

<script>
import Skeleton from "./components/Skeleton";

export default {
  name: "App",
  components: {
    Skeleton
  }
};
</script>

<style lang="scss">
html,
body,
p {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin: 0.5rem;
}
</style>
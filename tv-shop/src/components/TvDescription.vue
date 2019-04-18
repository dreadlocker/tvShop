<template>
  <div id="description">
    <p v-for="description in descriptionsArr" :key="description">
      {{description}}
      <br>
      <br>
    </p>
  </div>
</template>

<script>
export default {
  name: "TvDescription",
  props: {
    descriptionsArr: Array
  }
};
</script>

<style lang="scss" scoped>
#description {
  max-width: 27rem;
  margin: auto;
  text-align: left;
}
</style>
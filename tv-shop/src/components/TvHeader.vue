<template>
  <div>
    <h1>{{model}}</h1>
    <img :src="image">
  </div>
</template>

<script>
export default {
  name: "TvHeader",
  props: {
    model: String,
    image: String
  }
};
</script>
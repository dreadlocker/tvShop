<template>
  <div class="tvWrapper">
    <div v-for="tvObj in tvs_arr" :key="tvObj.id" class="singleTv">
      <h3>{{tvObj.model}}</h3>
      <img :src="tvObj.image">
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SingleTV",
  computed: {
    ...mapState({
      tvs_arr: state => state.tvsArr
    })
  }
};
</script>


<style lang="scss" scoped>
.tvWrapper {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  min-width: 200px;
  width: 90%;
  border: 1px solid green;
}
.singleTv {
  margin: 0.2rem;
  padding: 0;
  border: 1px solid #cdcdcd;
  width: 32%;
  &:hover {
    transform: scale(0.9);
  }
}
</style>
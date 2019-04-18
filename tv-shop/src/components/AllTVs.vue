<template>
  <div class="tvWrapper">
    <div v-for="(tvObj, index) in tvs_arr" :key="index" class="singleTv">
      <h3>{{tvObj.model}}</h3>
      <img @click="thisTvPage(index)" :src="tvObj.image">
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";

export default {
  name: "AllTVs",
  computed: {
    ...mapState({
      tvs_arr: state => state.tvsArr
    })
  },
  methods: {
    thisTvPage(index) {
      const tvID = this.tvs_arr[index].id;
      this.$router.push(`tv/${tvID}`); // go to URL tv/:id
    }
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
img {
  cursor: pointer;
}
</style>
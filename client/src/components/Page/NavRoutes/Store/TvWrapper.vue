<template>
  <div class="tvWrapper">
    <div v-for="(tvObj, index) in arrOfTVs" :key="index" class="singleTv">
      <h3>{{tvObj.model}}</h3>
      <img @click="thisTvPage" :src="tvObj.image" :data-id="tvObj.id">
      <h3>{{tvObj.price}}лв.</h3>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "TvWrapper",
  props: {
    arrFromChild: Number
  },
  data() {
    return {
      arrOfTVs: [],
      index: 0
    };
  },
  computed: {
    ...mapState({
      tvs_arr: state => state.tvsArr,
      tv_count_per_page: state => state.tvCountPerPage
    })
  },
  mounted() {
    this.arrOfTVs = this.tvs_arr.slice(0, this.tv_count_per_page);
  },
  methods: {
    thisTvPage() {
      const id = event.target.dataset.id;
      this.$router.push(`tv/${id}`); // go to URL tv/:id
    }
  },
  watch: {
    tvs_arr: function(val) {
      this.arrOfTVs = this.tvs_arr.slice(0, this.tv_count_per_page);
    }
  }
};
</script>

<style lang="scss" scoped>
#tvContainer {
  width: 90%;
}
.tvWrapper {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  min-width: 200px;
  width: 100%;
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
h3 {
  padding: 0 0.5rem;
}
img {
  cursor: pointer;
}
@media only screen and (max-width: 730px) {
  .singleTv {
    width: 100%;
  }
}
@media only screen and (max-width: 500px) {
  img {
    width: 100%;
  }
}
</style>
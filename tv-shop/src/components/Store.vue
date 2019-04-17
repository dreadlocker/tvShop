<template>
  <div class="store">
    <BrandFilter/>
    <div class="tvWrapper">
      <div v-for="tvObj in tvs_arr" :key="tvObj.id" class="singleTv">
        <h3>{{tvObj.model}}</h3>
        <img :src="tvObj.image">
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { ACTION_TVS_ARR } from "../Vuex/types.js";
import axios from "axios";
import BrandFilter from "./BrandFilter";
// import * as requests from "../helper/requests.js";
import  requests  from "../mixins/requests.js";

export default {
  name: "Store",
  mixins: [requests],
  components: {
    BrandFilter
  },
  data() {
    return {
      // tvsArr: [],
      namesArr: ["VORTEX", "NEO", "LG", "SAMSUNG", "SONY", "PHILIPS"]
      // checkedNames: []
    };
  },
  computed: {
    ...mapState({
      tvs_arr: state => state.tvsArr
    })
  },
  // methods: {
  //   ...mapActions({
  //     tvs_arr_action: ACTION_TVS_ARR
  //   })
  // },
  mounted() {
      // console.log(this.$requestHelper.getTvs());
      // this.getRequest().then((res) => {
      //   console.log(res);
      // })

      // console.log(this.getRequest());
    // this.$requestHelper.getTvs().then(res => console.log(res));
    // console.log(requests);
    // axios
    //   .get("http://10.10.0.227:5432/tvs")
    //   .then(response => {
    //     // this.tvsArr = response.data.tvs;
    //     this.tvs_arr_action(response.data.tvs);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  },
  // mounted() {
  // console.log(this.tvsArr);
  // },
  watch: {
    checkedNames: function(checked) {
      axios
        .post("http://10.10.0.227:5432/tvs", {
          checked: checked
        })
        .then(response => {
          this.tvsArr = response.data.tvs;
          console.log(response.data.tvs);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.store {
  display: flex;
  justify-content: space-between;
  // height: 92%;
}
// .sideNav {
//   width: 7rem;
//   // width: 30%;
//   // height: 100%;
//   border: 1px solid red;
// }
.tvWrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  min-width: 200px;
  // max-width: 92%;
  width: 90%;
  // height: 100%;
  border: 1px solid green;
}
.singleTv {
  margin: 0;
  padding: 0;
  border: 1px solid #cdcdcd;
  // margin: 0 0 1rem 0;
  width: 32%;
  &:hover {
    transform: scale(0.9);
  }

  @media only screen and (max-width: 1040px) {
    // width: 100%;
  }
}
// .right {
//   text-align: left;
// }
</style>

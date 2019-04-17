<template>
  <div class="sideNav">
    <div>
      <p>МАРКА</p>
      <hr>
      <!-- <p class="right" v-for="name in namesArr" :key="name" :value="name">
      <input v-model="checkedNames" type="checkbox" id="">{{name}}-->
      <p class="right">
        <input v-model="checkedNames" value="VORTEX" type="checkbox">VORTEX
      </p>
      <p class="right">
        <input v-model="checkedNames" value="NEO" type="checkbox">
        NEO
      </p>
      <p class="right">
        <input v-model="checkedNames" value="LG" type="checkbox">
        LG
      </p>
      <p class="right">
        <input v-model="checkedNames" value="SAMSUNG" type="checkbox">
        SAMSUNG
      </p>
      <p class="right">
        <input v-model="checkedNames" value="SONY" type="checkbox">
        SONY
      </p>
      <p class="right">
        <input v-model="checkedNames" value="PHILIPS" type="checkbox">
        PHILIPS
      </p>
      <!-- </p> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import BrandFilter from "./BrandFilter";

export default {
  name: "BrandFilter",
  data() {
    return {
      // tvsArr: [],
      // namesArr: ["VORTEX", "NEO", "LG", "SAMSUNG", "SONY", "PHILIPS"],
      checkedNames: []
    };
  },
  // mounted() {
  //   axios
  //     .get("http://10.10.0.227:5432/tvs")
  //     .then(response => {
  //       this.tvsArr = response.data.tvs;
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // },
  // mounted() {
  //   // console.log(this.tvsArr);
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
.sideNav {
  width: 7rem;
  // width: 30%;
  // height: 100%;
  border: 1px solid red;
}

.right {
  text-align: left;
}
</style>

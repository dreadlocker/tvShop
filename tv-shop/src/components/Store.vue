<template>
  <div class="store">
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
    <div class="tvWrapper">
      <div v-for="tvObj in tvsArr" :key="tvObj.id" class="singleTv">
        <h3>{{tvObj.model}}</h3>
        <img :src="tvObj.image">
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Store",
  data() {
    return {
      tvsArr: [],
      namesArr: ["VORTEX", "NEO", "LG", "SAMSUNG", "SONY", "PHILIPS"],
      checkedNames: []
    };
  },
  beforeMount() {
    axios
      .get("http://10.10.0.227:5432/tvs")
      .then(response => {
        this.tvsArr = response.data.tvs;
      })
      .catch(() => {
        console.log(error);
      });
  },
  mounted() {
    // console.log(this.tvsArr);
  },
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
        .catch(() => {
          console.log(error);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.store {
  display: flex;
  justify-content: space-between;
  // height: 92%;
}
.sideNav {
  // width: 30%;
  // height: 100%;
  border: 1px solid red;
}
.tvWrapper {
  display: flex;
  // justify-content: space-between;
  flex-wrap: wrap;
  width: 67%;
  // height: 100%;
  border: 1px solid green;
}
.singleTv {
  margin: 0;
  padding: 0;
  border: 1px solid #cdcdcd;
  // margin: 0.2rem;
  // width: 32%;
  @media only screen and (max-width: 1040px) {
    // width: 100%;
  }
}
.right {
  text-align: left;
}
</style>

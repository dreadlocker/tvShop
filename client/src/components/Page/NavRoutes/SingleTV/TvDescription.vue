<template>
  <div id="description">
    <h1>Цена: {{tvObj.price}}лв.</h1>
    <p v-for="description in tvObj.description" :key="description">
      {{description}}
      <br>
      <br>
    </p>
    <div id="btnWrapper">
      <button @click="buyThisTV" class="btn">Add to cart</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { ACTION_BOUGHT_TVS } from "@/Vuex/types.js";
import axios from "axios";

export default {
  name: "TvDescription",
  props: {
    tvObj: Object
  },
  methods: {
    ...mapActions({ action_bought_tvs: ACTION_BOUGHT_TVS }),
    buyThisTV() {
      event.target.disabled = true;
      event.target.classList.add("disabled");
      this.action_bought_tvs(this.tvObj);

      axios
        .get(`http://10.10.0.227:5432/tv/bought-tv/${this.tvObj.id}`)
        .catch(err => console.log(err));
    }
  }
};
</script>

<style lang="scss" scoped>
#description {
  max-width: 27rem;
  margin: auto;
  text-align: left;
}
h1 {
  text-align: center;
}
#btnWrapper {
  display: flex;
  justify-content: center;
}
.btn {
  cursor: pointer;
  border-radius: 15%;
  color: white;
  background-color: #50d750;
  height: 3rem;
  width: 10rem;
  font-size: 1.4rem;
  &:hover {
    box-shadow: 4px 4px #46a858;
  }
  &:active {
    transform: scale(0.9);
  }
}
.disabled {
  cursor: not-allowed;
  &:hover {
    box-shadow: none;
  }
  background-color: #747474;
}
</style>
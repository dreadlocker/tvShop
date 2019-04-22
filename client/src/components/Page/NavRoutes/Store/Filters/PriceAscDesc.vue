<template>
  <div>
    <span>Сортирай по </span>
    <select @click="optionClicked" id="sortBy">
      <option value="desc">Цена низходящо</option>
      <option value="asc">Цена възходящо</option>
    </select>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
import { ACTION_TVS_ARR } from "@/Vuex/types.js";

export default {
  name: "PriceAscDesc",
  methods: {
    ...mapActions({ action_tvs_arr: ACTION_TVS_ARR }),
    optionClicked(ev) {
      axios
        .get(`http://10.10.0.227:5432/tvs/sortby/${ev.target.value}`)
        .then(res => {
          console.log(res.data.tvs);
// this.action_tvs_arr(res.data.tvs)
        } )
        .catch(err => console.log(err));
    }
  }
};
</script>
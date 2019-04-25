<template>
  <!-- FIX admin1 -->
  <div class="cart">
    <div v-for="(tvObj, index) in tvsArr" :key="index" id="tvsWrapper">
      <div>
        <img :src="tvObj.image">
      </div>
      <div id="modelWrapper">
        <h1>{{tvObj.model}}</h1>
      </div>
      <h2>{{tvObj.price}}лв.</h2>
      <div @click="deleteItem(tvObj.id)" :index="index" id="deleteBtn">&#215;</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AdminPanel",
  data() {
    return {
      name: "",
      password: "",
      tvsArr: []
    };
  },
  mounted() {
    this.tvsArr = this.tvs_arr;

    const index = this.$router.history.current.params.id - 1;
    axios
      .get(`http://10.10.0.227:5432/adminPanel/`)
      .then(response => this.tvsArr = response.data.tvs)
      .catch(err => console.log(err));
  },
  methods: {
    deleteItem(id) {
      axios
        .post(`http://10.10.0.227:5432/adminPanel/`, { id })
        .then(response => (this.tvsArr = response.data.tvs))
        .catch(err => console.log(err));
    }
  }
};
</script>

<style lang="scss" scoped>
.cart {
  margin: 0.5rem;
}
#tvsWrapper {
  display: flex;
  width: 100%;
  border: 1px solid #838383;
  margin-bottom: 1rem;
}
img {
  width: 7rem;
  margin-left: 0.5rem;
}
h2 {
  margin-right: 1rem;
  align-self: center;
}
#modelWrapper {
  margin: auto;
  h1 {
    font-size: 1rem;
    margin: 0 1rem;
  }
}
#deleteBtn {
  color: red;
  font-size: 2rem;
  cursor: pointer;
  margin-right: 0.5rem;
}
@media only screen and (max-width: 730px) {
  #tvsWrapper {
    flex-direction: column;
  }
}
</style>
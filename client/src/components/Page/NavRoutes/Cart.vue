<template>
  <div class="cart">
    <h1 v-if="bought_TVs.length === 0">Your cart is empty.</h1>
    <div v-else v-for="(tvObj, index) in bought_TVs" :key="index" id="tvsWrapper">
      <div>
        <img :src="tvObj.image">
      </div>
      <div id="modelWrapper">
        <h1>{{tvObj.model}}</h1>
      </div>
      <h2>{{tvObj.price}}лв.</h2>
      <div @click="deleteItem" :index="index" id="deleteBtn">&#215;</div>
    </div>
    <h1 v-if="bought_TVs.length > 0">Total: {{totalAmmount}}лв.</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";

export default {
  name: "Cart",
  data() {
    return {
      totalAmmount: 0
    };
  },
  computed: {
    ...mapState({ bought_TVs: state => state.boughtTVs })
  },
  mounted() {
    this.calculateTotalAmmount();
  },
  methods: {
    deleteItem() {
      const index = event.target.attributes.index.value;
      const tvID = this.bought_TVs[index].id;
      this.bought_TVs.splice(index, 1);

      axios
        .get(`http://10.10.0.227:5432/tv/bought-tv/${tvID}`)
        .catch(err => console.log(err));
    },
    calculateTotalAmmount() {
      this.totalAmmount = 0;
      this.bought_TVs.map(tvObj => {
        this.totalAmmount += tvObj.price;
      });
    }
  },
  watch: {
    bought_TVs: function(val) {
      this.calculateTotalAmmount();
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
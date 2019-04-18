<template>
  <div class="singleTV">
    <TvHeader :model="tvObj.model" :image="tvObj.image"/>
    <TvDescription :descriptionsArr="tvObj.description"/>
  </div>
</template>

<script>
import axios from "axios";
import TvDescription from "./TvDescription";
import TvHeader from "./TvHeader";

export default {
  name: "SingleTV",
  components: {
    TvDescription,
    TvHeader
  },
  data() {
    return {
      tvObj: {}
    };
  },
  mounted() {
    const index = this.$router.history.current.params.id - 1;
    axios
      .get(`http://10.10.0.227:5432/tv/${index}`)
      .then(response => { this.tvObj = response.data.tv })
      .catch(error => console.log(error));
  }
};
</script>
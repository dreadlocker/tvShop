<template>
  <router-view v-if="tv_images_arr.length > 0"/>
</template>

<script>
import axios from "axios";
import { mapState, mapActions } from "vuex";
import { ACTION_TVS_ARR, ACTION_TV_IMAGES_ARR, ACTION_TVS_BRAND, ACTION_INCHES_ARR } from "@/Vuex/types.js";

export default {
  name: "PageFromNav",
  data() {
    return {
      tvImagesArr: []
    }
  },
  computed: {
    ...mapState({
      tvs_arr: state => state.tvsArr,
      tv_images_arr: state => state.tvImagesArr,
      inches_arr: state => state.inchesArr
    })
  },
  methods: {
    ...mapActions({
      action_tvs_arr: ACTION_TVS_ARR,
      action_tv_images_arr: ACTION_TV_IMAGES_ARR,
      action_tvs_brand: ACTION_TVS_BRAND,
      action_inches_arr: ACTION_INCHES_ARR,
    })
  },
  mounted() {
    axios
      .get("http://10.10.0.227:5432/tvs")
      .then(res => {
        const tvImagesArr = res.data.tvs.map(tvObj => tvObj.image);
        this.action_tv_images_arr(tvImagesArr);

        this.action_tvs_arr(res.data.tvs);
        
        const [brands, inches] = [[],[]];
        res.data.tvs.map(brandObj => {
           brands.push(brandObj.model.split(/\s+/gi)[1])
           inches.push(brandObj.inches);
        });

        this.action_tvs_brand([...new Set(brands)]);
        this.action_inches_arr([...new Set(inches)]);
      })
      .catch(err => console.log(err));
  }
};
</script>

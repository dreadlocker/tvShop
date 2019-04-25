<template>
  <div>
    <!-- <Filters/> -->
  </div>
</template>

<script>
import Filters from "./NavRoutes/Store/Filters/Filters";
// import PageFromNav from "./Page/PageFromNav";
// import jwt_decode from "jwt-decode";
// import axios from "axios";
// import { mapActions, mapState } from "vuex";
// import { ACTION_IS_LOGGED } from "@/Vuex/types.js";

export default {
  name: "HamburgetMenu",
  components: {
    Filters,
    // PageFromNav
  },
  computed: {
    // ...mapState({
      // is_logged: state => state.isLogged
    // })
  },
  methods: {
    // ...mapActions({
      // action_is_logged: ACTION_IS_LOGGED
    // })
  },
  mounted() {
    // if (localStorage.jwtToken) {
    //   if (localStorage.jwtToken) {
    //     axios.defaults.headers.common["Authorization"] = localStorage.jwtToken;
    //     this.$router.push("/adminPanel");
    //   } else {
    //     delete axios.defaults.headers.common["Authorization"];
    //   }

    //   const decoded = jwt_decode(localStorage.jwtToken);
    //   this.action_is_logged(true);
    //   console.log(this.is_logged);
    //   if (this.is_logged) {
    //     this.$router.push("/adminPanel");
    //     console.log("/adminPanel");
    //   } else {
    //     this.$router.push("/login");
    //     console.log("/login");
    //   }
    // }
  }
};
</script>

<style lang="scss" >
#sideNav {
  color: red;
}
</style>

<template>
  <div>
    <Nav/>
    <PageFromNav/>
  </div>
</template>

<script>
import Nav from "./Page/Nav";
import PageFromNav from "./Page/PageFromNav";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { mapActions, mapState } from "vuex";
import { ACTION_IS_LOGGED } from "@/Vuex/types.js";

export default {
  name: "Skeleton",
  components: {
    Nav,
    PageFromNav
  },
  computed: {
    ...mapState({
      is_logged: state => state.isLogged
    })
  },
  methods: {
    ...mapActions({
      action_is_logged: ACTION_IS_LOGGED
    })
  },
  mounted() {
    if (localStorage.jwtToken) {
      if (localStorage.jwtToken) {
        axios.defaults.headers.common["Authorization"] = localStorage.jwtToken;
        this.$router.push("/adminPanel");
      } else {
        delete axios.defaults.headers.common["Authorization"];
      }

      const decoded = jwt_decode(localStorage.jwtToken);
      this.action_is_logged(true);
    }

    if (this.is_logged) {
      this.$router.push("/adminPanel");
    } else {
      this.$router.push("/login");
      
    }
  }
};
</script>

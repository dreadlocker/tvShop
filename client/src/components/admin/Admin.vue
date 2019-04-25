<template>
  <div>
    <form>
      <input v-model="name" type="text" autofocus>
      <br>
      <input v-model="password" type="password">
      <br>
      <button @click="logMeIn">Login</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import jwt_decode from "jwt-decode";
import { mapActions, mapState } from "vuex";
import { ACTION_IS_LOGGED } from "@/Vuex/types.js";

export default {
  name: "Admin",
  data() {
    return {
      name: "",
      password: "",
      isLogged: false
    };
  },

  computed: {
    ...mapState({
      is_logged: state => state.isLogged
    })
  },
  methods: {
    ...mapActions({
      action_is_logged: ACTION_IS_LOGGED
    }),
    logMeIn() {
      event.preventDefault();
      const [name, password] = [this.name, this.password];

      axios
        .post(`http://10.10.0.227:5432/login`, { name, password })
        .then(response => {
          const token = response.data.token;
          localStorage.setItem("jwtToken", token);
          this.setAuthToken(token);
          const decoded = jwt_decode(token);
          this.setCurrentUser(decoded);
        })
        .catch(err => console.log(err));
    },
    setAuthToken(token) {
      if (token) {
        axios.defaults.headers.common["Authorization"] = token;
        this.$router.push("/adminPanel");
      } else {
        delete axios.defaults.headers.common["Authorization"];
      }
    },
    setCurrentUser(decoded) {
      this.action_is_logged(true);
      if (this.is_logged) {
        this.$router.push("/adminPanel");
      } else {
        this.$router.push("/");
      }
    }
  }
};
</script>
// admin1
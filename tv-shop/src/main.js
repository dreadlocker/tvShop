import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './Vuex/store'
import requests from './mixins/requests';

Vue.use(requests);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import store from './store'

Vue.use(Vuetify);

Vue.config.productionTip = false;
const vuetifyOptions = { };

new Vue({
  router,
  vuetify: new Vuetify(vuetifyOptions),
  store,
  render: h => h(App),
}).$mount('#app');

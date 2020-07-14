import Vue from 'vue'
import App from './App.vue'
import router from './Router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false
const vuetifyOptions = { }

new Vue({
  router,
  vuetify: new Vuetify(vuetifyOptions),
  render: h => h(App),
}).$mount('#app')

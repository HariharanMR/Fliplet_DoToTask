import Vue from 'vue'
import App from './App.vue'
// Import Bootstrap Vue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vuetify from './plugins/vuetify'
Vue.config.productionTip = false

new Vue({
  BootstrapVue,
  IconsPlugin,
  vuetify,
  render: h => h(App)
}).$mount('#app')

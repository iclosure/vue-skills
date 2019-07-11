import Vue from 'vue'
import './plugins/vuetify'
import './plugins/vuetify'
import App from './App.vue'
import Vuetify from 'vuetify'
import VeeValidate from 'vee-validate'
import router from './router'
import ECharts from 'vue-echarts'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.use(VeeValidate)
Vue.use(ECharts)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

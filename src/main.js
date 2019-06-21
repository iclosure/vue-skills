import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate'
import router from './router'

import ECharts from 'vue-echarts'

Vue.use(VeeValidate)
Vue.use(ECharts)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

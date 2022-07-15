import Vue from 'vue'
import { createI18n } from 'vue-i18n-composable'
import App from './App.vue'

Vue.config.productionTip = false

const i18n = createI18n()

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')

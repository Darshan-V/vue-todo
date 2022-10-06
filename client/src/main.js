import Vue from 'vue'
import App from './App.vue'
import UniqueId from 'vue-unique-id'
Vue.use(UniqueId)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

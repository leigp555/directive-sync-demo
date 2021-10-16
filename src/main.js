import Vue from 'vue'
// import Demo from "./template"
import Sync from "./sync.vue"
Vue.config.productionTip = false

new Vue({
  render: h => h(Sync),
}).$mount('#app')

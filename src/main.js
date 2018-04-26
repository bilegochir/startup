import Vue from 'vue'
import App from './App.vue'
import feather from 'vue-icon'
import router from './router/index'
import VueParticles from 'vue-particles'
import Notifications from 'vue-notification'

Vue.use(Notifications)
Vue.use(VueParticles)
Vue.use(feather, 'v-icon')
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

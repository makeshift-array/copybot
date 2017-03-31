import Vue from 'vue'
import VueMaterial from 'vue-material'
import App from './src/App'
import store from './src/store'

Vue.use(VueMaterial)

Vue.material.registerTheme('default', {
  primary: 'blue',
  accent: 'red',
  warn: 'yellow'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

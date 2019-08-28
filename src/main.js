// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import NormailizeCss from 'normalize.css'
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons'
import 'xterm/dist/xterm.css'

Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.component('icon', Icon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

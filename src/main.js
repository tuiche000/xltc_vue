import Vue from 'vue'
import App from './App.vue'
import { router } from './router';
import axios from './axios'
import { Backtop, Message, Cascader } from 'element-ui';
import store from './store/index'

// element-ui
Vue.component(Backtop.name, Backtop);
Vue.component(Cascader.name, Cascader);
Vue.prototype.$message = Message;
//
Vue.config.productionTip = false
Vue.prototype.$axios = axios

const Vm = new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
window.vm = Vm

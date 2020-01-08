import Vue from 'vue'
import App from './App.vue'
import { router } from './router';
import axios from './axios'
import { Message } from 'element-ui';

// element-ui
Vue.component(Message.name, Message);
Vue.prototype.$message = Message;
//
Vue.config.productionTip = false
Vue.prototype.$axios = axios

const Vm = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
window.vm = Vm

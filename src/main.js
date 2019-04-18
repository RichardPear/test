// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router/index.router';
import store from './store/index.store';
import Mint, { Toast } from 'mint-ui';
import axios from 'axios';
import moment from 'moment';

Vue.config.productionTip = false;
Vue.use(Mint);
Vue.prototype.$http = axios;
moment.locale('zh-cn');
Vue.prototype.$moment = moment;
Vue.prototype.$Toast = Toast;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
import './assets/css/style.scss';
import './assets/css/transition.scss';

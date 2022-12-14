import Vue from 'vue';
import VueMeta from 'vue-meta';
import VCalendar from 'v-calendar';

import App from './App.vue';
import router from './router';
import store from './store';
import Toaster from 'v-toaster';
import 'v-toaster/dist/v-toaster.css';

import clickOutside from '@/directives/click-outside';
import formatDate from '@/filters/format-date';
import formatTime from '@/filters/format-time';

import './assets/styles/main.scss';

Vue.use(VueMeta);
Vue.use(VCalendar);
Vue.use(Toaster, { timeout: 5000 });
Vue.directive('click-outside', clickOutside);
Vue.filter('formatDate', formatDate);
Vue.filter('formatTime', formatTime);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

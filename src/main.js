import Vue from 'vue';
import VueMeta from 'vue-meta';
import App from './App.vue';
import router from './router';
import VCalendar from 'v-calendar';
import clickOutside from '@/directives/click-outside';

import './assets/styles/main.scss';

Vue.use(VueMeta);
Vue.use(VCalendar);
Vue.directive('click-outside', clickOutside);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

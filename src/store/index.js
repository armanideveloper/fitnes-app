import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
// import shop from './modules/shop';
import stats from './modules/stats';
// import trainings from './modules/trainings';
// import trainers from './modules/trainers';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    stats,
  },
});

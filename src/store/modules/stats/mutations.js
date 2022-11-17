import { setStorageItem } from '@/helpers/storage';
import mutationTypes from '../../types/mutation-types';

const mutations = {
  [mutationTypes.SET_STATS_DATA](state, payload) {
    setStorageItem('statsData', payload);
    state.statsData = payload;
  },
};

export default {
  mutations,
};

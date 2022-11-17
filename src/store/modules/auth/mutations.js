import { setStorageItem, clearStorage } from '@/helpers/storage';
import mutationTypes from '../../types/mutation-types';

const mutations = {
  [mutationTypes.SET_USER_DATA](state, payload) {
    setStorageItem('userData', payload);
    state.userData = payload;
  },
  [mutationTypes.CLEAR_USER_DATA](state) {
    clearStorage();
    state.userData = null;
  },
};

export default {
  mutations,
};

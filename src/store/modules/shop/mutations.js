import mutationTypes from '../../types/mutation-types';
import { setStorageItem } from '@/helpers/storage';

const mutations = {
  [mutationTypes.SET_MEMBERSHIPS](state, payload) {
    state.memberships = payload;
  },
  [mutationTypes.SET_PACKAGES](state, payload) {
    state.packages = payload;
  },
  [mutationTypes.SELECT_PLAN_FOR_BUYING](state, payload) {
    state.planForBuying = payload;
    setStorageItem('plan-for-buying', payload);
  },
  [mutationTypes.SET_START_DATE_FOR_PLAN](state, payload) {
    state.planForBuying.start_date = payload;
    setStorageItem('plan-for-buying', state.planForBuying);
  },
};

export default {
  mutations,
};

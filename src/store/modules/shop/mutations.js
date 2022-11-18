import mutationTypes from '../../types/mutation-types';

const mutations = {
  [mutationTypes.SET_MEMBERSHIPS](state, payload) {
    state.memberships = payload;
  },
  [mutationTypes.SET_PACKAGES](state, payload) {
    state.packages = payload;
  },
};

export default {
  mutations,
};

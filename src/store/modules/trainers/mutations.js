import mutationTypes from '../../types/mutation-types';

const mutations = {
  [mutationTypes.SET_TRAINERS](state, payload) {
    state.trainers = payload;
  },
};

export default {
  mutations,
};

import mutationTypes from '../../types/mutation-types';

const mutations = {
  [mutationTypes.ADD_RESERVATION](state, payload) {
    state.reservations.push(payload);
  },
  [mutationTypes.REMOVE_RESERVATION](state, payload) {
    state.reservations = state.reservations.filter(r => r.id !== payload.id);
  },
};

export default {
  mutations,
};

import mutationTypes from '../../types/mutation-types';

const mutations = {
  [mutationTypes.SET_TRAININGS_CLASSES](state, payload) {
    state.classes = payload;
  },
  [mutationTypes.SET_TRAININGS_PTS](state, payload) {
    state.personalTrainings = payload;
  },
  [mutationTypes.SET_MY_TRAININGS](state, payload) {
    state.myTrainings = payload;
  },
};

export default {
  mutations,
};

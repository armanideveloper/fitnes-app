import { setStorageItem } from '@/helpers/storage';
import mutationTypes from '../../types/mutation-types';

const mutations = {
  [mutationTypes.SET_TRAININGS_CLASSES](state, payload) {
    setStorageItem('trainingsClasses', payload);
    state.classes = payload;
  },
  [mutationTypes.SET_TRAININGS_PTS](state, payload) {
    setStorageItem('personalTrainings', payload);
    state.personalTrainings = payload;
  },
};

export default {
  mutations,
};

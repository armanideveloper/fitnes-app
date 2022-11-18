import getterTypes from '../../types/getter-types';

const getters = {
  [getterTypes.TRAININGS_CLASSES]: state => Object.values(state.classes),
  [getterTypes.TRAININGS_PTS]: state => Object.values(state.personalTrainings),
};

export default {
  getters,
};

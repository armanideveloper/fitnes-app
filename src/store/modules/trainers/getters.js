import getterTypes from '../../types/getter-types';

const getters = {
  [getterTypes.TRAINERS]: state => state.trainers,
};

export default {
  getters,
};

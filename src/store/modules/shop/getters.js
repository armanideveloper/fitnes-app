import getterTypes from '../../types/getter-types';

const getters = {
  [getterTypes.MEMBERSHIPS]: state => state.memberships,
  [getterTypes.PACKAGES]: state => state.memberships,
};

export default {
  getters,
};

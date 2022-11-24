import getterTypes from '../../types/getter-types';

const getters = {
  [getterTypes.MEMBERSHIPS]: state => state.memberships,
  [getterTypes.PACKAGES]: state => state.packages,
  [getterTypes.PACKAGES_BY_TRAINER]: (state, rootGetters) => {
    return rootGetters[getterTypes.TRAINERS]
      .map(t => {
        return {
          trainerName: t.trainer_name,
          items: state.packages.filter(p => p.pt_trainer_id === t.id),
        };
      })
      .filter(p => p.items.length);
  },
  [getterTypes.PLAN_FOR_BUYING]: state => state.planForBuying,
};

export default {
  getters,
};

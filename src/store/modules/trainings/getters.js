import getterTypes from '../../types/getter-types';
import { compareDates } from '@/helpers/dates';

const getters = {
  [getterTypes.TRAININGS_CLASSES]: state => Object.values(state.classes),
  [getterTypes.TRAININGS_PTS]: state => Object.values(state.personalTrainings),
  [getterTypes.UPCOMING_TRAININGS]: state => {
    const upcomingTrainingsArr = [...Object.values(state.classes), ...Object.values(state.personalTrainings)]
      .filter(t => compareDates(new Date(), new Date(t.date)) === 'less')
      .map(t => t.schedules)
      .flat()
      .filter(t => t.choosen === 1);

    return [...new Map(upcomingTrainingsArr.map(v => [v.id, v])).values()];
  },
};

export default {
  getters,
};

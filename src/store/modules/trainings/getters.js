import { compareDates } from '@/helpers/dates';
import getterTypes from '../../types/getter-types';

const getters = {
  [getterTypes.TRAININGS_CLASSES]: state => Object.values(state.classes),
  [getterTypes.TRAININGS_PTS]: state => Object.values(state.personalTrainings),
  [getterTypes.UPCOMING_TRAININGS]: state =>
    state.myTrainings
      .filter(t => {
        const dateComparison = compareDates(
          new Date(t.r_date),
          new Date(new Date().toISOString().split('T')[0]) // today's date without time
        );
        return (dateComparison === 'greater' || dateComparison === 'equal') && t.participated === '0';
      })
      .sort((a, b) => {
        const dateTimeA = Date.parse(`${a.r_date}T${a.time_from}`);
        const dateTimeB = Date.parse(`${b.r_date}T${b.time_from}`);

        return dateTimeB - dateTimeA;
      }),
};

export default {
  getters,
};

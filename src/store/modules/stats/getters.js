import getterTypes from '../../types/getter-types';
import { compareDates, diffInDays, getLastSunday } from '@/helpers/dates';

const getters = {
  [getterTypes.STATS_DATA]: state => state.statsData,
  [getterTypes.STATS_POINTS]: state => state.statsData?.points || 0,
  [getterTypes.STAT_ENTRIES_PER_MONTH]: state =>
    state.statsData?.checkins?.filter(c => diffInDays(new Date(), c.checkin_datetime) < 30).length || 0,
  [getterTypes.STAT_ENTRIES_PER_WEEK]: state =>
    state.statsData?.checkins?.filter(c => compareDates(getLastSunday(), c.checkin_datetime) === 'less').length || 0,
};

export default {
  getters,
};

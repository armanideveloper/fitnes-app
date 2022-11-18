<template>
  <training-schedule :trainings="trainings">
    <h2 class="schedule-title">Gym Schedule</h2>
  </training-schedule>
</template>

<script>
import { mapGetters } from 'vuex';
import TrainingSchedule from '@/components/TrainingSchedule';
import getterTypes from '@/store/types/getter-types';

export default {
  name: 'TheClasses',
  components: {
    TrainingSchedule,
  },
  computed: {
    ...mapGetters({
      trainings: getterTypes.TRAININGS_CLASSES,
    }),
  },
};
</script>

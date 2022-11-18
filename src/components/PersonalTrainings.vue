<template>
  <training-schedule :trainings="trainings">
    <h2 class="schedule-title">Trainer schedule</h2>
  </training-schedule>
</template>

<script>
import { mapGetters } from 'vuex';
import getterTypes from '@/store/types/getter-types';
import TrainingSchedule from '@/components/TrainingSchedule';

export default {
  name: 'PersonalTrainings',
  components: {
    TrainingSchedule,
  },
  computed: {
    ...mapGetters({
      trainings: getterTypes.TRAININGS_PTS,
    }),
  },
};
</script>

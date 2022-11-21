<template>
  <training-schedule :trainings="trainings">
    <h2 class="schedule-title">Gym Schedule</h2>
  </training-schedule>
</template>

<script>
import { mapGetters } from 'vuex';
import TrainingSchedule from '@/components/TrainingSchedule';
import getterTypes from '@/store/types/getter-types';
import actionTypes from '@/store/types/action-types';

export default {
  name: 'TheClasses',
  components: {
    TrainingSchedule,
  },
  computed: {
    ...mapGetters({
      user: getterTypes.USER_DATA,
      trainings: getterTypes.TRAININGS_CLASSES,
    }),
  },
  mounted() {
    if (this.trainings.length) {
      return;
    }

    this.$store.dispatch(actionTypes.LOGIN, { username: this.user.username, password: this.user.password });
  },
};
</script>

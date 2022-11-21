<template>
  <training-schedule :trainings="trainings">
    <h2 class="schedule-title">Trainer schedule</h2>
  </training-schedule>
</template>

<script>
import { mapGetters } from 'vuex';
import getterTypes from '@/store/types/getter-types';
import TrainingSchedule from '@/components/TrainingSchedule';
import actionTypes from '@/store/types/action-types';

export default {
  name: 'PersonalTrainings',
  components: {
    TrainingSchedule,
  },
  computed: {
    ...mapGetters({
      user: getterTypes.USER_DATA,
      trainings: getterTypes.TRAININGS_PTS,
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

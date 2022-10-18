<template>
  <div class="instructor-schedule">
    <div class="container">
      <training-schedule>
        <h2 class="instructor-schedule__title">Schedule</h2>
      </training-schedule>
    </div>
  </div>
</template>

<script>
import TrainingSchedule from '@/components/TrainingSchedule';

export default {
  name: 'InstructorSchedule',
  components: {
    TrainingSchedule,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars/_colors.scss';

.instructor-schedule {
  padding: 34px 0;

  &__title {
    margin-bottom: 36px;
    padding: 7px 0;
    font-weight: 500;
    font-size: 24px;
    line-height: 22px;
    text-align: center;
    background-color: $light-grey-3;
    border-radius: 8px;
  }
}
</style>

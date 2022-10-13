<template>
  <article class="schedule">
    <slot></slot>

    <inline-calendar />

    <ul class="schedule__trainings">
      <training-card v-for="(item, index) in trainings" :key="`training-item_${index}`" :training="item" />
    </ul>
  </article>
</template>

<script>
// import VueHorizontalCalendar from 'vue-horizontal-calendar';
import InlineCalendar from '@/components/InlineCalendar';
import TrainingCard from '@/components/TrainingCard';

export default {
  name: 'PersonalTrainings',
  components: {
    // VueHorizontalCalendar,
    InlineCalendar,
    TrainingCard,
  },
  data() {
    return {
      trainings: [
        {
          id: 1,
          title: 'Personal Training',
          notify: true,
          date: '02.10.2022',
          time: '07:00',
          format: '1-to-1',
          duration: '50 mins',
          place: 'ArsNova',
          isBookingAvailable: true,
        },
        {
          id: 2,
          title: 'Personal Training',
          notify: false,
          date: '02.10.2022',
          time: '07:00',
          format: '1-to-1',
          duration: '50 mins',
          place: 'ArsNova',
          isBookingAvailable: false,
          availableIn: '19h 59m',
        },
        {
          id: 3,
          title: 'Personal Training',
          notify: false,
          date: '02.10.2022',
          time: '07:00',
          format: '1-to-1',
          duration: '50 mins',
          place: 'ArsNova',
          isBookingAvailable: false,
          availableIn: '19h 59m',
        },
        {
          id: 4,
          title: 'Personal Training',
          notify: true,
          date: '02.10.2022',
          time: '07:00',
          format: '1-to-1',
          duration: '50 mins',
          place: 'ArsNova',
          isBookingAvailable: false,
          availableIn: '19h 59m',
        },
        {
          id: 5,
          title: 'Personal Training',
          notify: true,
          date: '02.10.2022',
          time: '07:00',
          format: '1-to-1',
          duration: '50 mins',
          place: 'ArsNova',
          isBookingAvailable: false,
          availableIn: '19h 59m',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars/_colors.scss';

.schedule {
}
</style>

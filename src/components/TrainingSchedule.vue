<template>
  <article class="schedule">
    <slot></slot>

    <inline-calendar @set-active-date="selectDate" />

    <ul class="schedule__trainings">
      <training-card v-for="(item, index) in trainingsFiltered" :key="`training-item_${index}`" :training="item" />
    </ul>
  </article>
</template>

<script>
import InlineCalendar from '@/components/InlineCalendar';
import TrainingCard from '@/components/TrainingCard';

export default {
  name: 'PersonalTrainings',
  components: {
    InlineCalendar,
    TrainingCard,
  },
  data() {
    return {
      selectedDate: null,
      trainings: [
        {
          id: 1,
          title: 'Personal Training',
          notify: true,
          date: '17.10.2022',
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
          date: '18.10.2022',
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
          date: '18.10.2022',
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
          date: '20.10.2022',
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
          date: '21.10.2022',
          time: '07:00',
          format: '1-to-1',
          duration: '50 mins',
          place: 'ArsNova',
          isBookingAvailable: false,
          availableIn: '19h 59m',
        },
        {
          id: 6,
          title: 'Personal Training',
          notify: true,
          date: '21.10.2022',
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
  computed: {
    trainingsFiltered() {
      return this.trainings.filter(item => {
        const itemDate = new Date(item.date.split('.').reverse().join('-'));
        const selectedDate = new Date(this.selectedDate?.date);

        if (
          itemDate.getFullYear() === selectedDate.getFullYear() &&
          itemDate.getMonth() === selectedDate.getMonth() &&
          itemDate.getDate() === selectedDate.getDate()
        ) {
          return item;
        }
      });
    },
  },
  methods: {
    selectDate(payload) {
      this.selectedDate = payload;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars/_colors.scss';

.schedule {
}
</style>

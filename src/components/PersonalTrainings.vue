<template>
  <training-schedule :trainings="trainings">
    <h2 class="schedule-title">Trainer schedule</h2>
  </training-schedule>
</template>

<script>
import TrainingSchedule from '@/components/TrainingSchedule';

export default {
  name: 'PersonalTrainings',
  components: {
    TrainingSchedule,
  },
  data: () => ({
    trainings: [
      {
        id: 1,
        title: 'Personal Training',
        notify: true,
        date: '04.11.2022',
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
        date: '07.11.2022',
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
        date: '08.11.2022',
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
        date: '08.11.2022',
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
        date: '09.11.2022',
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
        date: '09.11.2022',
        time: '07:00',
        format: '1-to-1',
        duration: '50 mins',
        place: 'ArsNova',
        isBookingAvailable: false,
        availableIn: '19h 59m',
      },
    ],
  }),
};
</script>

<template>
  <div class="bookings">
    <div class="container">
      <base-tabs :tabs="tabs" :active-tab-initial="currentComponent" @change-tab="changeTab" />

      <h2 class="bookings__title">Bookings</h2>

      <ul class="bookings__list">
        <booking-item v-for="(booking, index) in bookings" :key="`booking-item_${index}`" :booking="booking" />
      </ul>
    </div>
  </div>
</template>

<script>
import BaseTabs from '@/components/BaseTabs';
import BookingItem from '@/components/BookingItem';

export default {
  name: 'BookingsView',
  components: {
    BaseTabs,
    BookingItem,
  },
  metaInfo: {
    title: 'Bookings',
  },
  data() {
    return {
      currentComponent: 'BookingsView',
      tabs: [
        {
          title: 'Classes',
          component: 'TheClasses',
          type: 'component',
        },
        {
          title: 'PT',
          component: 'TrainingSchedule',
          type: 'component',
        },
        {
          title: 'Bookings',
          component: 'BookingsView',
          type: 'component',
        },
      ],
      bookings: [
        {
          date: '02.08.2022',
          time: '18:00',
          name: 'BodyPump',
          instructor: 'Andrei',
          status: 'Accepted',
        },
        {
          date: '02.08.2022',
          time: '18:00',
          name: 'BodyPump',
          instructor: 'Andrei',
          status: 'Participated',
        },
        {
          date: '02.08.2022',
          time: '18:00',
          name: 'BodyPump',
          instructor: 'Andrei',
          status: 'Canceled',
        },
        {
          date: '02.08.2022',
          time: '18:00',
          name: 'BodyPump',
          instructor: 'Andrei',
          status: 'No-show',
        },
      ],
    };
  },
  methods: {
    changeTab(tab) {
      this.$router.push({ name: 'Activities', params: { currentComponent: tab } });
    },
  },
};
</script>

<style lang="scss" scoped>
.bookings {
  padding: 21px 0 40px;

  .base-tabs {
    margin-bottom: 20px;
  }

  &__title {
    margin-bottom: 30px;
    font-weight: 500;
    font-size: 24px;
    line-height: 22px;
    text-align: center;
  }
}
</style>

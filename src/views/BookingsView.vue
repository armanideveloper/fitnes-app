<template>
  <div class="bookings">
    <div class="container">
      <h2 class="bookings__title">Bookings</h2>

      <ul class="bookings__list">
        <booking-item v-for="(booking, index) in bookings" :key="`booking-item_${index}`" :booking="booking" />
      </ul>
    </div>
  </div>
</template>

<script>
import BookingItem from '@/components/BookingItem';

export default {
  name: 'BookingsView',
  components: {
    BookingItem,
  },
  metaInfo: {
    title: 'Bookings',
  },
  data() {
    return {
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
};
</script>

<style lang="scss" scoped>
.bookings {
  padding: 40px 0;

  &__title {
    margin-bottom: 30px;
    font-weight: 500;
    font-size: 24px;
    line-height: 22px;
    text-align: center;
  }
}
</style>

<template>
  <article class="store-page store-workouts">
    <div class="container">
      <div class="store-page-img-wrapper">
        <img :src="require('@/assets/images/pic-training.jpg')" class="store-page-img" alt="" />
      </div>

      <h2 class="store-page-title">Events</h2>

      <store-items-list :store-items="events" />
    </div>
  </article>
</template>

<script>
import StoreItemsList from '@/components/StoreItemsList';

export default {
  name: 'StoreEventsView',
  components: {
    StoreItemsList,
  },
  metaInfo: {
    title: 'Store — Events',
  },
  data: () => ({
    events: [
      {
        id: 1,
        type: 'event',
        title: 'Bootcamp',
        subtitle: 'Ars Nova Gym',
        date: '20.07.2022',
        time: '10:00',
        price: 300,
      },
      {
        id: 2,
        type: 'event',
        title: 'Bootcamp',
        subtitle: 'Ars Nova Gym',
        date: '20.07.2022',
        time: '10:00',
        price: 400,
      },
    ],
  }),
};
</script>

<style lang="scss">
@import '@/assets/styles/shared/store-page.scss';
</style>

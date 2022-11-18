<template>
  <article class="store-page store-workouts">
    <div class="container">
      <div class="store-page-img-wrapper">
        <img :src="require('@/assets/images/pic-training.jpg')" class="store-page-img" alt="" />
      </div>

      <h2 class="store-page-title">Workouts</h2>

      <ul class="store-workouts__list">
        <training-card v-for="workout in workouts" :key="workout.id" :training="workout" />
      </ul>
    </div>
  </article>
</template>

<script>
import TrainingCard from '@/components/TrainingCard';

export default {
  name: 'StoreWorkoutsView',
  components: {
    TrainingCard,
  },
  metaInfo: {
    title: 'Store — Workouts',
  },
  data: () => ({
    workouts: [
      {
        id: 1,
        title: 'Fat Burn',
        date: '04.11.2022',
        time: '4 weeks plan',
        repeats: '3-5',
        equipment: 'Equipment used: kettlebels, bands, dumbells',
        isBookingAvailable: true,
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/shared/store-page.scss';

.store-workouts {
  &__list {
    list-style-type: none;
  }
}
</style>

<template>
  <article class="store-page store">
    <div class="container">
      <div class="store-page-img-wrapper">
        <img :src="require('@/assets/images/pic-training.jpg')" class="store-page-img" alt="" />
      </div>

      <h2 class="store-page-title">Store</h2>

      <ul class="store__links">
        <store-link v-for="link in links" :key="link.to" :link="link" />
      </ul>
    </div>
  </article>
</template>

<script>
import StoreLink from '@/components/StoreLink';

export default {
  name: 'StoreView',
  components: {
    StoreLink,
  },
  metaInfo: {
    title: ' Store',
  },
  data() {
    return {
      links: [
        { title: 'Memberships', to: 'StoreMemberships' },
        { title: 'Personal training', to: 'StorePackages' },
        { title: 'Workouts', to: 'StoreWorkouts' },
        { title: 'Events', to: 'StoreEvents' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.store {
  &__links {
    display: grid;
    grid-column-gap: 10px;
    grid-row-gap: 31px;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    grid-auto-rows: 1fr;
  }
}
</style>

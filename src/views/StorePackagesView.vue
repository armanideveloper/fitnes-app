<template>
  <div class="store-page store-packages">
    <div class="container">
      <div class="store-page-img-wrapper">
        <img :src="require('@/assets/images/pic-training.jpg')" class="store-page-img" alt="" />
      </div>

      <div class="store-packages__wrapper" v-for="(packagesSet, index) in packages" :key="`packages-set_${index}`">
        <store-items-list :store-items="packagesSet.items">{{ packagesSet.title }}</store-items-list>

        <hr v-if="index !== packages.length - 1" />
      </div>
    </div>
  </div>
</template>

<script>
import StoreItemsList from '@/components/StoreItemsList';

export default {
  name: 'StorePackages',
  components: {
    StoreItemsList,
  },
  metaInfo: {
    title: 'Store — Packages',
  },
  data() {
    return {
      packages: [
        {
          title: 'Pachete Marcus M.',
          items: [
            {
              id: 1,
              selected: true,
              type: 'package',
              title: 'PT - 12 entries',
              subtitle: '1-la-1 workout',
              price: 300,
              duration: 1,
            },
            {
              id: 2,
              selected: false,
              type: 'package',
              title: 'Pachet PT - 8 intrari',
              subtitle: 'Mealplan inclus',
              price: 400,
              duration: 1,
            },
          ],
        },
        {
          title: 'Pachete Laura M.',
          items: [
            {
              id: 1,
              selected: false,
              type: 'package',
              title: 'PT - 12 entries',
              subtitle: '1-la-1 workout',
              price: 300,
              duration: 1,
            },
            {
              id: 2,
              selected: false,
              type: 'package',
              title: 'Pachet PT - 8 intrari',
              subtitle: 'Mealplan inclus',
              price: 400,
              duration: 1,
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars/_colors.scss';

.store-packages {
  &__wrapper {
    hr {
      display: block;
      height: 3px;
      margin-bottom: 18px;
      margin-right: -22px;
      padding-right: 22px;
      background-color: $dark-blue;
    }
  }
}
</style>
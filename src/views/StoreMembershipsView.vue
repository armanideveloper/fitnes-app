<template>
  <div class="store-page store-memberships">
    <div class="container">
      <div class="store-page-img-wrapper">
        <img :src="require('@/assets/images/pic-training.jpg')" class="store-page-img" alt="" />
      </div>

      <div class="store-memberships__wrapper" v-for="(packagesSet, index) in packages" :key="`packages-set_${index}`">
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
    title: 'Store — Memberships',
  },
  data() {
    return {
      packages: [
        {
          title: 'Memberships',
          items: [
            {
              id: 1,
              selected: true,
              type: 'membership',
              title: 'Standard',
              subtitle: 'Standard fara clase incluse',
              price: 300,
              duration: 1,
            },
            {
              id: 2,
              selected: false,
              type: 'membership',
              title: 'All inclusive',
              subtitle: 'Mealplan inclus',
              price: 400,
              duration: 1,
            },
          ],
        },
        {
          title: 'Packages',
          items: [
            {
              id: 1,
              selected: false,
              type: 'package',
              title: 'Pachet 12 intrari',
              subtitle: 'Clase de grup',
              price: 180,
              duration: 1,
            },
            {
              id: 2,
              selected: false,
              type: 'package',
              title: 'Pachet 8 intrari',
              subtitle: 'Clase de grup',
              price: 120,
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
@import '@/assets/styles/shared/store-page.scss';

.store-memberships {
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

<template>
  <div class="store-memberships">
    <div class="store-memberships__wrapper" v-for="(packagesSet, index) in packages" :key="`packages-set_${index}`">
      <store-items-list :store-items="packagesSet.items">{{ packagesSet.title }}</store-items-list>

      <hr v-if="index !== packages.length - 1" />
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
              subtitle: '1-la-1 workout',
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
              title: 'PT - 12 entries',
              subtitle: '1-la-1 workout',
              price: 300,
              duration: 1,
            },
            {
              id: 2,
              selected: false,
              type: 'package',
              title: 'PT - 8 entries',
              subtitle: '1-la-1 workout',
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

.store-memberships {
  padding: 71px 0 28px;

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

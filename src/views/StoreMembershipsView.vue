<template>
  <div class="store-page store-memberships">
    <div class="container">
      <div class="store-page-img-wrapper">
        <img :src="require('@/assets/images/pic-training.jpg')" class="store-page-img" alt="" />
      </div>

      <store-items-list :store-items="packages">Packages</store-items-list>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import StoreItemsList from '@/components/StoreItemsList';
import getterTypes from '@/store/types/getter-types';
import actionTypes from '@/store/types/action-types';

export default {
  name: 'StorePackages',
  components: {
    StoreItemsList,
  },
  metaInfo: {
    title: 'Store — Memberships',
  },
  // data() {
  //   return {
  //     packages: [
  //       {
  //         title: 'Memberships',
  //         items: [
  //           {
  //             id: 1,
  //             selected: true,
  //             type: 'membership',
  //             title: 'Standard',
  //             subtitle: 'Standard fara clase incluse',
  //             price: 300,
  //             duration: 1,
  //           },
  //           {
  //             id: 2,
  //             selected: false,
  //             type: 'membership',
  //             title: 'All inclusive',
  //             subtitle: 'Mealplan inclus',
  //             price: 400,
  //             duration: 1,
  //           },
  //         ],
  //       },
  //       {
  //         title: 'Packages',
  //         items: [
  //           {
  //             id: 1,
  //             selected: false,
  //             type: 'package',
  //             title: 'Pachet 12 intrari',
  //             subtitle: 'Clase de grup',
  //             price: 180,
  //             duration: 1,
  //           },
  //           {
  //             id: 2,
  //             selected: false,
  //             type: 'package',
  //             title: 'Pachet 8 intrari',
  //             subtitle: 'Clase de grup',
  //             price: 120,
  //             duration: 1,
  //           },
  //         ],
  //       },
  //     ],
  //   };
  // },
  computed: {
    ...mapGetters({
      user: getterTypes.USER_DATA,
      packages: getterTypes.PACKAGES,
    }),
  },
  mounted() {
    if (this.packages.length) {
      return;
    }

    this.$store.dispatch(actionTypes.LOGIN, { username: this.user.username, password: this.user.password });
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

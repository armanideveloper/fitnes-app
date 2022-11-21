<template>
  <div class="store-page store-packages">
    <div class="container">
      <div class="store-page-img-wrapper">
        <img :src="require('@/assets/images/pic-training.jpg')" class="store-page-img" alt="" />
      </div>

      <div class="store-packages__wrapper" v-for="(packagesSet, index) in packages" :key="`packages-set_${index}`">
        <store-items-list :store-items="packagesSet.items">Packages {{ packagesSet.trainerName }}</store-items-list>

        <hr v-if="packages.length > 1 && index !== packages.length - 1" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import getterTypes from '@/store/types/getter-types';
import StoreItemsList from '@/components/StoreItemsList';
import actionTypes from '@/store/types/action-types';

export default {
  name: 'StorePackages',
  components: {
    StoreItemsList,
  },
  metaInfo: {
    title: 'Store — Packages',
  },
  computed: {
    ...mapGetters({
      user: getterTypes.USER_DATA,
      packages: getterTypes.PACKAGES_BY_TRAINER,
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

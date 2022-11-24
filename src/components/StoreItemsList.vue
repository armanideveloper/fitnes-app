<template>
  <section class="store-items">
    <h2 class="store-page-title"><slot /></h2>

    <div class="store-items__list">
      <store-card
        v-for="(item, index) in storeItems"
        :key="`store-item_${index}`"
        :store-item="item"
        v-on="$listeners"
      />
    </div>
  </section>
</template>

<script>
import StoreCard from '@/components/StoreCard';

export default {
  name: 'StoreItemsList',
  components: {
    StoreCard,
  },
  props: {
    storeItems: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/shared/store-page.scss';

.store-items {
  &__title {
    margin-bottom: 21px;
    font-weight: 500;
    font-size: 24px;
    line-height: 22px;
  }

  &__list {
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
    grid-auto-flow: column;
    grid-auto-columns: minmax(190px, 1fr);
    margin-right: -22px;
    margin-left: -6px;
    padding-right: 22px;
    padding-bottom: 38px;
    padding-left: 6px;
    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>

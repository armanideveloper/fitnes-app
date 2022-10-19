<template>
  <article class="store">
    <div class="container">
      <base-tabs :tabs="storeTabs" @change-tab="changeTab" :active-tab-initial="currentComponent" />

      <component :is="currentComponent" />
    </div>
  </article>
</template>

<script>
import BaseTabs from '@/components/BaseTabs';
import StorePackages from '@/components/StorePackages';

export default {
  name: 'StoreView',
  components: {
    BaseTabs,
    StorePackages,
    StoreMemberships: () => import('@/components/StoreMemberships'),
  },
  metaInfo: {
    title: ' Store',
  },
  data() {
    return {
      currentComponent: this.$route.params.currentComponent || 'StorePackages',
      storeTabs: [
        {
          title: 'Memberships',
          component: 'StoreMemberships',
          type: 'component',
        },
        {
          title: 'PT packages',
          component: 'StorePackages',
          type: 'component',
        },
      ],
    };
  },
  methods: {
    changeTab(tab) {
      this.currentComponent = tab;
    },
  },
};
</script>

<style lang="scss" scoped>
.store {
  padding: 28px 0;
}
</style>

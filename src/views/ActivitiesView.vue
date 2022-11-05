<template>
  <div class="activities">
    <div class="container">
      <base-tabs :tabs="tabs" :active-tab-initial="currentComponent" @change-tab="changeTab" />

      <component :is="currentComponent" />
    </div>
  </div>
</template>

<script>
import BaseTabs from '@/components/BaseTabs';
import TheClasses from '@/components/TheClasses';

export default {
  name: 'ActivitiesView',
  components: {
    BaseTabs,
    TheClasses,
    PersonalTrainings: () => import('@/components/PersonalTrainings.vue'),
  },
  metaInfo: {
    title: 'Activities',
  },
  data() {
    return {
      tabs: [
        {
          title: 'Classes',
          component: 'TheClasses',
          type: 'component',
        },
        {
          title: 'PT',
          component: 'PersonalTrainings',
          type: 'component',
        },
        {
          title: 'History',
          component: 'History',
          type: 'link',
        },
      ],
      currentComponent: this.$route.params.currentComponent || 'TheClasses',
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
.activities {
  padding: 21px 0 40px;
}
</style>

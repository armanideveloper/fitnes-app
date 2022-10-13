<template>
  <div class="activities">
    <div class="container">
      <base-tabs :tabs="tabs" :active-tab-initial="currentComponent" @change-tab="changeTab" />

      <component :is="currentComponent">
        <h2 class="schedule-title">Our schedule</h2>
      </component>
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
    TrainingSchedule: () => import('@/components/TrainingSchedule'),
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
          component: 'TrainingSchedule',
          type: 'component',
        },
        {
          title: 'Bookings',
          component: 'Bookings',
          type: 'link',
        },
      ],
      currentComponent: 'TheClasses',
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

.schedule-title {
  margin-top: 9px;
  margin-bottom: 18px;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
}
</style>

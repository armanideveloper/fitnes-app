<template>
  <nav class="base-tabs">
    <ul class="base-tabs__list">
      <li class="base-tabs__item" v-for="({ title, component, type }, index) in tabs" :key="`base-tab_${index}`">
        <button
          v-if="type === 'component'"
          class="base-tabs__tab"
          :class="{ active: activeTab === component }"
          @click="setActive(component)"
        >
          {{ title }}
        </button>
        <router-link v-else :to="{ name: component }" class="base-tabs__tab">{{ title }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'BaseTabs',
  props: {
    tabs: {
      type: Array,
      required: true,
      default: () => [],
    },
    activeTabInitial: {
      type: String,
    },
  },
  data() {
    return {
      activeTab: this.activeTabInitial,
    };
  },
  methods: {
    setActive(component) {
      if (component === this.activeTab) {
        return;
      }

      this.activeTab = component;
      this.$emit('change-tab', component);
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/vars/_colors.scss';

.base-tabs {
  width: 100%;
  padding: 4px;
  background-color: $light-grey-3;
  border-radius: 8px;

  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(102px, 1fr));
  }

  &__item {
    text-align: center;
  }

  &__tab {
    display: block;
    width: 100%;
    padding: 6px 0;
    color: $grey;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    border-radius: 8px;
    transition: all 0.15s ease-in-out;

    &.active {
      color: $blue-2;
      font-weight: 500;
      background-color: #fff;
      box-shadow: 0 4px 60px rgba(178, 194, 210, 0.32);
    }
  }
}
</style>

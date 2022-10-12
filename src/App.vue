<template>
  <div id="app">
    <router-view class="flex-1" />

    <the-footer v-if="!$route.meta.hideFooter" />
  </div>
</template>

<script>
import TheFooter from '@/components/TheFooter';

export default {
  components: {
    TheFooter,
  },
};
</script>

<style lang="scss"></style>

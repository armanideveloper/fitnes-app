<template>
  <section class="notifications">
    <h2 class="notifications__title">Notifications/news</h2>
  </section>
</template>

<script>
export default {
  name: 'NewsNotifications',
};
</script>

<style lang="scss" scoped>
.notifications {
  min-height: 142px;
  margin-top: 15px;
  padding: 16px 26px;
  background: #f9fafb;
  border-radius: 10px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  &__title {
    color: $dark-blue;
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
  }
}
</style>

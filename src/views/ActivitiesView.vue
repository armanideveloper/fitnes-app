<template>
  <div class="activities">
    <h1>This is Activities</h1>

    <the-bookings />
  </div>
</template>

<script>
import TheBookings from '@/components/TheBookings';
export default {
  name: 'ActivitiesView',
  components: {
    TheBookings,
  },
  metaInfo: {
    title: 'Activities',
  },
};
</script>

<style scoped></style>

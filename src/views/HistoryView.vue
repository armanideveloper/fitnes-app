<template>
  <article class="history">
    <div class="container">
      <h2 class="history__title">History</h2>

      <ul class="history__list">
        <history-item v-for="(item, index) in historyItems" :key="`history-items_${index}`" :item="item" />
      </ul>
    </div>
  </article>
</template>

<script>
import HistoryItem from '@/components/HistoryItem';

export default {
  name: 'HistoryView',
  components: {
    HistoryItem,
  },
  data() {
    return {
      historyItems: [
        { date: '02.08.2022', title: 'BodyPump', points: 2, status: 'Participated' },
        { date: '05.08.2022', title: 'Gym', points: 2, status: 'Participated' },
        { date: '06.08.2022', title: 'No-show', points: -2, status: 'No-show' },
        { date: '05.08.2022', title: 'Cancel', points: -1, status: 'Cancel' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.history {
  padding-top: 40px;

  &__title {
    margin-bottom: 19px;
    font-weight: 500;
    font-size: 24px;
    line-height: 22px;
    text-align: center;
  }
}
</style>

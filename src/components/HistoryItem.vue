<template>
  <li class="history-item" :class="`history-item--${itemColor}`">
    <p class="history-item__date">{{ item.date }}</p>

    <div class="history-item__title-time">
      <h2 class="history-item__title">{{ item.title }}</h2>
      <p class="history-item__time">{{ item.time }}</p>
    </div>

    <p v-if="item.status !== 'Accepted'" class="history-item__points">{{ item.points }} pts</p>
    <base-button v-else class="small-btn">Cancel</base-button>
  </li>
</template>

<script>
import BaseButton from '@/components/BaseButton';

export default {
  name: 'HistoryItem',
  components: { BaseButton },
  props: {
    item: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  computed: {
    itemColor() {
      if (!['Accepted', 'Participated'].includes(this.item.status)) {
        return 'red';
      }

      if (this.item.status === 'Participated') {
        return 'green';
      }

      return 'blue';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars/_colors.scss';

.history-item {
  display: grid;
  grid-template-columns: 76px 1fr 79px;
  align-items: center;
  padding: 5px 7px 5px 21px;
  color: $dark-black;
  font-size: 14px;
  line-height: 17px;
  background: #fff;
  box-shadow: 0 19px 50px rgba(219, 224, 225, 0.8);
  border-radius: 10px;

  &--blue {
    color: $blue;
  }

  &--green {
    color: $green;
  }

  &--red {
    color: $red-danger;
  }

  & + .history-item {
    margin-top: 8px;
  }

  .small-btn {
    width: 80px;
    padding: 0;
    font-size: 12px;
    line-height: 20px;
  }

  & > * {
    justify-self: center;
  }

  &__title-time {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }
}
</style>

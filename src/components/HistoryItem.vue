<template>
  <li class="history-item" :class="`history-item--${itemColor}`">
    <p class="history-item__date">{{ formattedDate }}</p>

    <div class="history-item__title-time">
      <h2 class="history-item__title">{{ item.reason }}</h2>
      <p class="history-item__time">{{ item.time }}</p>
    </div>

    <p class="history-item__points">{{ item.value }} pts</p>
    <!--    <base-button v-else class="small-btn">Cancel</base-button>-->
  </li>
</template>

<script>
// import BaseButton from '@/components/BaseButton';

export default {
  name: 'HistoryItem',
  // components: { BaseButton },
  props: {
    item: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  computed: {
    formattedDate() {
      const date = this.item.created_datetime.split(' ')[0];
      return date.split('-').reverse().join('.');
    },
    itemColor() {
      if (Number(this.item.value) < 0) {
        return 'red';
      }

      // if (this.item.status === 'Participated') {
      //   return 'green';
      // }

      return 'green';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars/_colors.scss';

.history-item {
  display: grid;
  grid-template-columns: 76px 1fr 62px;
  align-items: center;
  height: 48px;
  padding: 0 7px 0 21px;
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
    width: 100%;
    //flex-direction: column;
    justify-content: center;
    gap: 5px;
    text-align: center;
  }

  &__date {
    color: $dark-black;
  }
}
</style>

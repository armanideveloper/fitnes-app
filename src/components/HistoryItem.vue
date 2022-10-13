<template>
  <li class="history-item">
    <p class="history-item__date">{{ item.date }}</p>

    <h2 class="history-item__title" :class="`history-item__title--${titleColor}`">{{ item.title }}</h2>

    <p class="history-item__points" :class="`history-item__points--${pointsColor}`">{{ item.points }} pts</p>
  </li>
</template>

<script>
export default {
  name: 'HistoryItem',
  props: {
    item: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  computed: {
    titleColor() {
      if (!['Accepted', 'Participated'].includes(this.item.status)) {
        return 'red';
      }

      return 'blue';
    },
    pointsColor() {
      if (!['Accepted', 'Participated'].includes(this.item.status)) {
        return 'red';
      }

      if (this.item.status === 'Accepted') {
        return 'blue';
      }

      return 'green';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars/_colors.scss';

.history-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 12px 16px 21px;
  color: $dark-black;
  font-size: 14px;
  line-height: 17px;
  background: #fff;
  box-shadow: 0 19px 50px rgba(219, 224, 225, 0.8);
  border-radius: 10px;

  & + .history-item {
    margin-top: 8px;
  }

  &__title {
    &--blue {
      color: $blue;
    }

    &--red {
      color: $red-danger;
    }
  }

  &__points {
    &--green {
      color: $dark-green;
    }

    &--blue {
      color: $blue;
    }

    &--red {
      color: $red-danger;
    }
  }
}
</style>

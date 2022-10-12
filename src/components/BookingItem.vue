<template>
  <li class="booking-item">
    <div class="booking-item__info">
      <p class="booking-item__text">{{ booking.date }}</p>
      <p class="booking-item__text">{{ booking.time }}</p>
    </div>
    <div class="booking-item__info">
      <h2 class="booking-item__text booking-item__text--blue">{{ booking.name }}</h2>
      <p class="booking-item__text">cu {{ booking.instructor }}</p>
    </div>

    <p
      v-if="booking.status !== 'Accepted'"
      class="booking-item__status"
      :class="`booking-item__status--${statusColor}`"
    >
      {{ booking.status }}
    </p>
    <base-button v-else class="small-blue-btn booking-item__btn">Cancel</base-button>
  </li>
</template>

<script>
import BaseButton from '@/components/BaseButton';

export default {
  name: 'BookingItem',
  components: {
    BaseButton,
  },
  props: {
    booking: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  computed: {
    statusColor() {
      const { status } = this.booking;

      if (status === 'Accepted') {
        return null;
      }

      const colors = {
        Participated: 'blue',
        Canceled: 'red',
        'No-show': 'black',
      };

      return colors[status];
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars/_colors.scss';

.booking-item {
  display: grid;
  grid-template-columns: repeat(2, auto);
  padding: 4px 14px;
  background: #fff;
  box-shadow: 0 19px 50px rgba(219, 224, 225, 0.8);
  border-radius: 10px;

  & + .booking-item {
    margin-top: 7px;
  }

  &__info {
    text-align: center;
  }

  &__text {
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 17px;

    &--blue {
      color: $blue;
    }
  }

  &__status {
    grid-column: span 2;
    font-weight: 500;
    font-size: 12px;
    line-height: 22px;
    text-align: center;

    &--blue {
      color: $blue;
    }

    &--red {
      color: $red-danger;
    }

    &--black {
      color: #000;
    }
  }

  &__btn {
    grid-column: span 2;
    width: 80px;
    margin: 0 auto;
    padding: 0;
    font-size: 12px;
    line-height: 22px;
  }
}
</style>

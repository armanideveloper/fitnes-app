<template>
  <li class="payments-item">
    <h2 class="payments-item__title">{{ name }}</h2>

    <p class="payments-item__sum">{{ sum }}</p>

    <div
      class="payments-item__status"
      :class="paid ? 'payments-item__status--paid' : 'payments-item__status--not-paid'"
    >
      <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="3.5" cy="3" r="3" />
      </svg>
      <span class="payments-item__status-text">{{ status }} {{ paymentDate }}</span>
    </div>

    <template v-if="paid">
      <base-button class="small-btn mt-16 payments-item__btn">View Receipt</base-button>

      <base-button class="small-btn mt-16 payments-item__btn">View Contract</base-button>
    </template>
  </li>
</template>

<script>
import BaseButton from '@/components/BaseButton';

export default {
  name: 'PaymentsItem',
  components: {
    BaseButton,
  },
  props: {
    name: {
      type: String,
      required: true,
      default: '',
    },
    sum: {
      type: String,
      required: true,
      default: '',
    },
    paid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paymentDate: {
      type: String,
      required: true,
      default: '',
    },
  },
  computed: {
    status() {
      if (!this.paid) {
        return 'Not Paid';
      }

      return 'Paid';
    },
  },
};
</script>

<style lang="scss" scoped>
.payments-item {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 36px;
  padding: 11px 11px 5px 11px;
  box-shadow: 0 20px 50px rgba(219, 224, 225, 0.8);
  border-radius: 10px;

  & + .payments-item {
    margin-top: 24px;
  }

  &__title,
  &__sum {
    padding-left: 12px;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }

  &__title {
    grid-column: span 2;
    margin-bottom: 6px;
  }

  &__sum {
    align-self: center;
  }

  &__status {
    display: flex;
    align-items: center;
    gap: 4px;
    margin: 0 auto;
    padding: 2px 12px 2px 6px;
    border-radius: 16px;

    &--paid {
      background-color: $light-green-2;

      svg circle {
        fill: $green-success;
      }

      .payments-item__status-text {
        color: $green-success;
      }
    }

    &--not-paid {
      background-color: $light-red;

      svg circle {
        fill: $red-danger;
      }

      .payments-item__status-text {
        color: $red-danger;
      }
    }
  }

  &__status-text {
    font-size: 13px;
    font-weight: 500;
    line-height: 28px;
  }

  &__btn-block {
    margin-top: 16px;
  }

  &__btn {
    width: 130px;
    padding: 6px 0;
    margin-right: auto;
    margin-left: auto;
  }
}
</style>

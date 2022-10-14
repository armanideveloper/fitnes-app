<template>
  <li class="training-card">
    <main class="training-card__main">
      <div class="training-card__content">
        <div class="training-card__blue-line"></div>

        <div class="training-card__inner">
          <div class="training-card__grid">
            <h3 class="training-card__title">{{ training.title }}</h3>

            <p class="training-card__time">{{ training.time }}</p>

            <base-toggle
              :default-state="notifications"
              :id="`training-notify-${training.id}`"
              @change-toggle-val="notifications = $event"
              class="primary"
              >Notify</base-toggle
            >
          </div>

          <div class="training-card__tags">
            <span class="training-card__tag"
              ><img :src="require('@/assets/images/icons/user-sm.svg')" alt="" />{{ training.format }}</span
            >
            <span class="training-card__tag"
              ><img :src="require('@/assets/images/icons/clock-sm.svg')" alt="" />{{ training.duration }}</span
            >
            <span class="training-card__tag"
              ><img :src="require('@/assets/images/icons/marker-pin-sm.svg')" alt="" />{{ training.place }}</span
            >
          </div>
        </div>
      </div>
    </main>

    <footer class="training-card__footer">
      <base-button v-if="training.isBookingAvailable" class="small-btn training-card__book-btn">Book</base-button>
      <base-button v-else class="small-btn training-card__book-btn training-card__book-btn--disabled"
        >Booking available in {{ training.availableIn }}</base-button
      >
    </footer>
  </li>
</template>

<script>
import BaseButton from '@/components/BaseButton';
import BaseToggle from '@/components/BaseToggle';

export default {
  name: 'TrainingCard',
  components: {
    BaseToggle,
    BaseButton,
  },
  props: {
    training: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  data() {
    return {
      notifications: this.training.notify,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars/_colors.scss';

.training-card {
  background-color: #fff;
  border-radius: 12px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  & + .training-card {
    margin-top: 25px;
  }

  &__main {
    padding: 6px 14px 15px 20px;
  }

  &__content {
    display: grid;
    grid-template-columns: 4px 1fr;
    grid-column-gap: 20px;
  }

  &__blue-line {
    width: 100%;
    height: 100%;
    background-color: $blue;
    border-radius: 12px;
  }

  &__inner {
    position: relative;
    text-align: center;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr 16%;
    margin-bottom: 12px;
  }

  &__title {
    grid-column: 1;
    margin-bottom: 13px;
    color: $dark-blue-2;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.01em;
  }

  &__time {
    grid-column: 1;
    color: $dark-blue-2;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
  }

  &__tags {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 4px;
  }

  &__tag {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
    padding: 5px 0;
    color: #92959d;
    font-size: 12px;
    line-height: 15px;
    background-color: #f4f6f5;
    border-radius: 12px;
  }

  &__footer {
    padding: 8px 0;
    background: rgba(133, 133, 133, 0.06);
  }

  &__book-btn {
    min-width: 80px;
    margin: 0 auto;
    padding: 0;
    font-size: 12px;
    line-height: 20px;

    &--disabled {
      max-width: 216px;
      color: $dark-blue-2;
      background: #ffffff;
      border: 1px solid $blue;
      width: 100%;
    }
  }

  :deep() {
    .toggle {
      grid-column: 2;
      grid-row: 3 / -1;
      align-self: flex-end;
      justify-self: flex-end;
      flex-direction: column;

      &__label {
        color: #92959d;
        font-size: 9px;
        line-height: 11px;
      }
    }
  }
}
</style>

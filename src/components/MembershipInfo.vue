<template>
  <section class="membership-section">
    <router-link :to="{ name: 'Store', params: { currentComponent: 'StoreMemberships' } }" v-slot="{ navigate }" custom>
      <div class="card membership-card" @click="navigate">
        <p class="card__subtitle">Your membership</p>
        <h2 class="card__title">{{ plan.name }}</h2>
        <p class="card__value">
          {{ plan.price }}
          <span>RON</span>
        </p>
      </div>
    </router-link>

    <div class="card dates-card">
      <router-link :to="{ name: 'Store', params: { currentComponent: 'StoreMemberships' } }">
        <div class="dates-card__dates">
          <div class="dates-card__date">
            <p class="dates-card__date-title">Start date</p>
            <p class="dates-card__date-value">{{ plan.start_date | formatDate }}</p>
          </div>

          <div class="dates-card__buttons">
            <button class="dates-card__btn active">
              <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.00023 3.76858C10.3335 4.53846 10.3334 6.46296 9.00004 7.23268L3.74988 10.2635C2.4165 11.0332 0.749888 10.0709 0.749972 8.53127L0.750302 2.46909C0.750386 0.929492 2.41711 -0.0326659 3.7504 0.737207L9.00023 3.76858Z"
                  fill="#B8E1FF"
                />
              </svg>
            </button>

            <button class="dates-card__btn">
              <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.00023 3.76858C10.3335 4.53846 10.3334 6.46296 9.00004 7.23268L3.74988 10.2635C2.4165 11.0332 0.749888 10.0709 0.749972 8.53127L0.750302 2.46909C0.750386 0.929492 2.41711 -0.0326659 3.7504 0.737207L9.00023 3.76858Z"
                  fill="#B8E1FF"
                />
              </svg>
            </button>
          </div>

          <div class="dates-card__date">
            <p class="dates-card__date-title">End date</p>
            <p class="dates-card__date-value">{{ plan.end_date | formatDate }}</p>
          </div>
        </div>
      </router-link>

      <div class="dates-card__progress progress-bar">
        <div class="progress-bar__line progress-bar__line--gone" :style="{ width: `${daysGonePercent}%` }"></div>
        <div
          v-if="daysFrozenPercent"
          class="progress-bar__line progress-bar__line--frozen"
          :style="{ width: `${daysFrozenPercent}%` }"
        ></div>
      </div>

      <p class="dates-card__days-left">{{ daysLeft }} {{ daysLeftText }}</p>
    </div>

    <router-link :to="{ name: 'History' }" v-slot="{ navigate }" custom>
      <div class="card bookings-card" @click="navigate">
        <h2 class="card__title">Bookings left</h2>
        <p class="card__value">{{ plan.entries_left }}</p>
      </div>
    </router-link>
  </section>
</template>

<script>
import { diffInDays } from '@/helpers/dates';

export default {
  name: 'MembershipInfo',
  props: {
    plan: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    daysAll() {
      return diffInDays(this.plan.start_date, this.plan.end_date);
    },
    daysLeft() {
      return diffInDays(new Date(), this.plan.end_date);
    },
    daysGonePercent() {
      const daysGone = diffInDays(this.plan.start_date, new Date());
      return Math.round((daysGone / this.daysAll) * 100);
    },
    daysFrozenPercent() {
      const daysFrozen = diffInDays(this.plan.freeze_start, this.plan.freeze_end);
      return Math.round((daysFrozen / this.daysAll) * 100);
    },
    daysLeftText() {
      return this.daysLeft !== 11 && String(this.daysLeft).slice(-1) === '1' ? 'day left' : 'days left';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/shared/home-page-card.scss';

.membership-section {
  padding: 10px;
  border-radius: 10px;
  background-color: $snow-white;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.membership-card {
  padding: 8px 0 14px;
  border-bottom: 1px solid $grey-3;

  .card__title {
    margin-bottom: 13px;
  }
}

.dates-card {
  padding: 10px 0 7px;
  border-bottom: 1px solid $grey-3;

  &__dates {
    display: flex;
    justify-content: space-between;
  }

  &__date {
    text-align: center;
  }

  &__date-title,
  &__date-value {
    font-size: 9px;
    line-height: 22px;
  }

  &__buttons {
    display: flex;
    align-items: flex-start;
    gap: 6px;
    margin-top: 8px;
  }

  &__btn {
    &.active {
      svg path {
        fill: $blue;
      }
    }
  }

  &__days-left {
    font-size: 8px;
    line-height: 22px;
  }

  &__progress {
    width: 100%;
    height: 8px;
    border: 0;
    border-radius: 10px;
    background-color: $green-2;
  }
}

.bookings-card {
  padding: 12px 0;

  .card__title {
    margin-bottom: 9px;
  }
}

.progress-bar {
  display: flex;

  &__line {
    &--gone {
      background-color: $blue;
    }

    &--frozen {
      background-color: $light-grey;
    }
  }
}
</style>

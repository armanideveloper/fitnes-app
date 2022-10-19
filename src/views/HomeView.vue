<template>
  <article class="home">
    <div class="container">
      <header class="home__header">
        <button class="header-btn" @click.stop="showSettingsMenu">
          <img :src="require('@/assets/images/icons/profile.svg')" alt="profile icon" />
        </button>

        <div class="header-btn-wrapper">
          <button class="header-btn">
            <img :src="require('@/assets/images/icons/bell.svg')" alt="bell icon" />
          </button>
          <router-link :to="{ name: 'History' }" class="header-btn" v-slot="{ navigate }" custom>
            <button class="header-btn" @click="navigate">
              <img :src="require('@/assets/images/icons/calendar-check.svg')" alt="calendar icon" />
            </button>
          </router-link>
        </div>
      </header>

      <settings-menu :class="{ opened: showSettings }" @close-settings="closeSettingsMenu" />

      <section class="home__top">
        <h1 class="home__greeting">Hello {{ username }}</h1>

        <span class="home__level-title">Level</span>
        <div class="home__level-img">
          <img :src="require('@/assets/images/icons/star-level.svg')" alt="star icon" />
        </div>
      </section>

      <section class="home__stats">
        <info-card
          v-for="(stat, index) in stats"
          :key="`stat-item_${index}`"
          :text="stat.text"
          :value="stat.value"
          :time="stat.time"
          :img="stat.img"
          :link-to="stat.linkTo"
          :class="stat.colorClass ? `info-card--${stat.colorClass}` : ''"
        />
      </section>

      <section class="home__next-booking">
        <div class="card next-booking-card">
          <p class="card__subtitle">Next booking</p>
          <h2 class="card__title">Personal training</h2>
          <p class="card__time">20:00</p>

          <base-button class="small-btn">Cancel</base-button>
        </div>
        <div class="card checkin-card">
          <template v-if="!bookingCheckedIn"
            ><h2 class="checkin-card__title">Check-in</h2>

            <button class="checkin-card__btn" @click="checkIn">
              <img :src="require('@/assets/images/icons/arrow-up.svg')" alt="" />
            </button>
          </template>

          <template v-else>
            <h2 class="checkin-card__title">Checked-in</h2>

            <button class="checkin-card__btn checkin-card__btn--checked">
              <img :src="require('@/assets/images/icons/checkmark-white.svg')" alt="" />
            </button>

            <p class="checkin-card__time">check in at {{ checkedInTime }}</p>
          </template>
        </div>
      </section>

      <section class="home__info">
        <router-link :to="{ name: 'Store', params: { currentComponent: 'StoreMemberships' } }" v-slot="{ navigate }">
          <div class="card membership-card" @click="navigate">
            <p class="card__subtitle">Membership</p>
            <h2 class="card__title">Standard</h2>
            <p class="card__value">150 <span>RON</span></p>
          </div>
        </router-link>
        <router-link :to="{ name: 'History' }" v-slot="{ navigate }">
          <div class="card bookings-card" @click="navigate">
            <h2 class="card__title">Bookings left</h2>
            <p class="card__value">150</p>
          </div>
        </router-link>
        <div class="card dates-card">
          <router-link :to="{ name: 'Store', params: { currentComponent: 'StoreMemberships' } }">
            <div class="dates-card__dates">
              <div class="dates-card__date">
                <p class="dates-card__date-title">Start date</p>
                <p class="dates-card__date-value">01 September</p>
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
                <p class="dates-card__date-value">30 September</p>
              </div>
            </div>
          </router-link>

          <p class="dates-card__days-left">28 days left</p>

          <progress class="dates-card__progress" :value="progress" max="100"></progress>
        </div>
      </section>
    </div>
  </article>
</template>

<script>
import BaseButton from '@/components/BaseButton';
import SettingsMenu from '@/components/SettingsMenu';
import InfoCard from '@/components/InfoCard';

export default {
  name: 'HomeView',
  components: {
    BaseButton,
    SettingsMenu,
    InfoCard,
  },
  metaInfo: {
    title: 'Home Page',
  },
  data() {
    return {
      username: 'John',
      showSettings: false,
      stats: [
        {
          img: 'coins',
          value: '24',
          text: 'points',
          colorClass: 'dark-blue',
          linkTo: 'History',
        },
        {
          img: 'right-square',
          value: '20',
          text: 'Entries',
          time: 'last 30 days',
          colorClass: 'blue',
          linkTo: 'History',
        },
        {
          img: 'target',
          value: '5 / 5',
          text: 'Weekly Goal',
        },
      ],
      bookingCheckedIn: false,
      checkedInTime: null,
      progress: 76,
    };
  },
  methods: {
    showSettingsMenu() {
      this.showSettings = true;
      document.body.classList.add('scroll-lock');
    },
    closeSettingsMenu() {
      this.showSettings = false;
      document.body.classList.remove('scroll-lock');
    },
    checkIn() {
      function padTo2Digits(num) {
        return String(num).padStart(2, '0');
      }
      const date = new Date();
      const timeStr = padTo2Digits(date.getHours()) + ':' + padTo2Digits(date.getMinutes());

      this.bookingCheckedIn = true;
      this.checkedInTime = timeStr;
    },
  },
  destroyed() {
    if (document.body.classList.contains('scroll-lock')) {
      document.body.classList.remove('scroll-lock');
    }
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars/_colors.scss';
@import '@/assets/styles/vars/_mixins.scss';

.home {
  padding-top: 42px;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
  }

  &__top {
    display: grid;
    grid-template-columns: 1fr 38px;
    grid-template-rows: 22px auto;
    align-items: center;
    margin-bottom: 48px;
    padding-left: 12px;
    padding-right: 38px;
  }

  &__greeting,
  &__level-img {
    grid-row: 2;
  }

  &__level-title {
    grid-column: 2;
    color: $grey-3;
    font-size: 15px;
    line-height: 22px;
  }

  &__greeting {
    font-size: 24px;
    font-weight: 600;
  }

  &__level-img {
    display: grid;
    place-items: center;
    width: 38px;
    height: 34px;
    background-color: $light-green;
    border-radius: 10px;
    box-shadow: inset 0 0 50px rgba(237, 237, 237, 0.25);
  }

  &__stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 25px;
    margin-bottom: 30px;
  }

  &__next-booking {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 13px;
    margin-bottom: 28px;
  }

  &__info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}

.header-btn-wrapper {
  display: flex;

  .header-btn {
    &:first-of-type {
      border-radius: 10px 0 0 10px;
    }

    &:last-of-type {
      border-radius: 0 10px 10px 0;
    }
  }
}

.header-btn {
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 10px;
  box-shadow: 0 0 50px rgba(153, 153, 153, 0.25);
}

.card {
  @include base-card-mixin;
  text-align: center;

  &.next-booking-card {
    padding: 5px 2px 8px;

    .card__title {
      margin-bottom: 3px;
    }

    .card__time {
      margin-bottom: 5px;
    }

    .small-btn {
      width: 80px;
      margin: 0 auto;
      padding: 0;
      font-size: 12px;
      line-height: 22px;
    }
  }

  &.bookings-card,
  &.membership-card {
    position: relative;
    z-index: 2;
  }

  &.membership-card {
    padding: 23px 0 34px;

    .card__title {
      margin-bottom: 13px;
    }
  }

  &.bookings-card {
    padding-top: 38px;

    .card__title {
      margin-bottom: 9px;
    }
  }

  &.dates-card {
    padding: 25px 9px 22px;
    grid-column: span 2;
    transform: translateY(-16px);
  }

  &__subtitle {
    color: $grey-3;
    font-size: 15px;
    line-height: 22px;
  }

  &__title {
    color: $dark-blue;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
  }

  &__time {
    color: $dark-blue;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
  }

  &__value {
    color: $blue;
    font-weight: 500;
    font-size: 24px;
    line-height: 22px;

    span {
      font-size: 12px;
    }
  }
}

.checkin-card {
  padding: 20px 9px 0 9px;
  background-color: $blue;

  &__title {
    margin-bottom: 8px;
    color: #fff;
    font-size: 24px;
    line-height: 22px;
  }

  &__btn {
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 50%;

    &--checked {
      background-color: $green;
    }
  }

  &__time {
    color: #fff;
    font-weight: 300;
    font-size: 8px;
    line-height: 20px;
  }
}

.dates-card {
  &__dates {
    display: flex;
    justify-content: space-between;
  }

  &__date {
    text-align: center;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }

  &__date-title {
    color: $grey-3;
    font-size: 15px;
    line-height: 22px;
  }

  &__date-value {
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
  }

  &__buttons {
    display: flex;
    align-items: flex-start;
    gap: 6px;
    margin-top: 8px;
  }

  &__btn {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    &.active {
      svg path {
        fill: $blue;
      }
    }
  }

  &__days-left {
    font-size: 14px;
    line-height: 22px;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }

  &__progress {
    width: 100%;
    height: 8px;
    border: 0;
    border-radius: 10px;
    background-color: $green-2;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    &::-webkit-progress-bar {
      width: 100%;
      height: 8px;
      border: 0;
      border-radius: 10px;
      background-color: $green-2;
    }

    &::-webkit-progress-value {
      height: 8px;
      background-color: $blue;
      border: 0;
      border-radius: 10px;
    }

    &::-moz-progress-bar {
      width: 100%;
      height: 8px;
      border: 0;
      border-radius: 10px;
      background-color: $green-2;
    }
  }
}
</style>

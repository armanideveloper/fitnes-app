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
        <h1 class="home__greeting">Hello {{ user?.name }}</h1>

        <span class="home__level-title">Level</span>
        <div class="home__level-img">
          <img :src="require('@/assets/images/icons/star-level.svg')" alt="star icon" />
        </div>
      </section>

      <section class="home__stats">
        <article class="info-card info-card--dark-blue">
          <router-link class="info-card__link" :to="{ name: 'History' }">
            <div class="info-card__img-wrapper">
              <img class="info-card__img" :src="require(`@/assets/images/icons/coins.svg`)" alt="" />
            </div>

            <h2 class="info-card__value">{{ user?.member.reward_points }}</h2>

            <p class="info-card__text">Points</p>
          </router-link>
        </article>

        <article class="info-card info-card--blue">
          <router-link class="info-card__link" :to="{ name: 'History' }">
            <div class="info-card__img-wrapper">
              <img class="info-card__img" :src="require(`@/assets/images/icons/right-square.svg`)" alt="" />
            </div>

            <h2 class="info-card__value">{{ entries }}</h2>

            <p class="info-card__text">Entries</p>

            <span class="info-card__time">last 30 days</span>
          </router-link>
        </article>

        <article class="info-card" @click="openSuccessSheet">
          <div class="info-card__img-wrapper">
            <img class="info-card__img" :src="require(`@/assets/images/icons/target.svg`)" alt="" />
          </div>

          <h2 class="info-card__value">{{ weeklyEntries }}/{{ weeklyGoal }}</h2>

          <p class="info-card__text">Weekly goal</p>
        </article>
      </section>

      <section class="home__cards">
        <membership-info class="full-height-card" :plan="plan" />

        <div class="card checkin-card">
          <h2 class="checkin-card__title">Check-in</h2>

          <button class="checkin-card__btn" @click="checkIn">
            <img :src="require('@/assets/images/icons/arrow-up.svg')" alt="" />
          </button>

          <template v-if="checkinSuccess">
            <h2 class="checkin-card__title">Checked-in</h2>

            <button class="checkin-card__btn checkin-card__btn--checked">
              <img :src="require('@/assets/images/icons/checkmark-white.svg')" alt="" />
            </button>

            <p class="checkin-card__time">check in at {{ checkinTime }}</p>
          </template>
        </div>

        <div class="card next-booking-card">
          <p class="card__subtitle">Next booking</p>

          <template v-if="upcomingBooking">
            <h2 class="card__title">Personal training</h2>

            <p v-if="upcomingBooking" class="card__time">
              {{ upcomingBookingDate | formatDate }} {{ upcomingBookingTime | formatTime }}
            </p>

            <base-button @click.native="cancelReservation('cancel_reservation')" class="small-btn">Cancel</base-button>
          </template>
          <template v-else>
            <h2 class="card__title">You have no upcoming trainings yet</h2>
          </template>
        </div>
      </section>

      <news-notifications />

      <vue-bottom-sheet
        ref="successBottomSheet"
        max-width="800px"
        max-height="494px"
        class="success-sheet"
        effect="fx-fadein-scale"
        :background-scrollable="false"
        overlay-color="transparent"
        is-full-screen
      >
        <img class="success-sheet__img" :src="require('@/assets/images/icons/nice-done.svg')" alt="" />

        <h2 class="success-sheet__title">
          Nice one!
          <img :src="require('@/assets/images/congrats.png')" alt="" />
        </h2>

        <p class="success-sheet__text">You're done for this week. Keep up the good work</p>

        <base-button class="success-sheet__btn small-btn" @click.native="closeSuccessSheet">Dismiss</base-button>
      </vue-bottom-sheet>
    </div>
  </article>
</template>

<script>
import { mapGetters } from 'vuex';
import actionTypes from '@/store/types/action-types';
import getterTypes from '@/store/types/getter-types';
import VueBottomSheet from '@webzlodimir/vue-bottom-sheet';
import BaseButton from '@/components/BaseButton';
import MembershipInfo from '@/components/MembershipInfo';
import NewsNotifications from '@/components/NewsNotifications';
import SettingsMenu from '@/components/SettingsMenu';

export default {
  name: 'HomeView',
  components: {
    VueBottomSheet,
    BaseButton,
    MembershipInfo,
    NewsNotifications,
    SettingsMenu,
  },
  metaInfo: {
    title: 'Home Page',
  },
  data() {
    return {
      showSettings: false,
      weeklyGoal: 5,
      scanQr: false,
      checkinSuccess: false,
      checkinTime: null,
    };
  },
  computed: {
    ...mapGetters({
      user: getterTypes.USER_DATA,
      statsData: getterTypes.STATS_DATA,
      entries: getterTypes.STAT_ENTRIES_PER_MONTH,
      weeklyEntries: getterTypes.STAT_ENTRIES_PER_WEEK,
      upcomingTrainings: getterTypes.UPCOMING_TRAININGS,
    }),
    upcomingBooking() {
      return this.upcomingTrainings[0];
    },
    upcomingBookingDate() {
      return this.upcomingBooking?.date_from;
    },
    upcomingBookingTime() {
      return this.upcomingBooking?.time_from;
    },
    plan() {
      return {
        ...this.user.plan,
        start_date: this.user.registration.start_date,
        end_date: this.user.registration.end_date,
        freeze_start: this.user.registration.freeze_start,
        freeze_end: this.user.registration.freeze_end,
      };
    },
  },
  mounted() {
    if (!this.statsData) {
      return;
    }

    this.$store.dispatch(actionTypes.LOGIN, { username: this.user.username, password: this.user.password });
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
    cancelReservation() {
      this.$store
        .dispatch(actionTypes.TOGGLE_RESERVATION, {
          action: 'cancel_reservation',
          date: this.upcomingBookingDate,
          reservation: this.upcomingBooking.id,
          user: this.user.id,
          member: this.user.member.id,
          registration: this.user.registration.id,
        })
        .then(response => {
          if (response.status === 'success') {
            this.$toaster.success(response.message);
          } else {
            this.$toaster.error(response.message);
          }
        });
    },
    checkIn() {
      this.$store
        .dispatch(actionTypes.CHECK_IN, {
          action: 'checkin',
          type: '1',
          user: this.user.id,
          member: this.user.member.id,
          location: '7',
          registration: this.user.registration.id,
        })
        .then(response => {
          if (response.status === 'success') {
            this.checkinSuccess = true;
            this.checkinTime = response.dt.split(' ')[1];
          } else {
            this.$toaster.error(response.message);
          }
        });
    },
    openSuccessSheet() {
      if (this.weeklyEntries < this.weeklyGoal) {
        return false;
      }

      this.$refs.successBottomSheet.open();
    },
    closeSuccessSheet() {
      this.$refs.successBottomSheet.close();
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
@import '@/assets/styles/shared/home-page-card.scss';

.home {
  padding: 42px 0;

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
    font-weight: 500;
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

  &__cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 110px 1fr;
    margin-bottom: 28px;

    .full-height-card {
      grid-row: span 2;
    }
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

.info-card {
  @include base-card-mixin;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 4px 4px;
  color: $green;
  text-align: center;

  &--dark-blue {
    color: #fff;
    background-color: $dark-blue;

    .info-card__img-wrapper {
      background-color: rgba(217, 217, 217, 0.2);
    }
  }

  &--blue {
    color: #fff;
    background-color: $blue;

    .info-card__img-wrapper {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }

  &__link {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__img-wrapper {
    display: grid;
    place-items: center;
    width: 35px;
    height: 35px;
    margin-bottom: 8px;
    border-radius: 50%;
  }

  &__value {
    margin-bottom: 5px;
    font-size: 24px;
    font-weight: 500;
    line-height: 22px;
  }

  &__text {
    font-size: 14px;
    font-weight: 300;
    text-align: center;
  }

  &__time {
    font-weight: 300;
    font-size: 8px;
  }
}

.card {
  &.next-booking-card {
    @include base-card-mixin;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
}

.checkin-card {
  @include base-card-mixin;
  padding: 20px 8px 0;
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

.success-sheet {
  @include bottom-sheet;

  &__img {
    width: 176px;
    height: 176px;
    margin-bottom: 20px;
    object-fit: cover;
  }

  &__title {
    position: relative;
    margin-bottom: 12px;
    font-size: 30px;
    line-height: 45px;

    & > img {
      position: absolute;
      top: 50%;
      transform: translate(19px, -50%);
    }
  }

  &__text {
    max-width: 232px;
    margin: 0 auto 36px;
    font-size: 18px;
    line-height: 27px;
  }

  &__btn {
    width: 101px;
    margin: 0 auto;
    padding: 3px 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }
}
</style>

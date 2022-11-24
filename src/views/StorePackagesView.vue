<template>
  <div class="store-page store-packages">
    <div class="container">
      <div class="store-page-img-wrapper">
        <img :src="require('@/assets/images/pic-training.jpg')" class="store-page-img" alt="" />
      </div>

      <div class="store-packages__wrapper" v-for="(packagesSet, index) in packages" :key="`packages-set_${index}`">
        <store-items-list :store-items="packagesSet.items" @open-calendar="openCalendar">
          Packages {{ packagesSet.trainerName }}
        </store-items-list>

        <hr v-if="packages.length > 1 && index !== packages.length - 1" />
      </div>
    </div>

    <vue-bottom-sheet
      ref="calendarBottomSheet"
      max-width="800px"
      max-height="315px"
      class="calendar-sheet"
      effect="fx-fadein-scale"
      :background-scrollable="false"
      overlay-color="transparent"
      is-full-screen
    >
      <v-date-picker
        v-if="!isRangeCalendar"
        v-model="selectedDate"
        ref="calendar"
        class="store-calendar"
        :masks="calendarMasks"
        :min-date="new Date()"
        locale="en-US"
        is-expanded
      >
        <button class="vc-btn vc-btn--prev" slot="header-left-button" @click="moveToMonth(-1)">
          <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.5 15C8.5 15 1.5 10.856 1.5 8C1.5 5.145 8.5 1 8.5 1"
              stroke="#0080FF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button class="vc-btn vc-btn--next" slot="header-right-button" @click="moveToMonth(1)">
          <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.5 0.999998C1.5 0.999998 8.5 5.144 8.5 8C8.5 10.855 1.5 15 1.5 15"
              stroke="#0080FF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </v-date-picker>
      <v-date-picker
        v-else
        v-model="range"
        ref="calendar"
        class="store-calendar"
        :masks="calendarMasks"
        :min-date="new Date()"
        locale="en-US"
        is-expanded
        is-range
      >
        <button class="vc-btn vc-btn--prev" slot="header-left-button" @click="moveToMonth(-1)">
          <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.5 15C8.5 15 1.5 10.856 1.5 8C1.5 5.145 8.5 1 8.5 1"
              stroke="#0080FF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button class="vc-btn vc-btn--next" slot="header-right-button" @click="moveToMonth(1)">
          <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.5 0.999998C1.5 0.999998 8.5 5.144 8.5 8C8.5 10.855 1.5 15 1.5 15"
              stroke="#0080FF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </v-date-picker>
    </vue-bottom-sheet>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import actionTypes from '@/store/types/action-types';
import getterTypes from '@/store/types/getter-types';
import membershipsPackages from '@/mixins/memberships-packages';

export default {
  name: 'StorePackages',
  mixins: [membershipsPackages],
  metaInfo: {
    title: 'Store — Packages',
  },
  computed: {
    ...mapGetters({
      user: getterTypes.USER_DATA,
      packages: getterTypes.PACKAGES_BY_TRAINER,
    }),
  },
  mounted() {
    if (this.packages.length) {
      return;
    }

    this.$store.dispatch(actionTypes.LOGIN, { username: this.user.username, password: this.user.password });
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/shared/store-page.scss';

.store-packages {
  &__wrapper {
    hr {
      display: block;
      height: 3px;
      margin-bottom: 18px;
      margin-right: -22px;
      padding-right: 22px;
      background-color: $dark-blue;
    }
  }
}

.calendar-sheet {
  @include bottom-sheet;

  :deep() {
    .bottom-sheet__pan {
      padding-bottom: 15px;
    }

    .bottom-sheet__card {
      box-shadow: 0 0 5px 5px rgb(0 0 0 / 25%);
    }
  }
}

.store-calendar {
  @include calendar-mixin;
  margin-bottom: 0;
}
</style>

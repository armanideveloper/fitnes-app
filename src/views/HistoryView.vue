<template>
  <article class="history">
    <div class="container">
      <h2 class="history__title">History</h2>

      <v-calendar
        v-if="pointsItems"
        ref="calendar"
        class="history__calendar"
        :masks="calendarMasks"
        :attributes="attributes"
        locale="en-US"
        is-expanded
        @update:from-page="currentDate = $event.date"
        @update:to-page="currentDate = new Date($event.year, $event.month, 0)"
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
      </v-calendar>

      <ul v-if="historyItems" class="history__list">
        <history-item v-for="(item, index) in historyItems" :key="`history-items_${index}`" :item="item" />
      </ul>
    </div>
  </article>
</template>

<script>
import { mapGetters } from 'vuex';
import actionTypes from '@/store/types/action-types';
import getterTypes from '@/store/types/getter-types';
import { checkSameMonth } from '@/helpers/dates';
import HistoryItem from '@/components/HistoryItem';

export default {
  name: 'HistoryView',
  components: {
    HistoryItem,
  },
  metaInfo: {
    title: 'History',
  },
  data() {
    return {
      calendarMasks: {
        weekdays: 'WWW',
      },
      currentDate: null,
    };
  },
  computed: {
    ...mapGetters({
      user: getterTypes.USER_DATA,
      pointsItems: getterTypes.STATS_POINTS,
      upcomingItems: getterTypes.UPCOMING_TRAININGS,
    }),
    upcomingItemsReversed() {
      return this.upcomingItems.slice(0).reverse();
    },
    historyItems() {
      return (
        this.pointsItems.length &&
        [...this.upcomingItemsReversed, ...this.pointsItems].filter(
          item => checkSameMonth(item.created_datetime || item.c_date_time_dt, this.currentDate) === true
        )
      );
    },
    attributes() {
      return [
        ...this.pointsItems?.map((item, index) => ({
          dates: item.created_datetime.split(' ')[0],
          ...(Number(item.value) > 0 && {
            highlight: {
              color: 'green',
              contentClass: 'green',
            },
          }),
          ...(Number(item.value) < 0 &&
            index < 3 && {
              dot: {
                color: 'red',
                class: 'red',
              },
            }),
          popover: {
            label: item.reason,
            visibility: 'click',
            hideIndicator: true,
          },
          customData: item,
        })),
        ...this.upcomingItems?.map(item => ({
          dot: '#0094ff',
          dates: new Date(item.date_from),
          popover: {
            label: item.gs_tags,
            visibility: 'click',
            hideIndicator: true,
          },
        })),
        {
          dates: new Date(),
          highlight: {
            contentClass: 'grey',
          },
        },
      ];
    },
  },
  mounted() {
    if (!this.pointsItems.length || !this.upcomingItems.length) {
      this.$store.dispatch(actionTypes.LOGIN, { username: this.user.username, password: this.user.password });
    }
  },
  methods: {
    async moveToMonth(month) {
      const calendar = this.$refs.calendar;
      await calendar.move({ month: month });
    },
  },
};
</script>

<style lang="scss" scoped>
.history {
  padding: 40px 0;

  &__title {
    margin-bottom: 19px;
    font-weight: 500;
    font-size: 24px;
    line-height: 22px;
    text-align: center;
  }

  &__calendar {
    font-family: 'Poppins', sans-serif;
    margin-bottom: 32px;
    border-radius: 10px;
    border: none;
    box-shadow: 0 10px 60px rgba(178, 194, 210, 0.3);

    :deep() {
      .vc-header {
        padding: 13px 12px;
      }

      .vc-arrows-container {
        padding: 13px 12px;
      }

      .vc-arrow {
        width: 24px;
        height: 24px;

        &:hover {
          background-color: unset;
        }
      }

      .vc-btn {
        display: grid;
        place-items: center;
        width: 100%;
        height: 100%;
      }

      .vc-title {
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
      }

      .vc-weekday,
      .vc-day-content {
        color: $grey-3;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0.02em;
      }

      .vc-weekday {
        line-height: 17px;
      }

      .vc-day-content {
        line-height: 21px;

        &.green {
          color: #fff;
          background-color: $green;
        }

        &.grey {
          background-color: $grey-100;
        }
      }

      .vc-dot {
        background-color: $blue !important;

        &.red {
          background-color: $red-danger !important;
        }
      }
    }
  }
}
</style>

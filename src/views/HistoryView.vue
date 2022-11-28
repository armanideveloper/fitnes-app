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
import { checkSameMonth, compareDates } from '@/helpers/dates';
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
    historyItems() {
      return (
        this.pointsItems.length &&
        [...this.upcomingItems, ...this.pointsItems].filter(item => {
          if (item.created_datetime) {
            return checkSameMonth(item.created_datetime, this.currentDate);
          }

          return checkSameMonth(item.r_date, this.currentDate);
        })
      );
    },
    attributes() {
      const pointsItems = this.pointsItems.map((item, index, array) => {
        const itemDate = item.created_datetime.split(' ')[0];
        let dateIsUsed;

        if (index === 0) {
          dateIsUsed = false;
        }

        if (index > 0) {
          dateIsUsed = compareDates(itemDate, array[index - 1].created_datetime.split(' ')[0]) === 'equal';
        }

        return {
          ...item,
          dateIsUsed,
        };
      });

      const upcomingItems = this.upcomingItems.map((item, index, array) => {
        const itemDate = item.r_date;
        let dateIsUsed;

        if (index === 0) {
          dateIsUsed = false;
        }

        if (index > 0) {
          dateIsUsed = compareDates(itemDate, array[index - 1].r_date) === 'equal';
        }

        return {
          ...item,
          dateIsUsed,
        };
      });

      return [
        ...pointsItems.map(item => ({
          dates: item.created_datetime.split(' ')[0],
          ...(Number(item.value) > 0 && {
            highlight: {
              color: 'green',
              contentClass: 'green',
            },
          }),
          ...(Number(item.value) < 0 &&
            !item.dateIsUsed && {
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
        })),
        ...upcomingItems.map(item => ({
          ...(!item.dateIsUsed && { dot: '#0094ff' }),
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
    @include calendar-mixin;
  }
}
</style>

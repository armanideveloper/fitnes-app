<template>
  <article class="history">
    <div class="container">
      <h2 class="history__title">History</h2>

      <v-calendar class="history__calendar" :masks="calendarMasks" :attributes="attributes" is-expanded>
        <button
          class="vc-btn vc-btn--prev"
          slot="header-left-button"
          slot-scope="{ page }"
          @click="page.movePrevMonth()"
        >
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
        <button
          class="vc-btn vc-btn--next"
          slot="header-right-button"
          slot-scope="{ page }"
          @click="page.moveNextMonth()"
        >
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

      <ul class="history__list">
        <history-item v-for="(item, index) in historyItems" :key="`history-items_${index}`" :item="item" />
      </ul>
    </div>
  </article>
</template>

<script>
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
      historyItems: [
        { date: '02.10.2022', title: 'BodyPump', points: 2, status: 'Participated' },
        { date: '05.10.2022', title: 'Gym', points: 2, status: 'Participated' },
        { date: '06.10.2022', title: 'No-show', points: -2, status: 'No-show' },
        { date: '07.10.2022', title: 'Cancel', points: -1, status: 'Cancel' },
        { date: '29.10.2022', title: 'BodyPump', points: 0, status: 'Accepted' },
      ],
      calendarMasks: {
        weekdays: 'WWW',
      },
    };
  },
  computed: {
    doneEventsAttrs() {
      return {
        highlight: {
          contentClass: 'blue',
        },
        dates: this.historyItems
          .filter(item => item.status === 'Participated')
          .map(item => {
            const [day, month, year] = item.date.split('.');
            return new Date(+year, month - 1, +day);
          }),
      };
    },
    cancelledEventsAttrs() {
      return {
        dot: {
          class: 'red',
        },
        dates: this.historyItems
          .filter(item => ['Cancel', 'No-show'].includes(item.status))
          .map(item => {
            const [day, month, year] = item.date.split('.');
            return new Date(+year, month - 1, +day);
          }),
      };
    },
    acceptedEventsAttrs() {
      return {
        dot: '#0094ff',
        dates: this.historyItems
          .filter(item => item.status === 'Accepted')
          .map(item => {
            const [day, month, year] = item.date.split('.');
            return new Date(+year, month - 1, +day);
          }),
      };
    },
    attributes() {
      return [this.doneEventsAttrs, this.cancelledEventsAttrs, this.acceptedEventsAttrs];
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars/_colors.scss';

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

        &.blue {
          color: #fff;
          background-color: $blue;
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

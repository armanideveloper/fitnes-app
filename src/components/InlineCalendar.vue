<template>
  <div class="inline-calendar">
    <ul class="inline-calendar__dates" ref="datesWrapper">
      <li
        v-for="(date, index) in datesReadable"
        :key="`date-item_${index}`"
        class="inline-calendar__date date-item"
        :class="{ active: date.id === selectedDate }"
        @click="setActiveDate(date)"
      >
        <p class="date-item__weekday">{{ date.weekday }}</p>

        <h2 class="date-item__day">{{ date.day }}</h2>
      </li>
      <base-observer
        class="inline-calendar__date date-item"
        @intersect="getDatesInRange(maxDate, daysRange, true)"
        :options="{ threshold: 0.01 }"
      />
    </ul>
  </div>
</template>

<script>
import BaseObserver from '@/components/BaseObserver';

export default {
  name: 'InlineCalendar',
  components: {
    BaseObserver,
  },
  data() {
    return {
      today: new Date(),
      dates: [],
      selectedDate: null,
      maxDate: new Date(),
      daysRange: 7,
    };
  },
  created() {
    this.getDatesInRange(this.today, this.daysRange);
  },
  computed: {
    datesReadable() {
      return this.dates.map((date, index) => {
        return {
          id: index + 1,
          date,
          weekday: new Date(date).toLocaleDateString('en-US', { weekday: 'short' }),
          day: new Date(date).getDate(),
        };
      });
    },
  },
  methods: {
    getDatesInRange(startDate, days, excludeFirstDate = false) {
      const date = new Date(startDate.getTime());

      if (excludeFirstDate) {
        date.setDate(date.getDate() + 1);
      }

      const dateCopy = new Date(date.getTime());
      const endDate = new Date(dateCopy.setDate(dateCopy.getDate() + days));

      const dates = [];

      while (date <= endDate) {
        dates.push(new Date(date));
        date.setDate(date.getDate() + 1);
      }

      this.dates = this.dates.length ? [...this.dates, ...dates] : dates;
      this.maxDate = dates[dates.length - 1];
      this.setActiveDate(this.datesReadable[0]);
    },
    setActiveDate(date) {
      this.selectedDate = date.id;
      this.$emit('set-active-date', date);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars/_colors.scss';

.inline-calendar {
  display: flex;
  margin-bottom: 8px;

  &__dates {
    display: flex;
    gap: 10px;
    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__date {
    padding: 15px;
    text-align: center;
    background-color: #fff;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.01);
    border-radius: 8px;

    &.active {
      color: #fff;
      background-color: $blue;
    }
  }
}

.date-item {
  &__weekday {
    margin-bottom: 10px;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
  }

  &__day {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
  }
}
</style>

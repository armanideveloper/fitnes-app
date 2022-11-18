<template>
  <article class="schedule">
    <slot></slot>

    <inline-calendar @set-active-date="selectDate" />

    <ul class="schedule__trainings">
      <training-card v-for="(item, index) in trainingsFiltered" :key="`training-item_${index}`" :training="item" />
    </ul>
  </article>
</template>

<script>
import InlineCalendar from '@/components/InlineCalendar';
import TrainingCard from '@/components/TrainingCard';

export default {
  name: 'TrainingSchedule',
  components: {
    InlineCalendar,
    TrainingCard,
  },
  props: {
    trainings: {
      type: Array,
      required: true,
      default: () => {},
    },
  },
  data() {
    return {
      selectedDate: null,
    };
  },
  computed: {
    trainingsFiltered() {
      const currentDayTrainings = this.trainings?.filter(item => {
        const itemDate = new Date(item.date);
        const selectedDate = new Date(this.selectedDate?.date);

        if (
          itemDate.getFullYear() === selectedDate.getFullYear() &&
          itemDate.getMonth() === selectedDate.getMonth() &&
          itemDate.getDate() === selectedDate.getDate()
        ) {
          return item;
        }
      })[0];

      return currentDayTrainings?.schedules;
    },
  },
  methods: {
    selectDate(payload) {
      this.selectedDate = payload;
    },
  },
};
</script>

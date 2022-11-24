import actionTypes from '@/store/types/action-types';
import VueBottomSheet from '@webzlodimir/vue-bottom-sheet';
import StoreItemsList from '@/components/StoreItemsList';
import { diffInDays } from '@/helpers/dates';

export default {
  components: {
    VueBottomSheet,
    StoreItemsList,
  },
  data() {
    return {
      isOpenedCalendar: false,
      isRangeCalendar: false,
      calendarMasks: {
        weekdays: 'WWW',
      },
      selectedPlan: null,
      startDate: null,
      endDate: null,
    };
  },
  computed: {
    selectedDate: {
      get() {
        return new Date();
      },
      set(value) {
        const date = value.toISOString().replace('T', ' ').replace('Z', '').split(' ')[0];

        this.buyPlan(date);
      },
    },
    range: {
      get() {
        return {
          start: null,
          end: null,
        };
      },
      set(value) {
        const { start, end } = value;

        this.startDate = start.toISOString().replace('T', ' ').replace('Z', '').split(' ')[0];
        this.endDate = end.toISOString().replace('T', ' ').replace('Z', '').split(' ')[0];
      },
    },
    rangeDays() {
      return diffInDays(this.startDate, this.endDate);
    },
  },
  watch: {
    endDate() {
      this.freezePlan();
    },
  },
  methods: {
    openCalendar(payload) {
      this.selectedPlan = payload.plan;
      this.isRangeCalendar = payload.isRange;

      this.$refs.calendarBottomSheet.open();
    },
    async moveToMonth(month) {
      const calendar = this.$refs.calendar;
      await calendar.move({ month: month });
    },
    buyPlan(date) {
      this.$store
        .dispatch(actionTypes.CHECK_PLAN, {
          action: 'check_plan',
          plan: this.selectedPlan,
          start_date: date,
          user: this.user.id,
          member: this.user.member.id,
          registration: this.user.registration.id,
        })
        .then(response => {
          if (response.status === 'success') {
            this.$refs.calendarBottomSheet.close();
            this.$router.push({ name: 'StorePayment' });
          } else {
            this.$toaster.error(response.message);
          }
        });
    },
    freezePlan() {
      this.$store
        .dispatch(actionTypes.FREEZE_PLAN, {
          action: 'freeze',
          start_date: this.startDate,
          end_date: this.endDate,
          days: this.rangeDays,
          user: this.user.id,
          member: this.user.member.id,
          registration: this.user.registration.id,
        })
        .then(response => {
          if (response.status === 'success') {
            this.$refs.calendarBottomSheet.close();
            this.$router.push({ name: 'StorePayment' });
          } else {
            this.$toaster.error(response.message);
          }
        });
    },
  },
};

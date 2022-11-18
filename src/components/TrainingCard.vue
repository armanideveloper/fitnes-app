<template>
  <li class="training-card">
    <main class="training-card__main">
      <div class="training-card__content">
        <div class="training-card__blue-line"></div>

        <div class="training-card__inner">
          <div class="training-card__grid">
            <h3 class="training-card__title">{{ training.name }}</h3>

            <p class="training-card__time">{{ timeFormatted }}</p>

            <base-toggle
              :default-state="!!+training.reminder"
              :id="`training-notify-${training.id}`"
              @change-toggle-val="toggleNotifications"
              class="primary"
            >
              Notify me
            </base-toggle>

            <span v-if="training.repeats" class="training-card__tag training-card__repeats">
              {{ training.repeats }}x/week
            </span>
          </div>

          <div class="training-card__tags">
            <span class="training-card__tag">
              <img :src="require('@/assets/images/icons/user-sm.svg')" alt="" />
              {{ training.gs_tags }}
            </span>
            <span class="training-card__tag">
              <img :src="require('@/assets/images/icons/clock-sm.svg')" alt="" />
              {{ training.duration }} mins
            </span>
            <span class="training-card__tag">
              <img :src="require('@/assets/images/icons/marker-pin-sm.svg')" alt="" />
              {{ training.location_name }}
            </span>

            <span v-if="training.equipment" class="training-card__tag">
              <img :src="require('@/assets/images/icons/marker-pin-sm.svg')" alt="" />
              {{ training.equipment }}
            </span>
          </div>
        </div>
      </div>
    </main>

    <footer class="training-card__footer">
      <base-button
        v-if="training.can_be_selected && !training.choosen"
        class="small-btn training-card__book-btn"
        @click.native="toggleReservation('reservation')"
      >
        Book
      </base-button>
      <base-button
        v-else-if="training.choosen"
        class="small-btn training-card__book-btn"
        @click.native="toggleReservation('cancel_reservation')"
      >
        Cancel
      </base-button>
      <base-button v-else class="small-btn training-card__book-btn training-card__book-btn--disabled">
        Booking available in {{ training.open_registration_hours }}h
      </base-button>
    </footer>
  </li>
</template>

<script>
import { mapGetters } from 'vuex';
import actionTypes from '@/store/types/action-types';
import getterTypes from '@/store/types/getter-types';
import BaseButton from '@/components/BaseButton';
import BaseToggle from '@/components/BaseToggle';

export default {
  name: 'TrainingCard',
  components: {
    BaseToggle,
    BaseButton,
  },
  props: {
    training: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  computed: {
    ...mapGetters({
      user: getterTypes.USER_DATA,
    }),
    timeFormatted() {
      const [hours, minutes] = this.training.time_from.split(':');
      return `${hours}:${minutes}`;
    },
  },
  methods: {
    toggleReservation(action) {
      this.$store
        .dispatch(actionTypes.TOGGLE_RESERVATION, {
          action,
          date: this.training.date_from,
          reservation: this.training.id,
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
    toggleNotifications(val) {
      this.$store
        .dispatch(actionTypes.TOGGLE_NOTIFICATIONS, {
          action: 'reminder',
          status: `${+val}`,
          date: this.training.date_from,
          reservation: this.training.id,
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
  },
};
</script>

<style lang="scss" scoped>
.training-card {
  font-family: 'Plus Jakarta Sans', sans-serif;
  background-color: #fff;
  border-radius: 12px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  & + .training-card {
    margin-top: 25px;
  }

  &__main {
    padding: 6px 14px 15px 20px;
  }

  &__content {
    display: grid;
    grid-template-columns: 4px 1fr;
    grid-column-gap: 20px;
  }

  &__blue-line {
    width: 100%;
    height: 100%;
    background-color: $blue;
    border-radius: 12px;
  }

  &__inner {
    position: relative;
    text-align: center;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr 42px;
    margin-bottom: 12px;
  }

  &__title {
    grid-column: 1;
    margin-bottom: 13px;
    color: $dark-blue-2;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.01em;
  }

  &__time {
    grid-column: 1;
    color: $dark-blue-2;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
  }

  &__repeats {
    grid-row: 1 / 2;
    grid-column: 2;
    align-self: end;
  }

  &__tags {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(72px, 1fr));
    grid-column-gap: 4px;
  }

  &__tag {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
    padding: 5px 0;
    color: #92959d;
    font-size: 12px;
    line-height: 15px;
    background-color: #f4f6f5;
    border-radius: 12px;
  }

  &__footer {
    padding: 8px 0;
    background: rgba(133, 133, 133, 0.06);
  }

  &__book-btn {
    min-width: 80px;
    margin: 0 auto;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    line-height: 20px;

    &--disabled {
      max-width: 216px;
      color: $dark-blue-2;
      background: #ffffff;
      border: 1px solid $blue;
      width: 100%;
    }
  }

  :deep() {
    .toggle {
      grid-column: 2;
      grid-row: 3 / -1;
      align-self: flex-end;
      justify-self: flex-end;
      flex-direction: column;

      &__label {
        color: #92959d;
        font-size: 9px;
        line-height: 11px;
      }
    }
  }
}
</style>

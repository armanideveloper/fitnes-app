<template>
  <li class="history-item" :class="`history-item--${itemColor}`">
    <p class="history-item__date">{{ formattedDate }}</p>

    <div class="history-item__title-time">
      <h2 class="history-item__title">{{ item.reason || item.gs_tags }}</h2>
      <p v-if="formattedTime" class="history-item__time">{{ formattedTime }}</p>
    </div>

    <p v-if="item.value" class="history-item__points">{{ item.value }} pts</p>
    <base-button v-else class="small-btn" @click.native="cancelReservation">Cancel</base-button>
  </li>
</template>

<script>
import { mapGetters } from 'vuex';
import actionTypes from '@/store/types/action-types';
import getterTypes from '@/store/types/getter-types';
import BaseButton from '@/components/BaseButton';

export default {
  name: 'HistoryItem',
  components: { BaseButton },
  props: {
    item: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  computed: {
    ...mapGetters({
      user: getterTypes.USER_DATA,
    }),
    formattedDate() {
      const date = this.item.created_datetime ? this.item.created_datetime.split(' ')[0] : this.item.date_from;

      return date.split('-').reverse().join('.');
    },
    formattedTime() {
      if (this.item.time_from) {
        const [hours, minutes] = this.item.time_from?.split(':');
        return `${hours}:${minutes}`;
      }

      return null;
    },
    itemColor() {
      if (!this.item.value) {
        return 'blue';
      }

      if (Number(this.item.value) < 0) {
        return 'red';
      }

      return 'green';
    },
  },
  methods: {
    cancelReservation() {
      this.$store
        .dispatch(actionTypes.TOGGLE_RESERVATION, {
          action: 'cancel_reservation',
          date: this.item.date_from,
          reservation: this.item.id,
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
.history-item {
  display: grid;
  grid-template-columns: 76px 1fr 80px;
  align-items: center;
  height: 48px;
  padding: 0 7px 0 21px;
  color: $dark-black;
  font-size: 14px;
  line-height: 17px;
  background: #fff;
  box-shadow: 0 19px 50px rgba(219, 224, 225, 0.8);
  border-radius: 10px;

  &--blue {
    color: $blue;
  }

  &--green {
    color: $green;
  }

  &--red {
    color: $red-danger;
  }

  & + .history-item {
    margin-top: 8px;
  }

  .small-btn {
    width: 80px;
    padding: 0;
    font-size: 12px;
    line-height: 20px;
  }

  & > * {
    justify-self: center;
  }

  &__title-time {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    text-align: center;
  }

  &__date {
    color: $dark-black;
  }
}
</style>

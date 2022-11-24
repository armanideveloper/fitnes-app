<template>
  <div class="store-card" :class="[`store-card--${storeItem.type}`, { selected: isSelected }]">
    <main class="store-card__main">
      <p v-if="'selected' in storeItem" class="store-card__current-membership">
        {{ isSelected ? 'Current membership' : '' }}
      </p>

      <h3 class="store-card__title">{{ storeItem.name }}</h3>

      <p class="store-card__subtitle">1-la-1 workout</p>

      <!--      <p class="store-card__date">{{ storeItem.date }}</p>-->

      <!--      <p class="store-card__time">{{ storeItem.time }}</p>-->

      <div class="store-card__price-duration">
        <p class="store-card__price">
          {{ storeItem.price }}
          <span>RON</span>
        </p>

        <div v-if="storeItem.days" class="store-card__duration-block">
          <p class="store-card__duration-title">Valabilitate</p>
          <p class="store-card__duration">{{ storeItem.days }} Days</p>
        </div>
      </div>
    </main>

    <footer class="store-card__footer">
      <template v-if="isSelected">
        <base-button
          class="small-btn store-card__btn store-card__btn--renew"
          @click.native="$emit('open-calendar', { plan: storeItem.id, isRange: false })"
        >
          Renew
        </base-button>

        <base-button
          class="small-btn store-card__btn store-card__btn--freeze"
          @click.native="$emit('open-calendar', { plan: storeItem.id, isRange: true })"
        >
          Freeze
        </base-button>
      </template>

      <base-button
        v-else
        class="small-btn store-card__btn store-card__btn--buy"
        @click.native="$emit('open-calendar', { plan: storeItem.id, isRange: false })"
      >
        Buy
      </base-button>
    </footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import BaseButton from '@/components/BaseButton';
import getterTypes from '@/store/types/getter-types';

export default {
  name: 'StoreCard',
  components: {
    BaseButton,
  },
  props: {
    storeItem: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  computed: {
    ...mapGetters({
      user: getterTypes.USER_DATA,
    }),
    isSelected() {
      return this.storeItem.id === this.user.registration.plan_id;
    },
  },
};
</script>

<style lang="scss" scoped>
.store-card {
  @include store-card;

  &.selected {
    background-color: $light-grey-3;

    .store-card {
      &__current-membership {
        color: $blue;
      }

      &__main {
        color: $dark-blue;
        background-color: #fff;
        text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
      }

      &__price-duration {
        flex-direction: column;
        gap: unset;
      }

      &__duration-block {
        color: $dark-blue;
      }

      &__footer {
        background-color: $light-grey-3;
      }

      &__btn {
        &--renew,
        &--freeze {
          box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        }
        &--renew {
          background-color: #fff;
          color: $blue;
        }
      }
    }
  }

  &--membership {
    .store-card {
      &__price-duration {
        flex-direction: row;
        justify-content: center;
        gap: 40px;
      }
    }
  }

  &--event {
    .store-card__subtitle {
      margin-bottom: 0;
    }

    .store-card__main {
      padding: 20px 0;
      text-align: center;
    }

    .store-card__date,
    .store-card__time {
      color: $green-2;
    }

    .store-card__time {
      margin-bottom: 7px;
    }
  }

  &__main {
    @include store-card-main;
    padding: 8px 13px 19px 13px;
  }

  &__current-membership {
    min-height: 22px;
    font-size: 8px;
    line-height: 22px;
  }

  &__title {
    font-size: 16px;
    line-height: 1;
  }

  &__subtitle {
    margin-bottom: 5px;
    font-size: 8px;
    line-height: 22px;
  }

  &__price-duration {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__price {
    font-size: 16px;
    line-height: 1;

    span {
      font-size: 8px;
    }
  }

  &__duration-block {
    color: $green-2;
    text-align: center;
  }

  &__duration-title {
    font-size: 8px;
    line-height: 16px;
  }

  &__duration {
    font-size: 16px;
    line-height: 22px;
  }

  &__footer {
    display: flex;
    justify-content: center;
    gap: 16px;
    padding: 20px 0;
    background-color: #fff;
    border-radius: 0 0 10px 10px;
  }

  &__btn {
    width: 80px;
    padding: 0;
    font-size: 10px;
    line-height: 20px;
    text-align: center;
    border: none;

    &--freeze {
      color: $dark-blue;
      background-color: $green-2;
    }
  }
}
</style>

<template>
  <div class="store-card" :class="[`store-card--${storeItem.type}`, { selected: storeItem.selected }]">
    <main class="store-card__main">
      <p class="store-card__current-membership">
        {{ storeItem.selected ? 'Current membership' : '' }}
      </p>

      <h3 class="store-card__title">{{ storeItem.title }}</h3>

      <p class="store-card__subtitle">{{ storeItem.subtitle }}</p>

      <div class="store-card__price-duration">
        <p class="store-card__price">{{ storeItem.price }} <span>RON</span></p>

        <div class="store-card__duration-block">
          <p class="store-card__duration-title">Valabilitate</p>
          <p class="store-card__duration">{{ storeItem.duration }} Luna</p>
        </div>
      </div>
    </main>

    <footer class="store-card__footer">
      <template v-if="storeItem.selected">
        <base-button class="small-btn store-card__btn store-card__btn--renew">Renew</base-button>
        <base-button class="small-btn store-card__btn store-card__btn--freeze">Freeze</base-button>
      </template>

      <router-link v-else :to="{ name: 'StorePayment' }" v-slot="{ navigate }" custom>
        <base-button class="small-btn store-card__btn store-card__btn--buy" @click.native="navigate">Buy</base-button>
      </router-link>
    </footer>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton';

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
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars/_colors.scss';

.store-card {
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  &--membership {
    .store-card {
      &__price-duration {
        flex-direction: row;
        justify-content: center;
        gap: 40px;
      }
    }

    &.selected {
      background-color: #eff1f2;

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
          background-color: #eff1f2;
        }

        &__btn {
          &--renew,
          &--freeze {
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          }
          &--renew {
            background-color: #fff;
            color: $blue;
          }
        }
      }
    }
  }

  &__main {
    flex: 1;
    padding: 8px 13px 19px 13px;
    color: #fff;
    font-weight: 500;
    background-color: $blue;
    border-radius: 10px;
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

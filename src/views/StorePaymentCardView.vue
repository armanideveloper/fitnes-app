<template>
  <div class="pt-42 store-card">
    <div class="container">
      <base-page-header :back-to="backTo">Card details</base-page-header>

      <form id="payment-form" class="store-card__form card-form" @submit.prevent="paymentHandler">
        <div class="card-form__type-wrapper">
          <div class="card-form__type">
            <input class="card-form__type-input" id="debit" type="radio" value="debit" v-model="cardType" />
            <label for="debit" class="card-form__type-label">Debit Card</label>
          </div>
          <div class="card-form__type">
            <input class="card-form__type-input" id="credit" type="radio" value="credit" v-model="cardType" />
            <label for="credit" class="card-form__type-label">Credit Card</label>
          </div>
        </div>

        <base-text-input
          id="card-number"
          class="card-form__card-number"
          maxlength="19"
          inputmode="numeric"
          v-model="cardNumber"
          input-text-align="left"
          >Card number</base-text-input
        >

        <div class="card-form__expiry-cvv">
          <div class="card-form__expiry-date-wrapper">
            <p class="card-form__expiry-date-label">Expiry date</p>

            <div class="card-form__expiry-date-inputs">
              <select name="expiry-month" id="expiry-month" class="card-form__expiry-date-months" v-model="expiryMonth">
                <option v-for="month in monthsList" :key="month" :value="month">{{ month }}</option>
              </select>
              <base-text-input
                id="expiry-year"
                class="card-form__expiry-date-year"
                v-model="expiryYear"
                maxlength="4"
              />
            </div>
          </div>

          <base-text-input
            id="card-cvv"
            class="card-form__input card-form__input--cvv"
            v-model="cvv"
            input-text-align="left"
            type="password"
            maxlength="3"
            >CVV</base-text-input
          >
        </div>

        <base-text-input id="card-name" class="card-form__input mb-16" v-model="name" input-text-align="left"
          >Name</base-text-input
        >

        <label class="card-form__checkbox">
          <input id="saveForFuture" v-model="saveForFuture" type="checkbox" class="card-form__checkbox-input" />
          Save card for future checkouts
        </label>
      </form>

      <div class="store-card__buttons">
        <router-link :to="{ name: 'Store' }" v-slot="{ navigate }" custom
          ><base-button class="base-btn base-btn--white store-card__btn" @click.native="navigate"
            >Cancel payment</base-button
          ></router-link
        >
        <base-button class="base-btn store-card__btn" type="submit" form="payment-form"
          >Pay {{ $route.params.price }} RON</base-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton';
import BaseTextInput from '@/components/BaseTextInput';
import BasePageHeader from '@/components/BasePageHeader';

export default {
  name: 'StorePaymentCardView',
  components: {
    BaseButton,
    BaseTextInput,
    BasePageHeader,
  },
  metaInfo: {
    title: 'Card details',
  },
  data() {
    return {
      backTo: 'StorePayment',
      cardType: 'debit',
      cardNumber: '',
      expiryMonth: 'Jan',
      expiryYear: '2022',
      cvv: '',
      name: '',
      saveForFuture: false,
      monthsList: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    };
  },
  watch: {
    cardNumber() {
      // Card number without dash (-)
      let realNumber = this.cardNumber.replace(/\s/gi, '');

      // Generate dashed number
      let dashedNumber = realNumber.match(/.{1,4}/g);

      // Replace the dashed number with the real one
      this.cardNumber = dashedNumber.join(' ');
    },
  },
  methods: {
    paymentHandler() {
      const data = {
        cardType: this.cardType,
        cardNumber: this.cardNumber,
        expiresAt: `${this.expiryMonth} ${this.expiryYear}`,
        cvv: this.cvv,
        name: this.name,
        saveForFuture: this.saveForFuture,
      };

      console.log(data);

      setTimeout(() => {
        this.$router.push({ name: 'Home' });
      }, 500);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars/_colors.scss';

.store-card {
  padding-bottom: 102px;

  :deep() {
    .base-page-header {
      margin-bottom: 70px;

      &__title {
        font-weight: 500;
        font-size: 24px;
        line-height: 22px;
      }
    }
  }

  &__form {
    margin-bottom: 78px;
    color: $dark-black;
  }

  &__buttons {
    display: flex;
    gap: 18px;
  }

  &__btn {
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
  }
}

.card-form {
  &__type-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 15px;
    margin-bottom: 30px;
  }

  &__type-label {
    display: block;
    padding: 17px 0;
    text-align: center;
    background: #fff;
    border-bottom: 4px solid transparent;
    box-shadow: 0 15px 60px rgba(219, 224, 225, 0.8);
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
  }

  &__type-input {
    display: none;

    &:checked {
      & + .card-form__type-label {
        border-bottom: 4px solid $blue;
      }
    }
  }

  &__input {
    align-items: flex-start;
    font-weight: 500;

    &--cvv {
      width: 68px;
    }

    :deep() {
      .base-text-input {
        padding-left: 22px;
        font-weight: 500;
        word-spacing: 12px;
      }
    }
  }

  &__card-number {
    align-items: flex-start;
    margin-bottom: 20px;
  }

  &__expiry-cvv {
    display: flex;
    gap: 15px;
    margin-bottom: 20px;
  }

  &__expiry-date-label {
    margin-bottom: 8px;
    color: $dark-black;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
  }

  &__expiry-date-inputs {
    display: flex;
    border-radius: 10px;
    box-shadow: 0 10px 54px rgba(178, 194, 210, 0.36);
  }

  &__expiry-date-months {
    padding: 17px 22px;
    background-color: #fff;
    border-radius: 10px 0 0 10px;
  }

  &__expiry-date-year {
    :deep() {
      .base-text-input {
        max-width: 65px;
        padding: 17px 22px 17px 8px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-left: 1px solid rgba(90, 101, 105, 0.6);
        box-shadow: none;
      }
    }
  }

  &__checkbox {
    display: grid;
    grid-template-columns: 22px 1fr;
    grid-column-gap: 10px;
    color: $dark-black;
    font-size: 12px;
    line-height: 21px;
  }

  &__checkbox-input {
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    border: 1px solid $blue;
    border-radius: 4px;
    transition: all 0.3s ease-in-out;

    &::before {
      content: url('@/assets/images/icons/checkmark-white-sm.svg');
      transform: scale(0);
      transition: transform 0.3s ease-in-out;
    }

    &:checked {
      background-color: $blue;

      &::before {
        transform: scale(1);
      }
    }
  }
}
</style>

<template>
  <div class="pt-42 store-payment">
    <div class="container">
      <base-page-header :back-to="backTo">Payment</base-page-header>

      <div class="store-payment__about payment-about">
        <p class="payment-about__text">
          You are about to pay
          <br />
          <strong>{{ totalPrice }} RON</strong>
          (discount applied)
          <br />
          to
          <strong>{{ paymentAddress }}</strong>
          <br />
          for
          <strong>{{ paymentPurpose }}</strong>
        </p>

        <p class="payment-about__availability">
          Your purchase will be available at Moovgym location or Partner locations
        </p>

        <hr />

        <p class="payment-about__security">
          Secure payment with
          <img :src="require('@/assets/images/stripe-logo.png')" alt="" />
        </p>
      </div>

      <div class="payment-about__discount discount">
        <div class="discount__wrapper">
          <label class="discount__label" for="discount">Apply discount</label>
          <select class="discount__select" name="discount" id="discount" v-model="discount">
            <option disabled value="">Please select discount</option>
            <option v-for="(option, index) in discounts" :key="`discount-option_${index}`" :value="option">
              {{ option }}
            </option>
          </select>
        </div>

        <button class="discount__btn" @click="applyDiscount">Apply</button>
      </div>

      <div class="store-payment__buttons">
        <router-link :to="{ name: 'Store' }" v-slot="{ navigate }" custom>
          <base-button class="base-btn base-btn--white store-payment__btn" @click.native="navigate">
            Cancel payment
          </base-button>
        </router-link>
        <router-link :to="{ name: 'StorePaymentCard', params: { price: totalPrice } }" v-slot="{ navigate }" custom>
          <base-button class="base-btn store-payment__btn" @click.native="navigate">Go to payment</base-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton';
import BasePageHeader from '@/components/BasePageHeader';

export default {
  name: 'StorePaymentView',
  components: {
    BaseButton,
    BasePageHeader,
  },
  metaInfo: {
    title: 'Payment',
  },
  data() {
    return {
      backTo: 'Store',
      paymentSum: 150,
      discount: null,
      isDiscountApplied: false,
      paymentAddress: 'Company Ltd',
      paymentPurpose: 'Standard membership',
      location: 'Moovgym',
      partners: 'Partner locations',
      discounts: [30, 50, 70],
    };
  },
  computed: {
    totalPrice() {
      if (!this.isDiscountApplied) {
        return this.paymentSum;
      }

      return this.paymentSum - this.discount;
    },
  },
  watch: {
    discount() {
      this.isDiscountApplied = false;
    },
  },
  methods: {
    applyDiscount() {
      this.isDiscountApplied = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.store-payment {
  :deep() {
    .base-page-header {
      margin-bottom: 50px;

      &__title {
        font-weight: 500;
        font-size: 24px;
        line-height: 22px;
      }
    }
  }

  &__about {
    margin-bottom: 84px;
    padding: 7px 40px 10px;
    color: $dark-black;
    text-align: center;
    background: #fff;
    box-shadow: 0 15px 60px rgba(219, 224, 225, 0.8);
    border-radius: 10px;

    strong {
      font-weight: 600;
    }
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

  hr {
    width: 100%;
    height: 1px;
    margin-top: 20px;
    margin-bottom: 8px;
    background-color: $dark-blue;
  }
}

.payment-about {
  &__availability {
    font-size: 9px;
    line-height: 21px;
  }

  &__security {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    font-weight: 500;
    font-style: italic;
    font-size: 10px;
    line-height: 21px;
  }

  &__discount {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 32px;
    margin-bottom: 84px;
  }
}

.discount {
  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 6px;
    color: $dark-black;
  }

  &__label {
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
  }

  &__select {
    width: 132px;
    padding: 8px 12px 8px 21px;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    background: #fff url('@/assets/images/icons/arrow-down.svg') no-repeat calc(100% - 20px) center;
    box-shadow: 0 15px 60px rgba(219, 224, 225, 0.8);
    border-radius: 10px;
  }

  &__btn {
    width: 80px;
    padding: 8px 0;
    color: $blue;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    background: #fff;
    box-shadow: 0 10px 60px rgba(219, 224, 225, 0.8);
    border-radius: 10px;
  }
}
</style>

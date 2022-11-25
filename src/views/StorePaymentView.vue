<template>
  <div class="pt-42 store-payment">
    <div class="container">
      <base-page-header :back-to="backTo">Payment</base-page-header>

      <div class="store-payment__about payment-about">
        <p class="payment-about__text">
          You are about to pay
          <br />
          <strong>{{ totalPrice }} RON</strong>
          <span v-if="isDiscountApplied">&nbsp;(discount applied)</span>
          <br />
          to
          <strong>Company Ltd.</strong>
          <br />
          for
          <strong>{{ paymentPurpose }}</strong>
        </p>

        <p class="payment-about__availability">
          Your purchase will be available at
          <strong>Moovgym</strong>
          location or
          <strong>Partner locations</strong>
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
          <select class="discount__select" name="discount" id="discount" v-model="selectedDiscount">
            <option disabled value="0">Discount</option>
            <option v-for="(option, index) in discounts" :key="`discount-option_${index}`" :value="option">
              {{ option }}
            </option>
          </select>
        </div>

        <button class="discount__btn" @click="applyDiscount">Apply</button>
      </div>

      <div class="store-payment__buttons">
        <base-button class="base-btn base-btn--white store-payment__btn" @click.native="cancelPaymentHandler">
          Cancel payment
        </base-button>
        <base-button class="base-btn store-payment__btn" @click.native="paymentClickHandler">Go to payment</base-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import getterTypes from '@/store/types/getter-types';
import BaseButton from '@/components/BaseButton';
import axios from '@/axios';
import { sleep } from '@/helpers/async';
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
      discount: 0,
      isDiscountApplied: false,
      inBrowser: null,
      ref: {},
    };
  },
  created() {
    this.inBrowser = typeof window !== 'undefined';
  },
  computed: {
    ...mapGetters({
      user: getterTypes.USER_DATA,
      planForBuying: getterTypes.PLAN_FOR_BUYING,
    }),
    paymentPurpose() {
      return this.planForBuying?.name;
    },
    initialPrice() {
      return +this.planForBuying?.price;
    },
    discounts() {
      const pointsNumber = +this.user.member.reward_points;

      if (pointsNumber >= 100) {
        const maxDiscount = Math.floor(pointsNumber / 100);
        return [...Array(maxDiscount)].map((v, i) => (i + 1) * 10);
      }

      return null;
    },
    selectedDiscount: {
      get() {
        return this.discount;
      },
      set(val) {
        this.discount = val;
        this.isDiscountApplied = false;
      },
    },
    totalPrice() {
      if (!this.isDiscountApplied) {
        return this.initialPrice;
      }

      return this.initialPrice - this.discount;
    },
  },
  methods: {
    applyDiscount() {
      if (!this.discount) {
        return;
      }

      this.isDiscountApplied = true;
    },
    paymentClickHandler() {
      const _this = this;
      const rand = Date.now();

      if (_this.inBrowser) {
        this.openWindow(rand);
      } else {
        // This need to be uncommented before using with Cordova
        /*this.ref = cordova.InAppBrowser.open(the_url, '_blank', 'enableViewportScale=yes,toolbarposition=top,location=no,closebuttoncaption=Inchide,clearcache=yes,clearsessioncache=yes');
        //ref.addEventListener('message', processMessage);
        this.ref.addEventListener('exit', function() {
          clearTimeout(window.check_payment_timeout);
        });*/
      }

      _this.checkPayment(rand, res => {
        _this.processMessageData(JSON.parse(res));
      });
    },
    openWindow(rand) {
      const url = `https://gymon.io/payment/checkoutdev.php?&user=${this.user.id}&live=${process.env.VUE_APP_STRIPE_LIVE}&amount=${this.totalPrice}&rand=${rand}`;
      this.ref = window.open(url, '_blank');
    },
    checkWindow() {
      return this.ref && !this.ref.closed;
    },
    checkPayment(rand, callback) {
      const _this = this;

      try {
        axios.get(`/check_payment?user=${_this.user.id}&rand=${rand}`).then(response => {
          if (response.data.status) {
            callback(response.data);
          } else {
            if (_this.inBrowser) {
              if (this.checkWindow()) {
                window.check_payment_timeout = setTimeout(function () {
                  _this.checkPayment(rand, callback);
                }, 1000 * 2);
              } else {
                _this.$toaster.info('Cancel check payment');
                clearTimeout(window.check_payment_timeout);
              }
            } else {
              window.check_payment_timeout = setTimeout(function () {
                _this.checkPayment(rand, callback);
              }, 1000 * 2);
            }
          }
        });
      } catch (e) {
        if (_this.inBrowser) {
          if (this.checkWindow()) {
            window.check_payment_timeout = setTimeout(function () {
              _this.checkPayment(rand, callback);
            }, 1000 * 2);
          } else {
            clearTimeout(window.check_payment_timeout);
          }
        } else {
          window.check_payment_timeout = setTimeout(function () {
            _this.checkPayment(rand, callback);
          }, 1000 * 2);
        }
      }
    },
    processMessageData(dataPayment) {
      if (!dataPayment) return;
      if (!dataPayment.message || !dataPayment.channel) return;

      if (this.ref && this.ref.close) this.ref.close();

      if (dataPayment.message === 'succeeded' || dataPayment.message === 'processing') {
        this.processPayment(dataPayment);
      } else {
        this.$toaster.info(dataPayment.msg);
      }
    },
    async processPayment(dataPayment) {
      try {
        await sleep();

        const response = await axios.get(
          `/plan?discount=${this.discountSelected || 0}&charge=1&plan=${dataPayment.charge.id}&start_date=${
            this.planForBuying.start_date
          }&user=${this.user.id}&member=${this.user.member.id}&registration=${this.user.registration.id}`
        );

        if (response.status) {
          this.$toaster.success('Plata a fost efectuata cu success');

          setTimeout(() => {
            this.$router.push({ name: 'StorePaymentSuccess' });
          }, 2000);
        } else {
          this.$toaster.error(response.data.message);
        }
      } catch (e) {
        this.$toaster.error('Communication error');
      }
    },
    cancelPaymentHandler() {
      if (window.check_payment_timeout) {
        clearTimeout(window.check_payment_timeout);
      }

      this.$router.push({ name: 'Store' });
    },
  },
};
</script>

<style lang="scss" scoped>
.store-payment {
  ::v-deep {
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
    white-space: nowrap;
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

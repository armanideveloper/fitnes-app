<template>
  <div class="login-main">
    <go-back />

    <form @submit.prevent="signUp">
      <h1 class="login-title">Let’s sign you up.</h1>

      <h2 class="login-sub-title">Create account.</h2>

      <base-input v-model="signUpData.name" type="text" title="Full Name" />

      <base-input v-model="signUpData.username" type="email" class="mt-24" title="Email Address" />

      <base-input v-model="signUpData.contact" type="text" class="mt-24" title="Phone Number" />

      <base-input v-model="signUpData.address" type="text" class="mt-24" title="Address" />

      <base-input v-model="signUpData.password" :type="passwordType" class="mt-24" title="Password">
        <button @click="changeType">
          <img class="eye-icon" :src="require('@/assets/images/icons/eye.svg')" alt="eye icon" />
        </button>
      </base-input>

      <base-input v-model="signUpData.password2" :type="passwordTypeConfirm" class="mt-24" title="Confirm Password">
        <button @click="changeTypeConfirm">
          <img class="eye-icon" :src="require('@/assets/images/icons/eye.svg')" alt="eye icon" />
        </button>
      </base-input>

      <base-checked class="mt-28 mb-60" text="Agree to terms and conditions" v-model="termsAgreement" />

      <base-button class="base-btn" :disabled="!termsAgreement">
        <span class="blue-btn-text">Sign up</span>
      </base-button>
    </form>

    <p class="login-text">
      Already have an account?
      <router-link to="/sign-in">Sign in</router-link>
    </p>
  </div>
</template>

<script>
import actionTypes from '@/store/types/action-types';
import BaseInput from '@/components/BaseInput';
import BaseChecked from '@/components/BaseChecked';
import BaseButton from '@/components/BaseButton';
import GoBack from '@/components/GoBack';

export default {
  components: {
    GoBack,
    BaseInput,
    BaseChecked,
    BaseButton,
  },
  metaInfo: {
    title: 'Sign Up',
  },
  data() {
    return {
      signUpData: {
        name: '',
        username: '',
        contact: '',
        password: '',
        password2: '',
        address: '',
      },
      termsAgreement: false,
      passwordType: 'password',
      passwordTypeConfirm: 'password',
    };
  },
  methods: {
    signUp() {
      this.$store.dispatch(actionTypes.REGISTER, this.signUpData).then(response => {
        if (response.status === 'success') {
          this.$router.push({ name: 'SignIn' });
        } else {
          this.$toaster.error(response.message);
        }
      });
    },
    changeType() {
      this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
    },
    changeTypeConfirm() {
      this.passwordTypeConfirm = this.passwordTypeConfirm === 'password' ? 'text' : 'password';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars/_colors.scss';
.login-main {
  width: 375px;
  margin: 0 auto;
  padding: 42px 22px 96px 22px;
  .login-title {
    font-weight: 500;
    font-size: 22px;
    color: $dark-black;
    margin-top: 28px;
    margin-bottom: 11px;
  }
  .login-sub-title {
    margin-bottom: 36px;
    font-weight: 400;
    font-size: 14px;
    color: $light-black;
  }
  .login-text {
    text-align: center;
    margin-top: 28px;
    font-weight: 400;
    font-size: 14px;
    color: $light-black;
    a {
      font-weight: 600;
      color: $blue;
      text-decoration: underline;
    }
  }
  .blue-btn-text {
    font-style: normal;
    font-weight: 500;
    font-size: 19px;
    line-height: 28px;
    color: #fff;
  }
  .eye-icon {
    cursor: pointer;
    position: absolute;
    top: 16px;
    right: 18px;
  }
}
.mt-24 {
  margin-top: 24px;
}
.mt-28 {
  margin-top: 28px;
}
.mb-60 {
  margin-bottom: 60px;
}
</style>

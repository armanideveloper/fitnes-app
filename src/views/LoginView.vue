<template>
  <div class="login-main">
    <go-back />
    <h1 class="login-title">Let’s sign you in.</h1>
    <h2 class="login-sub-title">Welcome back. You’ve been missed!.</h2>
    <base-input type="email" class="mt-24" title="Email Address" />
    <base-input :type="passwordType" class="mt-24" title="Password">
      <button @click="changeType">
        <img class="eye-icon" :src="require('@/assets/images/icons/eye.svg')" alt="eye icon" />
      </button>
    </base-input>
    <div class="login-help-block mt-28 mb-60">
      <base-checked text="Remember Me" />
      <p class="login-forgot-text">Forgot Password?</p>
    </div>

    <base-button class="base-btn" @click="$router.push('/sing-up')">
      <span class="blue-btn-text">Sign in</span>
    </base-button>
    <p class="login-text">
      Don’t have an account ?
      <router-link to="/sign-up">Sign up</router-link>
    </p>
  </div>
</template>

<script>
import BaseInput from '@/components/BaseInput';
import BaseChecked from '@/components/BaseChecked';
import GoBack from '@/components/GoBack';
export default {
  components: {
    GoBack,
    BaseInput,
    BaseChecked,
  },
  metaInfo: {
    title: 'Sign In',
  },
  data() {
    return {
      passwordType: 'password',
      passwordTypeConfirm: 'password',
    };
  },
  methods: {
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
  .login-help-block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .login-forgot-text {
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      color: $red-danger;
    }
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

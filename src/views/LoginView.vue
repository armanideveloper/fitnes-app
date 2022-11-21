<template>
  <div class="login-main">
    <go-back />

    <h1 class="login-title">Let’s sign you in.</h1>

    <h2 class="login-sub-title">Welcome back. You’ve been missed!</h2>

    <base-input v-model="loginData.username" type="email" class="mt-24" name="username" title="Email Address" />

    <base-input v-model="loginData.password" :type="passwordType" class="mt-24" name="password" title="Password">
      <button @click="changeType">
        <img class="eye-icon" :src="require('@/assets/images/icons/eye.svg')" alt="eye icon" />
      </button>
    </base-input>

    <div class="login-help-block mt-28 mb-60">
      <base-checked text="Remember Me" />
      <router-link :to="{ name: 'ForgotPassword' }" class="login-forgot-text">Forgot Password?</router-link>
    </div>

    <base-button class="base-btn" @click.native="signIn">
      <span class="blue-btn-text">Sign in</span>
    </base-button>

    <p class="login-text">
      Don’t have an account ?
      <router-link :to="{ name: 'SignUp' }">Sign up</router-link>
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
    BaseInput,
    BaseChecked,
    BaseButton,
    GoBack,
  },
  metaInfo: {
    title: 'Sign In',
  },
  data() {
    return {
      loginData: {
        username: '',
        password: '',
      },
      passwordType: 'password',
    };
  },
  methods: {
    changeType() {
      this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
    },
    signIn() {
      this.$store.dispatch(actionTypes.LOGIN, this.loginData).then(response => {
        if (response.status === 'success') {
          this.$router.push('/');
        } else {
          this.$toaster.error(response.message);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/shared/login-main.scss';
</style>

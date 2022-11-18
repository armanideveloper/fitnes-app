<template>
  <div class="login-main">
    <go-back />

    <h1 class="login-title">Forgot Password?</h1>

    <h2 class="login-sub-title">To reset your password, please enter your email address</h2>

    <base-input
      v-model="resetPasswordData.username"
      type="email"
      class="mt-24 mb-60"
      name="username"
      title="Email Address"
    />

    <base-button class="base-btn" @click.native="resetPassword">
      <span class="blue-btn-text">Reset password</span>
    </base-button>
  </div>
</template>

<script>
import actionTypes from '@/store/types/action-types';
import BaseInput from '@/components/BaseInput';
import BaseButton from '@/components/BaseButton';
import GoBack from '@/components/GoBack';

export default {
  name: 'ForgotPasswordView',
  components: {
    BaseInput,
    BaseButton,
    GoBack,
  },
  metaInfo: {
    title: 'Forgot Password',
  },
  data() {
    return {
      resetPasswordData: {
        action: 'reset',
        username: '',
      },
    };
  },
  methods: {
    resetPassword() {
      this.$store.dispatch(actionTypes.RESET_PASSWORD, this.resetPasswordData).then(response => {
        if (response.status === 'success') {
          this.$toaster.success(response.message.replaceAll(/<br ?\/?>/g, '\n'));
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

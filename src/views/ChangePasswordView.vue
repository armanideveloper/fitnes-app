<template>
  <div class="pt-42 change-password">
    <div class="container">
      <base-page-header>Change Password</base-page-header>
    </div>

    <div class="container container--small">
      <main>
        <form action="" class="change-password__form" @submit.prevent="changePasswordHandler">
          <fieldset class="change-password__fields">
            <base-text-input id="password" type="password" v-model="password">New password</base-text-input>
            <base-text-input id="confirm-password" type="password" v-model="confirmPassword"
              >Confirm new password</base-text-input
            >
          </fieldset>

          <base-button class="change-password__submit-btn small-btn mt-22">Apply</base-button>
        </form>
      </main>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton';
import BaseTextInput from '@/components/BaseTextInput';
import BasePageHeader from '@/components/BasePageHeader';

export default {
  name: 'ChangePasswordView',
  components: {
    BaseButton,
    BaseTextInput,
    BasePageHeader,
  },
  metaInfo: {
    title: 'Change Password',
  },
  data() {
    return {
      password: '',
      confirmPassword: '',
    };
  },
  methods: {
    changePasswordHandler() {
      if (!this.password || !this.confirmPassword) {
        console.error('Fill all the fields');
        return;
      }

      if (this.password !== this.confirmPassword) {
        console.error("Password and password confirmation don't match");
        return;
      }

      console.log('Success');
      this.$router.push({ name: 'ChangePasswordSuccess' });
    },
  },
};
</script>

<style lang="scss" scoped>
.change-password {
  &__fields {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 17px;
  }

  &__submit-btn {
    max-width: 130px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>

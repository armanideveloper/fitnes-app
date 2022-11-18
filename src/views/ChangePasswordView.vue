<template>
  <div class="pt-42 change-password">
    <div class="container">
      <base-page-header>Change Password</base-page-header>
    </div>

    <div class="container container--small">
      <main>
        <form action="" class="change-password__form" @submit.prevent="changePassword">
          <fieldset class="change-password__fields">
            <base-text-input id="password" type="password" v-model="updatePasswordData.password">
              New password
            </base-text-input>

            <base-text-input id="confirm-password" type="password" v-model="updatePasswordData.password2">
              Confirm new password
            </base-text-input>
          </fieldset>

          <base-button class="change-password__submit-btn small-btn mt-22">Apply</base-button>
        </form>
      </main>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import getterTypes from '@/store/types/getter-types';
import actionTypes from '@/store/types/action-types';
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
      updatePasswordData: {
        password: '',
        password2: '',
      },
    };
  },
  computed: {
    ...mapGetters({
      userData: getterTypes.USER_DATA,
    }),
  },
  methods: {
    changePassword() {
      this.$store
        .dispatch(actionTypes.UPDATE_PASSWORD, {
          member: this.userData.member.id,
          user: this.userData.id,
          ...this.updatePasswordData,
        })
        .then(response => {
          if (response.status === 'success') {
            this.$router.push({ name: 'ChangePasswordSuccess' });
          } else {
            this.$toaster.error(response.message);
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.change-password {
  .base-page-header {
    font-family: 'Inter', sans-serif;
  }

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

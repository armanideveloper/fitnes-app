<template>
  <div class="settings-page change-password-success">
    <div class="container w-100">
      <settings-page-header />

      <h1 class="change-password-success__title">All done!</h1>
    </div>

    <main>
      <div class="change-password-success__done-block done-block">
        <div class="done-block__check">
          <img :src="require('@/assets/images/icons/outline-check-big.svg')" alt="" />
        </div>

        <h2 class="done-block__title">New password created</h2>

        <p class="done-block__subtitle">Go to Settings for other changes</p>

        <router-link :to="{ name: 'Home' }" v-slot="{ href, navigate }">
          <base-button class="base-blue-btn" :href="href" @click.native="navigate">Continue</base-button>
        </router-link>
      </div>
    </main>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton';
import SettingsPageHeader from '@/components/SettingsPageHeader';

export default {
  name: 'ChangePasswordSuccessView',
  components: {
    BaseButton,
    SettingsPageHeader,
  },
  metaInfo: {
    title: 'Password changed successfully',
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars/_colors.scss';

.change-password-success {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: $blue;

  .settings-page-header {
    margin-bottom: 55px;
  }

  &__title {
    color: #fff;
    font-weight: 600;
    font-size: 32px;
    line-height: 38px;
    text-align: center;
  }

  &__done-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 58px 22px 52px;
    background: #fff;
    border-radius: 12px 12px 0 0;
  }
}

.done-block {
  &__check {
    display: grid;
    place-items: center;
    width: 82px;
    height: 82px;
    margin-bottom: 22px;
    background-color: $dark-green;
    border-radius: 50%;
  }

  &__title {
    margin-bottom: 29px;
    color: $black;
    font-size: 24px;
    line-height: 21px;
    text-align: center;
  }

  &__subtitle {
    margin-bottom: 75px;
    color: $light-black;
    font-size: 18px;
    line-height: 18px;
  }
}
</style>

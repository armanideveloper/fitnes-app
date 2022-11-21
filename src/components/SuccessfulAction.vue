<template>
  <div class="successful-action">
    <div class="container w-100">
      <base-page-header />

      <h1 class="successful-action__title">
        <slot name="title"></slot>
      </h1>
    </div>

    <main>
      <div class="successful-action__done-block done-block">
        <div class="done-block__check">
          <img :src="require('@/assets/images/icons/outline-check-big.svg')" alt="Checkmark" />
        </div>

        <h2 class="done-block__title"><slot name="doneBlockTitle"></slot></h2>

        <p class="done-block__subtitle"><slot name="doneBlockSubtitle"></slot></p>

        <router-link :to="{ name: 'Home' }" v-slot="{ href, navigate }" custom>
          <base-button class="base-btn" :href="href" @click.native="navigate">
            <slot name="buttonText">Done</slot>
          </base-button>
        </router-link>
      </div>
    </main>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton';
import BasePageHeader from '@/components/BasePageHeader';

export default {
  name: 'SuccessfulAction',
  components: {
    BaseButton,
    BasePageHeader,
  },
};
</script>

<style lang="scss" scoped>
.successful-action {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  padding-top: 42px;
  background-color: $blue;

  .base-page-header {
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
    font-weight: 500;
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

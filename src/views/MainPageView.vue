<template>
  <div class="main-page-controller">
    <img class="main-page-logo" :src="require(`@/assets/images/icons/logoMain.svg`)" />
    <img :src="require(`@/assets/images/icons/blueLine.svg`)" />
    <h1 class="main-page-title">Your fitness journey starts here</h1>
    <p class="main-page-text">Grow a habit of being active with Gym On app</p>
    <base-button class="base-btn">
      <span class="blue-btn-text">Get started</span>
    </base-button>
    <base-button class="base-btn base-btn--white mt-12">
      <span class="blue-btn-white-text">Get started</span>
    </base-button>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton';
export default {
  components: {
    BaseButton,
  },
};
</script>

<style type="text/css" lang="scss" scoped>
@import '@/assets/styles/vars/_colors.scss';

.main-page-controller {
  //background: red;
  padding: 22px;
  text-align: center;
  .main-page-logo {
    display: block;
    margin: 57px auto 49px auto;
  }
  .main-page-title {
    margin: 79px auto 30px auto;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    text-align: center;
    width: 229px;
    color: $dark-black;
  }
  .main-page-text {
    text-align: center;
    margin: 0 auto 31px auto;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    width: 200px;
    color: $light-black;
  }
  .blue-btn-text {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 19px;
    line-height: 28px;
    color: #fff;
  }
  .blue-btn-white-text {
    font-size: 19px;
  }
  .mt-12 {
    margin-top: 12px;
  }
}
</style>
<script>
export default {
  components: {},
};
</script>

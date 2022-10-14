<template>
  <header class="base-page-header" :class="{ 'base-page-header--items-start': itemsStart }">
    <go-back-btn class="base-page-header__go-back" back-to="Home" />

    <h1 class="base-page-header__title"><slot /></h1>
  </header>
</template>

<script>
import GoBackBtn from '@/components/GoBackBtn';

export default {
  name: 'BasePageHeader',
  components: {
    GoBackBtn,
  },
  props: {
    itemsStart: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.base-page-header {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 48px;
  margin-bottom: 36px;

  &--items-start {
    .base-page-header__go-back {
      top: 0;
      transform: none;
    }
  }

  &__go-back {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }

  &__title {
    width: 100%;
    font-size: 18px;
    font-weight: 600;
    line-height: 38px;
    text-align: center;
  }
}
</style>

<template>
  <header class="settings-page-header" :class="{ 'settings-page-header--items-start': itemsStart }">
    <go-back-btn class="settings-page-header__go-back" />

    <h1 class="settings-page-header__title"><slot /></h1>
  </header>
</template>

<script>
import GoBackBtn from '@/components/GoBackBtn';

export default {
  name: 'SettingsPageHeader',
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
.settings-page-header {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 48px;
  margin-bottom: 36px;

  &--items-start {
    .settings-page-header__go-back {
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

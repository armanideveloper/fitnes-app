<template>
  <aside class="settings-menu" v-click-outside="closeMenu">
    <div class="settings-menu__header">
      <h2 class="settings-menu__title">Settings</h2>

      <button class="settings-menu__close-btn" @click="closeMenu">
        <img :src="require('@/assets/images/icons/outline-x.svg')" alt="Close" />
      </button>
    </div>

    <div class="settings-menu__user user">
      <img :src="require('@/assets/images/avatar.png')" alt="" class="user__avatar" />

      <p class="user__name">Victor Lemme</p>

      <p class="user__email">victorlemme@gmail.com</p>
    </div>

    <nav class="settings-menu__nav">
      <ul class="settings-menu__menu">
        <settings-menu-item
          v-for="(item, index) in settingsMenuItems"
          :key="`setting-menu-item_${index}`"
          :text="item.text"
          :icon="item.icon"
          :to="item.to"
          :text-color="item.textColor"
          :icon-wrapper-bg="item.iconWrapperBg"
        />
      </ul>
    </nav>
  </aside>
</template>

<script>
import SettingsMenuItem from '@/components/SettingsMenuItem';

export default {
  name: 'SettingsMenu',
  components: {
    SettingsMenuItem,
  },
  data: () => ({
    settingsMenuItems: [
      {
        to: 'Profile',
        text: 'Edit Profile',
        icon: 'profile-2',
        iconWrapperBg: '#FFEEE4',
      },
      {
        to: 'Settings',
        text: 'Settings',
        icon: 'settings',
        iconWrapperBg: '#E3F5FF',
      },
      {
        to: 'Payments',
        text: 'Payments history',
        icon: 'wallet',
        iconWrapperBg: '#E7FFF9',
      },
      {
        to: 'ChangePassword',
        text: 'Change Password',
        icon: 'outline-check',
        iconWrapperBg: '#FFE3E3',
      },
      {
        to: 'Legal',
        text: 'Legal',
        icon: 'outline-exclamation-circle',
        iconWrapperBg: '#E7E3FF',
      },
      {
        to: 'Logout',
        text: 'Logout',
        icon: 'outline-logout',
        iconWrapperBg: '#FFE6E6',
        textColor: 'red',
      },
    ],
  }),
  methods: {
    closeMenu() {
      this.$emit('close-settings');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars/_colors.scss';

.settings-menu {
  position: absolute;
  top: 50%;
  left: -100%;
  width: 298px;
  height: 90vh;
  padding: 65px 22px 22px;
  background: #fff;
  box-shadow: 0 4px 50px 12px rgba(117, 125, 132, 0.35);
  border-radius: 34px;
  z-index: 2;
  transform: translateY(-50%);
  transition: all 0.3s ease-in-out;
  opacity: 0;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  &.opened {
    left: 0;
    opacity: 1;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 18px;
  }

  &__title {
    font-size: 22px;
    font-weight: 600;
  }

  &__close-btn {
    display: grid;
    place-items: center;
    width: 48px;
    height: 48px;
    box-shadow: 0 0 50px rgba(153, 153, 153, 0.25);
    border-radius: 10px;
  }

  &__user {
    display: grid;
    grid-template-columns: 56px 1fr;
    grid-template-rows: repeat(2, auto);
    grid-column-gap: 6px;
    margin-bottom: 22px;
  }
}

.user {
  &__avatar {
    grid-row: span 2;
    width: 100%;
    height: 56px;
    border-radius: 50%;
    object-fit: cover;
  }

  &__name {
    align-self: self-end;
    padding-left: 9px;
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
  }

  &__email {
    align-self: self-start;
    color: $grey;
    font-size: 12px;
    line-height: 21px;
  }
}
</style>

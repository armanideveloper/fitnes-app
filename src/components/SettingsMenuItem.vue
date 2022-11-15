<template>
  <li class="settings-menu-item">
    <a class="settings-menu-item__link" @click.prevent="onLinkClick(func)">
      <div class="settings-menu-item__icon-wrapper" :style="{ backgroundColor: iconWrapperBg }">
        <img :src="require(`@/assets/images/icons/${icon}.svg`)" :alt="icon" />
      </div>

      <p class="settings-menu-item__name" :class="nameColor" :style="{ color: textColor }">
        {{ text }}
      </p>

      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.5 5C8.5 5 15.5 9.144 15.5 12C15.5 14.855 8.5 19 8.5 19"
          :stroke="textColor ? textColor : '#607080'"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </a>
  </li>
</template>

<script>
import actionTypes from '@/store/types/action-types';

export default {
  name: 'SettingsMenuItem',
  props: {
    to: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      required: true,
      default: '',
    },
    iconWrapperBg: {
      type: String,
    },
    text: {
      type: String,
      required: true,
      default: '',
    },
    textColor: {
      type: String,
    },
    func: {
      type: String,
    },
  },
  computed: {
    nameColor() {
      if (!this.textColor) return;

      return `setting-menu-item__name--${this.textColor}`;
    },
  },
  methods: {
    onLinkClick(func) {
      if (func) {
        this[func]();
      }

      this.$router.push({ name: this.to });
    },
    logout() {
      this.$store.dispatch(actionTypes.LOGOUT);
    },
  },
};
</script>

<style lang="scss" scoped>
.settings-menu-item {
  padding: 7px 12px;
  box-shadow: 0 19px 50px rgba(219, 224, 225, 0.8);
  border-radius: 10px;

  & + .settings-menu-item {
    margin-top: 14px;
  }

  &__link {
    display: grid;
    grid-template-columns: 34px 1fr 24px;
    grid-column-gap: 12px;
    align-items: center;
  }

  &__icon-wrapper {
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
    border-radius: 6px;
  }

  &__name {
    font-size: 14px;
    line-height: 17px;
  }
}
</style>

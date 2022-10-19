<template>
  <div class="pt-42 settings">
    <div class="container">
      <base-page-header>Settings</base-page-header>

      <article>
        <ul class="settings__list">
          <li class="settings__item settings-item">
            Notifications
            <base-toggle
              id="notifications-toggle"
              :default-state="areNotifications"
              @change-toggle-val="toggleNotifications"
            />
          </li>
          <li class="settings__item settings-item">
            Switch to Romanian
            <base-toggle id="romanian-toggle" :default-state="isRomanianLang" @change-toggle-val="toggleRomanianLang" />
          </li>
          <li class="settings__item settings-item settings-item--column">
            Set weekly target
            <div class="settings-item__radio-buttons">
              <div
                class="settings-item__radio-wrapper"
                v-for="(target, index) in weeklyTargetOptions"
                :key="`weekly-target_${index}`"
              >
                <input
                  :id="`target-item-${target}`"
                  class="settings-item__radio-input"
                  :value="target"
                  type="radio"
                  v-model="weeklyTarget"
                />
                <label :for="`target-item-${target}`" class="settings-item__radio-label">{{ target }}</label>
              </div>
            </div>
          </li>
        </ul>
      </article>
    </div>
  </div>
</template>

<script>
import BaseToggle from '@/components/BaseToggle';
import BasePageHeader from '@/components/BasePageHeader';

export default {
  name: 'SettingsView',
  components: { BaseToggle, BasePageHeader },
  metaInfo: {
    title: 'Settings',
  },
  data() {
    return {
      areNotifications: false,
      isRomanianLang: false,
      weeklyTarget: 1,
      weeklyTargetOptions: [1, 2, 3, 4, 5, 6, 7],
    };
  },
  methods: {
    toggleNotifications() {
      this.areNotifications = !this.areNotifications;
    },
    toggleRomanianLang() {
      this.isRomanianLang = !this.isRomanianLang;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars/_colors.scss';

.settings {
  font-family: 'Inter', sans-serif;

  &__list {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  &__item {
    padding: 15px;
    background: #fff;
    box-shadow: 0 19px 50px rgba(219, 224, 225, 0.8);
    border-radius: 10px;
  }
}

.settings-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  line-height: 17px;

  &--column {
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
  }

  &__radio-buttons {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  &__radio-label {
    display: grid;
    place-items: center;
    width: 35px;
    height: 35px;
    color: $grey;
    font-size: 16px;
    line-height: 19px;
    background-color: $light-grey-2;
    border-radius: 8px;
    transition: all 0.3s ease-in-out;
  }

  &__radio-input {
    display: none;

    &:checked {
      & + .settings-item__radio-label {
        color: #fff;
        background-color: $blue;
      }
    }
  }
}
</style>

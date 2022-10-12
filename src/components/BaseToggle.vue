<template>
  <label class="toggle" :class="{ active: isActive }">
    <span class="toggle__label"><slot /></span>

    <input
      :id="`${id}-toggle`"
      v-model="checkedValue"
      class="toggle__checkbox"
      type="checkbox"
      @change="changeToggleVal"
    />
    <span class="toggle__switch"></span>
  </label>
</template>

<script>
export default {
  name: 'BaseToggle',
  props: {
    defaultState: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
      default: 'primary',
    },
  },
  data() {
    return {
      currentState: this.defaultState,
    };
  },
  watch: {
    defaultState: {
      handler(val) {
        this.currentState = val;
      },
      immediate: true,
    },
  },
  computed: {
    isActive() {
      return this.currentState;
    },
    checkedValue: {
      get() {
        return this.currentState;
      },
      set(newValue) {
        this.currentState = newValue;
      },
    },
  },
  methods: {
    changeToggleVal() {
      this.$emit('change-toggle-val', this.currentState);
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/vars/_colors.scss';

.toggle {
  display: flex;
  gap: 10px;
  align-items: center;
  user-select: none;
  cursor: pointer;

  &.active {
    .toggle__switch {
      &::after {
        left: 0;
        background: $blue;
        transform: translateX(calc(100% + 1px)) translateY(-50%);
      }
    }
  }

  &__checkbox {
    opacity: 0;
    position: absolute;
    width: 1px;
    height: 1px;
  }

  &__switch {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 14px;
    border-radius: 14px;
    background: $light-grey-2;
    transition: all 0.25s;

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      display: block;
      height: 18px;
      width: 18px;
      border-radius: 50%;
      transform: translateX(0) translateY(-50%);
      transition: all 0.25s cubic-bezier(0.5, -0.6, 0.5, 1.6);
    }

    &::after {
      background: $dark-grey;
    }
  }
}
</style>

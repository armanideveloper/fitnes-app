<template>
  <label class="toggle" :class="{ active: currentState }">
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
      default: 'base-toggle',
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

  &.primary {
    gap: 4px;

    .toggle__switch {
      width: 36px;
      height: 22px;
      background: $grey-100;

      &::after {
        left: 2px;
        background: #fff;
        box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06);
      }
    }

    &.active {
      .toggle__switch {
        background: $blue;

        &::after {
          left: 0;
          background: #fff;
          transform: translateX(calc(100% - 2px)) translateY(-50%);
        }
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
      background: $dark-grey;
      border-radius: 50%;
      transform: translateX(0) translateY(-50%);
      transition: all 0.25s cubic-bezier(0.5, -0.6, 0.5, 1.6);
    }
  }
}
</style>

<template>
  <div class="checked">
    <input class="checked__input" type="checkbox" id="checked" :value="value" v-model="model" />
    <label class="checked__label" for="checked">{{ text }}</label>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
    },
    value: {
      type: Boolean,
    },
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
};
</script>

<style lang="scss">
.checked {
  display: flex;
  align-items: center;

  &__input {
    width: 24px;
    height: 24px;

    &::before,
    &::after {
      position: relative;
      display: block;
      width: 24px;
      height: 24px;
      border: unset;
      content: '';
    }

    &::before {
      background: #fff;
    }

    &::after {
      left: 1px;
      top: -24px;
      background: #4fc068 no-repeat center;
    }

    &:not(:disabled):checked::after {
      background-image: url('../assets/images/icons/checked.svg');
    }

    &:not(:disabled)::after {
      background-image: linear-gradient(135deg, #4fc068 0%, #4fc068 100%);
      border-color: #4fc068;
      border-radius: 5px;
      cursor: pointer;
    }
  }

  &__label {
    cursor: pointer;
    margin-left: 12px;
    font-weight: 400;
    font-size: 14px;
    color: $dark-black;
  }
}
</style>

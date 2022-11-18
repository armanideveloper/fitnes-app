<template>
  <label class="base-text-label" :for="id">
    <slot />
    <input
      :id="id"
      :name="id"
      class="base-text-input"
      :style="{ 'text-align': inputTextAlign }"
      :type="type"
      :value="value"
      @input="changeInputVal"
      v-bind="$attrs"
    />
  </label>
</template>

<script>
export default {
  name: 'BaseInput',
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      required: true,
      default: 'base-text-input',
    },
    type: {
      type: String,
      default: 'text',
      validator(value) {
        return ['text', 'password'].includes(value);
      },
    },
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    inputTextAlign: {
      type: String,
      default: 'center',
      validator(value) {
        return ['left', 'right', 'center', 'justify', 'initial', 'inherit'].includes(value);
      },
    },
  },
  methods: {
    changeInputVal(e) {
      this.$emit('input', e.target.value);
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/vars/_mixins.scss';

.base-text-label {
  @include base-label-mixin;
}

.base-text-input {
  @include base-input-mixin;
}
</style>

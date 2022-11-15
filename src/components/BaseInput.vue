<template>
  <div>
    <p>{{ title }}</p>
    <input v-bind="$attrs" />
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    value: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars/_colors.scss';

div {
  position: relative;
  input {
    display: block;
    width: 100%;
    height: 52px;
    border: 1px solid #eaeaea;
    border-radius: 42px;
    padding: 15px 18px;
  }
  p {
    background: #fff;
    display: inline-block;
    font-weight: 400;
    font-size: 12px;
    color: $light-black;
    position: absolute;
    left: 39px;
    top: -5px;
  }
}
</style>

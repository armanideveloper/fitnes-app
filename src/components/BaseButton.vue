<template>
  <button>
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
};
</script>

<style lang="scss">
@import '@/assets/styles/vars/_colors.scss';

.small-blue-btn {
  display: block;
  padding: 7px 0;
  color: #fff;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.02em;
  background: #0094ff;
  border: 1px solid #e9edef;
  border-radius: 40px;
}

.base-blue-btn {
  display: block;
  max-width: 332px;
  width: 100%;
  margin: 0 auto;
  padding: 11px 0;
  color: #fff;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  background-color: $blue;
  border-radius: 10px;
}
</style>

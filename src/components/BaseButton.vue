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
.small-btn {
  display: block;
  padding: 7px 0;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.02em;
  background: $blue;
  border: 1px solid $snow-white-2;
  border-radius: 40px;
  cursor: pointer;
}

.base-btn {
  display: block;
  max-width: 332px;
  width: 100%;
  margin: 0 auto;
  padding: 15px 0;
  color: #fff;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  background-color: $blue;
  border-radius: 10px;
  cursor: pointer;

  &--white {
    color: $grey;
    background: #fff;
    box-shadow: 0 10px 60px rgba(219, 224, 225, 0.8);
  }

  &:disabled {
    background-color: rgba($blue, 0.5);
  }
}
</style>

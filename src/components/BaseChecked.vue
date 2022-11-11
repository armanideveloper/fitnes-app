<template>
  <div>
    <input type="checkbox" id="checked" />
    <label for="checked">{{ text }}</label>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars/_colors.scss';

div {
  display: flex;
  align-items: center;
  input {
    width: 24px;
    height: 24px;
  }
  input[type='checkbox']:before {
    position: relative;
    display: block;
    width: 24px;
    height: 24px;
    border: unset;
    content: '';
    background: #fff;
  }

  input[type='checkbox']:after {
    position: relative;
    display: block;
    left: 1px;
    top: -24px;
    width: 24px;
    height: 24px;
    border: unset;
    content: '';
    background-image: #4fc068;
    background-repeat: no-repeat;
    background-position: center;
  }

  input[type='checkbox']:not(:disabled):checked:after {
    background-image: url('../assets/images/icons/checked.svg');
  }

  input[type='checkbox']:not(:disabled):after {
    cursor: pointer;
    background-image: linear-gradient(135deg, #4fc068 0%, #4fc068 100%);
    border-color: #4fc068;
    border-radius: 5px;
  }
  label {
    cursor: pointer;
    margin-left: 12px;
    font-weight: 400;
    font-size: 14px;
    color: $dark-black;
  }
}
</style>

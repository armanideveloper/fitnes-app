<template>
  <div @click="$router.go(-1)">
    <img :src="require('@/assets/images/icons/goBack.svg')" alt="go back" />
  </div>
</template>

<style lang="scss" scoped>
div {
  flex: none;
  cursor: pointer;
  position: relative;
  width: 48px;
  height: 48px !important;
  background: #ffffff;
  box-shadow: 0 0 50px rgba(153, 153, 153, 0.25);
  border-radius: 10px;

  img {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
  }
}
</style>

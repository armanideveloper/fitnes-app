<template>
  <router-link :to="{ name: backTo }" class="go-back-btn">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.5 19C15.5 19 8.5 14.856 8.5 12C8.5 9.145 15.5 5 15.5 5"
        stroke="#031418"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </router-link>
</template>

<script>
export default {
  name: 'GoBackBtn',
  props: {
    backTo: {
      type: String,
      required: true,
      default: 'Home',
    },
  },
};
</script>

<style lang="scss" scoped>
.go-back-btn {
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  background: #fff;
  box-shadow: 0 0 50px rgba(153, 153, 153, 0.25);
  border-radius: 10px;
}
</style>

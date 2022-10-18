<template>
  <section class="images-block">
    <img
      v-for="(image, index) in images"
      :key="`images-item_${index}`"
      :src="require(`@/assets/images/${image}.jpg`)"
      alt=""
      class="images-block__img"
    />
  </section>
</template>

<script>
export default {
  name: 'ImagesBlockScrollable',
  props: {
    images: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
};
</script>

<style lang="scss">
.images-block {
  display: flex;
  flex-wrap: nowrap;
  gap: 23px;
  width: fit-content;
  margin-right: -22px;
  margin-bottom: 41px;
  padding: 0 22px 0 0;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>

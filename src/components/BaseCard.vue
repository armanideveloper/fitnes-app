<template>
  <article class="base-card">
    <slot name="subtitle"></slot>
    <slot name="title"></slot>
    <slot name="number"></slot>
  </article>
</template>

<script>
export default {
  name: 'BaseCard',
};
</script>

<style lang="scss">
.base-card {
  @include base-card-mixin;
}
</style>

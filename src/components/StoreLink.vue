<template>
  <article class="store-link">
    <main class="store-link__main">
      <div class="store-link__icon"></div>

      <h3 class="store-link__title">{{ link.title }}</h3>
    </main>

    <footer class="store-link__footer">
      <router-link :to="{ name: link.to }" v-slot="{ navigate }" custom>
        <base-button class="small-btn store-link__btn" @click.native="navigate">More</base-button>
      </router-link>
    </footer>
  </article>
</template>

<script>
import BaseButton from '@/components/BaseButton';

export default {
  name: 'StoreLink',
  components: {
    BaseButton,
  },
  props: {
    link: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.store-link {
  @include store-card;

  &__main {
    @include store-card-main;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 14px 5px 26px 5px;
    text-align: center;
  }

  &__icon {
    width: 48px;
    height: 48px;
    margin-bottom: 18px;
    background: radial-gradient(50% 50% at 50% 50%, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  }

  &__title {
    flex: 1;
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 22px;
    line-height: 22px;
  }

  &__footer {
    @include store-card-footer;
  }

  &__btn {
    @include store-card-btn;
    width: 66px;
  }
}
</style>

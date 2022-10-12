<template>
  <article class="info-card">
    <div class="info-card__img-wrapper">
      <img class="info-card__img" :src="require(`@/assets/images/icons/${img}.svg`)" alt="" />
    </div>

    <h2 class="info-card__value">{{ value }}</h2>

    <p class="info-card__text">{{ text }}</p>

    <span v-if="time" class="info-card__time">{{ time }}</span>
  </article>
</template>

<script>
export default {
  name: 'InfoCard',
  props: {
    img: {
      type: String,
      required: true,
      default: '',
    },
    value: {
      type: String,
      required: true,
      default: '',
    },
    text: {
      type: String,
      required: true,
      default: '',
    },
    time: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars/_colors.scss';
@import '@/assets/styles/vars/_mixins.scss';

.info-card {
  @include base-card-mixin;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 4px 4px;
  color: $green;

  &--dark-blue {
    color: #fff;
    background-color: $dark-blue;

    .info-card__img-wrapper {
      background-color: rgba(217, 217, 217, 0.2);
    }
  }

  &--blue {
    color: #fff;
    background-color: $blue;

    .info-card__img-wrapper {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }

  &__img-wrapper {
    display: grid;
    place-items: center;
    width: 35px;
    height: 35px;
    margin-bottom: 8px;
    border-radius: 50%;
  }

  &__value {
    font-size: 22px;
    font-weight: 600;
  }

  &__text {
    font-size: 14px;
  }

  &__time {
    font-size: 8px;
  }
}
</style>

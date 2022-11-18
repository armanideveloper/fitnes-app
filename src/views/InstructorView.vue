<template>
  <article class="instructor">
    <div class="container">
      <div class="instructor__wrapper">
        <images-block-scrollable :images="images" />

        <div class="instructor__main">
          <section class="instructor__main-info main-info">
            <div class="main-info__top">
              <div class="main-info__img-wrapper">
                <img
                  v-if="instructor.img"
                  class="main-info__img"
                  :src="require(`@/assets/images/${instructor.img}.png`)"
                  alt=""
                />
                <img v-else :src="require('@/assets/images/icons/user-01.svg')" alt="" />

                <img
                  class="main-info__verified"
                  :src="require('@/assets/images/icons/verified-tick.svg')"
                  alt="Verified"
                />
              </div>

              <div class="main-info__name-position">
                <h2 class="main-info__name">{{ instructor.name }}</h2>

                <p class="main-info__position">{{ instructor.position }}</p>
              </div>

              <base-button class="small-btn">+ Connect</base-button>
            </div>

            <p class="main-info__rating">
              <img :src="require('@/assets/images/icons/star-2.svg')" alt="" />
              {{ instructor.rating }}
            </p>

            <p class="main-info__description">{{ instructor.description }}</p>
          </section>

          <section class="instructor__workouts workouts">
            <h3 class="workouts__title">Workouts</h3>

            <ul class="workouts__list">
              <li v-for="(workout, index) in instructor.workouts" :key="`workout_${index}`" class="workouts__item">
                <img :src="require(`@/assets/images/icons/${workout.icon}.svg`)" alt="" />
                {{ workout.name }}
              </li>
            </ul>
          </section>

          <section class="instructor__links">
            <router-link :to="{ name: 'InstructorPackages' }" v-slot="{ navigate }">
              <base-button class="small-btn" @click.native="navigate">View packages</base-button>
            </router-link>

            <router-link :to="{ name: 'InstructorSchedule' }" v-slot="{ navigate }">
              <base-button class="small-btn" @click.native="navigate">View schedule</base-button>
            </router-link>
          </section>

          <section class="instructor__ratings ratings">
            <h3 class="ratings__title">Ratings</h3>

            <div class="ratings__data">
              <p class="ratings__value">{{ instructor.rating }}</p>
              <p class="ratings__reviews-amount">Based on {{ instructor.reviews }} reviews</p>
            </div>

            <ul class="ratings__list">
              <li
                v-for="(rating, index) in instructor.ratings"
                :key="`rating-item__${index}`"
                class="ratings__item ratings-item"
              >
                <p class="ratings-item__percent">{{ rating.percent }}%</p>

                <div class="ratings-item__stars">
                  <svg
                    v-for="i in 5"
                    :key="i"
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.52447 0.463524C6.67415 0.00286841 7.32585 0.00286996 7.47553 0.463525L8.68386 4.18237C8.75079 4.38838 8.94277 4.52786 9.15938 4.52786H13.0696C13.554 4.52786 13.7554 5.14767 13.3635 5.43237L10.2001 7.73075C10.0248 7.85807 9.95149 8.08375 10.0184 8.28976L11.2268 12.0086C11.3764 12.4693 10.8492 12.8523 10.4573 12.5676L7.29389 10.2693C7.11865 10.1419 6.88135 10.1419 6.70611 10.2693L3.54267 12.5676C3.15081 12.8523 2.62357 12.4693 2.77325 12.0086L3.98157 8.28976C4.04851 8.08375 3.97518 7.85807 3.79994 7.73075L0.636495 5.43237C0.244639 5.14767 0.446028 4.52786 0.93039 4.52786H4.84062C5.05723 4.52786 5.24921 4.38838 5.31614 4.18237L6.52447 0.463524Z"
                      :fill="i - 1 < rating.stars ? '#F5AE36' : '#E9EDEF'"
                    />
                  </svg>
                </div>

                <progress class="ratings-item__line" :value="rating.percent" max="100"></progress>
              </li>
            </ul>
          </section>

          <section class="instructor__contacts contacts">
            <h2 class="contacts__title">Contact</h2>

            <ul class="contacts__list">
              <li v-for="(contact, index) in instructor.contacts" :key="`contact-link_${index}`" class="contacts__item">
                <a class="contacts__link" :href="contact.link" target="_blank" rel="nofollow noopener noreferrer">
                  <img :src="require(`@/assets/images/icons/${contact.icon}.svg`)" alt="" />
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import BaseButton from '@/components/BaseButton';
import ImagesBlockScrollable from '@/components/ImagesBlockScrollable';

export default {
  name: 'InstructorView',
  components: {
    BaseButton,
    ImagesBlockScrollable,
  },
  metaInfo: {
    title: 'Instructor',
  },
  data() {
    return {
      images: ['pic-training', 'pic-training', 'pic-training', 'pic-training', 'pic-training'],
      instructor: {
        img: 'marcus',
        name: 'Marcus',
        position: 'Certified coach',
        rating: 4.8,
        description:
          'Marcus is a certified coach. Marcus is a certified coach. Marcus is a certified coach. Marcus  is a certified coach. Marcus  is a certified coach. Marcus  is a certified coach.',
        workouts: [
          { icon: 'book', name: 'HIIT, PT 1-to-1, PT 1-to-4' },
          { icon: 'level', name: 'Level: Beginner, Advanced' },
        ],
        reviews: 50,
        ratings: [
          {
            percent: 65,
            stars: 5,
          },
          {
            percent: 20,
            stars: 4,
          },
          {
            percent: 5,
            stars: 3,
          },
          {
            percent: 5,
            stars: 2,
          },
          {
            percent: 5,
            stars: 1,
          },
        ],
        contacts: [
          {
            icon: 'phone',
            link: '',
          },
          {
            icon: 'instagram',
            link: '',
          },
          {
            icon: 'fb',
            link: '',
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars/_colors.scss';

@mixin section-title {
  color: $black-2;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: -0.02em;
}

.instructor {
  padding-top: 15px;
  font-family: 'Roboto', sans-serif;

  &__wrapper {
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 15px);
  }

  &__main {
    flex: 1;
    margin: 0 -22px;
    padding: 55px 15px 52px;
    background: #fff;
    box-shadow: 0px -4px 81px #efefef;
    border-radius: 32px 32px 0 0;
  }

  &__links {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 36px;
    margin-bottom: 26px;
  }
}

.main-info {
  margin-bottom: 22px;

  &__top {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  }

  &__img-wrapper {
    position: relative;
    display: grid;
    place-items: center;
    width: 72px;
    height: 72px;
    margin-right: 18px;
    background-color: $grey-100;
    border-radius: 50%;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__verified {
    position: absolute;
    right: 2px;
    bottom: 2px;
  }

  &__name-position {
    flex: 1;
    margin-right: 23px;
  }

  &__name {
    margin-bottom: 10px;
    color: $grey-2;
    font-size: 22px;
    line-height: 26px;
    letter-spacing: -0.02em;
  }

  &__position {
    color: $black-2;
    font-size: 20px;
    line-height: 18px;
    letter-spacing: -0.02em;
  }

  &__rating {
    display: flex;
    gap: 5px;
    margin-bottom: 5px;
    color: #000;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.02em;
  }

  &__description {
    color: $grey-2;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: -0.02em;
  }

  .small-btn {
    padding: 7px 16px;
  }
}

.workouts {
  margin-bottom: 28px;

  &__title {
    @include section-title;
    margin-bottom: 18px;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 12px;
    color: $dark-grey-2;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.02em;

    & + .workouts__item {
      margin-top: 12px;
    }
  }
}

.ratings {
  margin-bottom: 22px;

  &__title {
    @include section-title;
    margin-bottom: 8px;
  }

  &__data {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 6px;
  }

  &__value {
    color: #000;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: -0.02em;
  }

  &__reviews-amount {
    color: $grey-2;
    font-size: 13px;
    line-height: 18px;
    letter-spacing: -0.02em;
  }
}

.ratings-item {
  display: grid;
  grid-template-columns: 32px 86px 1fr;
  grid-column-gap: 8px;
  align-items: center;

  & + .ratings-item {
    margin-top: 4px;
  }

  &__percent {
    //margin-right: 8px;
    color: $black-2;
    font-size: 13px;
    line-height: 18px;
    letter-spacing: -0.02em;
  }

  &__stars {
    margin-right: 12px;
  }

  &__line {
    width: 100%;
    height: 8px;
    border: 0;
    background-color: $grey-2;

    &::-webkit-progress-bar {
      width: 100%;
      height: 10px;
      border: 0;
      background-color: $snow-white-2;
    }

    &::-webkit-progress-value {
      height: 10px;
      background-color: $grey-2;
      border: 0;
    }

    &::-moz-progress-bar {
      width: 100%;
      height: 10px;
      border: 0;
      background-color: $snow-white-2;
    }
  }
}

.contacts {
  &__title {
    @include section-title;
    margin-bottom: 20px;
  }

  &__list {
    display: flex;
    align-items: center;
    gap: 25px;
  }

  &__item {
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
  }

  &__link {
    display: grid;
    place-items: center;
  }
}
</style>

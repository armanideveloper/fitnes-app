<template>
  <article class="instructors">
    <div class="container">
      <div class="instructors__wrapper">
        <images-block-scrollable :images="carouselImages" />

        <div class="instructors__main">
          <div class="container">
            <form class="instructors__search-form search-form" @submit.prevent="searchHandler">
              <input class="search-form__input" type="text" v-model="searchStr" placeholder="Search instructor" />
              <button class="search-form__btn">
                <img :src="require('@/assets/images/icons/search.svg')" alt="" />
              </button>
            </form>

            <div class="instructors__top instructors-top">
              <h2 class="instructors-top__title">Top instructors</h2>

              <ul class="instructors-top__list">
                <li
                  v-for="instructor in topInstructors"
                  :key="instructor.id"
                  class="instructors-top__item instructors-top-card"
                >
                  <article class="instructors-top-card__content">
                    <div class="instructors-top-card__img-title">
                      <img
                        class="instructors-top-card__img"
                        :src="require(`@/assets/images/${instructor.img}.jpg`)"
                        alt=""
                      />
                      <h3 class="instructors-top-card__title">{{ instructor.name }}</h3>
                    </div>

                    <footer class="instructors-top-card__footer">
                      <base-button class="small-btn">Details</base-button>
                    </footer>
                  </article>
                </li>
              </ul>
            </div>

            <ul
              v-for="(instructorArr, index) in instructors"
              :key="`instructors-list_${index}`"
              class="instructors__list"
            >
              <li
                v-for="(instructor, index) in instructorArr"
                :key="`instructor_${index}`"
                class="instructors__list-item instructors-item"
              >
                <router-link :to="{ name: 'Instructor', params: { id: instructor.id } }">
                  <div
                    class="instructors-item__img-wrapper"
                    :class="{ 'instructors-item__img-wrapper--bordered': !instructor.img }"
                  >
                    <img
                      v-if="instructor.img"
                      class="instructors-item__img"
                      :src="require(`@/assets/images/${instructor.img}.png`)"
                      alt=""
                    />
                    <img v-else :src="require('@/assets/images/icons/user-01.svg')" alt="" />

                    <img
                      class="instructors-item__verified"
                      :src="require('@/assets/images/icons/verified-tick.svg')"
                      alt="Verified"
                    />
                  </div>

                  <h3 class="instructors-item__name">{{ instructor.name }}</h3>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import BaseButton from '@/components/BaseButton';
import ImagesBlockScrollable from '@/components/ImagesBlockScrollable';

export default {
  name: 'InstructorsView',
  components: {
    BaseButton,
    ImagesBlockScrollable,
  },
  metaInfo: {
    title: 'Instructors',
  },
  data() {
    return {
      carouselImages: ['pic-training', 'pic-training', 'pic-training', 'pic-training', 'pic-training'],
      searchStr: '',
      topInstructors: [
        {
          id: 1,
          name: 'Mark',
          img: 'mark',
        },
        {
          id: 2,
          name: 'Mark',
          img: 'mark',
        },
        {
          id: 3,
          name: 'Marco',
          img: 'mark',
        },
      ],
      instructors: [
        [
          { id: 1, name: 'Marcus', img: 'marcus' },
          { id: 2, name: 'Marcus', img: '' },
          { id: 3, name: 'Marcus', img: '' },
          { id: 4, name: 'Marcus', img: '' },
          { id: 5, name: 'Marcus', img: '' },
        ],
        [
          { id: 4, name: 'Marcus', img: '' },
          { id: 5, name: 'Marcus', img: '' },
          { id: 6, name: 'Marcus', img: '' },
          { id: 7, name: 'Marcus', img: '' },
          { id: 8, name: 'Marcus', img: '' },
        ],
      ],
    };
  },
  methods: {
    searchHandler() {
      console.log(this.searchStr);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars/_colors.scss';

.instructors {
  padding-top: 15px;

  .images-block {
    margin-bottom: 24px;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 15px - 101px);
  }

  &__main {
    flex: 1;
    margin: 0 -22px;
    padding: 10px 0;
    background: #fff;
    box-shadow: 0px -4px 81px #efefef;
    border-radius: 32px 32px 0 0;
  }

  &__list {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(125px, 1fr));
    grid-auto-flow: column;
    grid-auto-columns: minmax(125px, 1fr);
    margin-right: -22px;
    padding: 0 22px 0 0;
    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    & + .instructors__list {
      margin-top: 28px;
    }
  }
}

.search-form {
  position: relative;
  margin-bottom: 20px;

  &__input {
    width: 100%;
    padding: 12px;
    color: #6c7884;
    font-size: 12px;
    line-height: 24px;
    background: $light-grey-3;
    border-radius: 10px;
  }

  &__btn {
    position: absolute;
    top: 50%;
    right: 12px;
    width: 24px;
    height: 24px;
    transform: translateY(-50%);
  }
}

.instructors-top {
  margin-bottom: 40px;

  &__title {
    margin-bottom: 21px;
    font-weight: 500;
    font-size: 24px;
    line-height: 22px;
  }

  &__list {
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
    grid-auto-flow: column;
    grid-auto-columns: minmax(190px, 1fr);
    margin-right: -22px;
    margin-bottom: 41px;
    margin-left: -6px;
    padding: 0 22px 40px 6px;
    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__item {
    background-color: #fff;
    border-radius: 10px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
}

.instructors-top-card {
  &__img-title {
    position: relative;
    height: 150px;
  }

  &__img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }

  &__title {
    position: absolute;
    left: 50%;
    bottom: 12px;
    color: #fff;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    transform: translateX(-50%);
  }

  &__footer {
    display: flex;
    justify-content: center;
    padding: 22px 0 16px;

    .small-btn {
      width: 90px;
      padding: 0;
      font-size: 12px;
      line-height: 22px;
    }
  }
}

.instructors-item {
  padding: 13px 17px;
  color: #fff;
  text-align: center;
  background-color: $dark-blue;
  border-radius: 10px;

  &__img-wrapper {
    position: relative;
    display: grid;
    place-items: center;
    width: 90px;
    height: 90px;
    margin-bottom: 12px;
    background-color: $grey-100;
    border-radius: 50%;
    box-shadow: 0 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03);

    &--bordered {
      border: 4px solid #fff;
    }
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__verified {
    position: absolute;
    bottom: 2px;
    right: 2px;
  }
}
</style>

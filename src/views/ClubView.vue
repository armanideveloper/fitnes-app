<template>
  <article class="club-page">
    <div class="container">
      <images-block-scrollable :images="images" />

      <section class="club-about">
        <div class="club-about__info">
          <div class="club-about__avatar-wrapper">
            <img class="club-about__avatar" :src="require('@/assets/images/icons/user.svg')" alt="" />
            <img class="club-about__verified-tick" :src="require('@/assets/images/icons/verified-tick.svg')" alt="" />
          </div>

          <div class="club-about__data">
            <h1 class="club-about__name">{{ clubName }}</h1>

            <p class="club-about__address">
              <img :src="require('@/assets/images/icons/location.svg')" alt="" /> {{ clubAddress }}
            </p>
          </div>
        </div>

        <p class="club-about__rating">
          <img :src="require('@/assets/images/icons/star-2.svg')" alt="" /> {{ clubRating }}
        </p>

        <p class="club-about__description">{{ clubDescription }}</p>
      </section>

      <section class="club-facilities">
        <h3 class="club-section-title">Facilities</h3>

        <ul class="club-facilities__list">
          <li v-for="item in clubFacilities" :key="item" class="club-facilities__item">{{ item }}</li>
        </ul>

        <a href="#" class="club-facilities__link">View gym rules</a>

        <div class="club-facilities__btn-block">
          <router-link
            :to="{ name: 'Store', params: { currentComponent: 'StoreMemberships' } }"
            v-slot="{ navigate }"
            custom
          >
            <base-button class="small-btn" @click.native="navigate">View memberships</base-button>
          </router-link>
          <base-button class="small-btn">View classes</base-button>
        </div>
      </section>

      <section class="club-schedule">
        <ul class="club-schedule__table">
          <li v-for="datetime in clubSchedule" :key="datetime.day" class="club-schedule__date-time">
            <p class="club-schedule__date">{{ datetime.day }}</p>
            <p class="club-schedule__time">{{ datetime.time }}</p>
          </li>
        </ul>
      </section>

      <section class="club-contact">
        <h3 class="club-section-title">Contact</h3>

        <ul class="club-contact__list">
          <li v-for="(contact, index) in clubContact" :key="`contact-item_${index}`" class="club-contact__item">
            <div class="club-contact__icon-wrapper">
              <img class="club-contact__icon" :src="require(`@/assets/images/icons/${contact.icon}.svg`)" alt="" />
            </div>
            <a
              :href="getHref(contact.href, contact.type)"
              class="club-contact__link"
              :target="contact.type ? '_self' : '_blank'"
            >
              {{ contact.text }}</a
            >
          </li>
        </ul>
      </section>

      <section class="club-location">
        <div class="club-location__map-wrapper">
          <img class="club-location__map" :src="require('@/assets/images/map.jpg')" alt="" />
        </div>
      </section>
    </div>
  </article>
</template>

<script>
import BaseButton from '@/components/BaseButton';
import ImagesBlockScrollable from '@/components/ImagesBlockScrollable';

export default {
  name: 'ClubView',
  components: {
    BaseButton,
    ImagesBlockScrollable,
  },
  metaInfo: {
    title: 'Club',
  },
  data() {
    return {
      images: ['pic-training', 'pic-training', 'pic-training'],
      clubName: 'Moovgym',
      clubAddress: 'Str. Sovata 1, Oradea',
      clubRating: 4.8,
      clubDescription:
        'Moov Gym este o sală de fitness dedicată doamnelor și domnișoarelor dornice de mișcare și interesate de un stil de viață sănătos.',
      clubFacilities: ['Gym, sauna', 'Classes: Aerobic, HIIT, Dance'],
      clubSchedule: [
        {
          day: 'Monday',
          time: '07:00 - 22:00',
        },
        {
          day: 'Tuesday',
          time: '07:00 - 22:00',
        },
        {
          day: 'Wednesday',
          time: '07:00 - 22:00',
        },
        {
          day: 'Thursday',
          time: '07:00 - 22:00',
        },
        {
          day: 'Friday',
          time: '07:00 - 22:00',
        },
        {
          day: 'Saturday',
          time: '08:00 - 14:00',
        },
        {
          day: 'Sunday',
          time: 'Closed',
        },
      ],
      clubContact: [
        {
          icon: 'phone',
          type: 'tel',
          href: '0744123456',
          text: '0744123456',
        },
        {
          icon: 'email',
          type: 'mailto',
          href: 'contact@moovgym.ro',
          text: 'contact@moovgym.ro',
        },
        {
          icon: 'website',
          href: 'https://www.moovgym.ro',
          text: 'www.moovgym.ro',
        },
        {
          icon: 'instagram',
          href: 'https://instagram.com/moovgym',
          text: '@moovgym',
        },
        {
          icon: 'fb',
          href: 'https://fb.com/moovgym',
          text: '@moovgym',
        },
      ],
    };
  },
  methods: {
    getHref(href, type = '') {
      if (['mailto', 'tel'].includes(type)) {
        return `${type}:${href}`;
      }

      return href;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars/_colors.scss';

@mixin base-text-size {
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
}

.club-page {
  padding: 16px 0;
  font-family: 'Roboto', sans-serif;
}

.club-about {
  margin-bottom: 42px;

  &__info {
    display: grid;
    grid-template-columns: 72px 1fr;
    grid-column-gap: 20px;
    margin-bottom: 12px;
  }

  &__avatar-wrapper {
    position: relative;
    display: grid;
    place-items: center;
    width: 100%;
    height: 72px;
    background-color: $grey-100;
    border: 3px solid #fff;
    box-shadow: 0 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);
    border-radius: 50%;
  }

  &__verified-tick {
    position: absolute;
    right: 0;
    bottom: 0;
  }

  &__data {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  &__name {
    margin-bottom: 9px;
    color: #8a9395;
    font-size: 22px;
    line-height: 26px;
    letter-spacing: -0.02em;
  }

  &__address {
    display: flex;
    align-items: center;
    gap: 4px;
    font-weight: 500;
    font-size: 12px;
    line-height: 24px;
    color: $grey;
  }

  &__rating {
    display: flex;
    gap: 5px;
    margin-bottom: 10px;
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
}

.club-section-title {
  margin-bottom: 16px;
  color: $black-2;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: -0.02em;
}

.club-facilities {
  margin-bottom: 26px;

  &__list {
    margin-bottom: 18px;
    padding-left: 30px;
  }

  &__item {
    @include base-text-size;
    color: $dark-grey-2;

    & + .club-facilities__item {
      margin-top: 12px;
    }
  }

  &__link {
    @include base-text-size;
    display: inline-block;
    margin-bottom: 22px;
    color: $blue;
  }

  &__btn-block {
    display: flex;
    justify-content: space-between;
  }

  .small-btn {
    width: 150px;
    font-size: 14px;
  }
}

.club-schedule {
  margin-bottom: 26px;
  font-family: 'Poppins', sans-serif;

  &__table {
    padding: 10px 36px;
    background-color: $snow-white;
    border-radius: 10px;
  }

  &__date-time {
    display: grid;
    grid-template-columns: 1fr 98px;
    grid-column-gap: 46px;
    font-size: 15px;
    line-height: 22px;
  }

  &__date {
    color: $grey-3;
  }

  &__time {
    color: $dark-blue;
    font-weight: 600;
    text-align: center;
  }
}

.club-contact {
  margin-bottom: 26px;

  &__item {
    display: grid;
    grid-template-columns: 24px 1fr;
    grid-column-gap: 24px;
    align-items: center;
    color: $dark-blue;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;

    & + .club-contact__item {
      margin-top: 11px;
    }
  }

  &__icon-wrapper {
    display: grid;
    place-items: center;
    height: 24px;
  }
}

.club-location {
  &__map-wrapper {
    width: 100%;
    height: 233px;
  }

  &__map {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    object-fit: cover;
  }
}
</style>

<template>
  <footer class="footer">
    <div class="container">
      <nav class="footer__nav">
        <ul class="footer-menu">
          <li v-for="(link, index) in footerLinks" :key="`footer-item_${index}`" class="footer-menu__item">
            <router-link
              class="footer-menu__link footer-link"
              :to="{ path: link.path }"
              :exact="link.name === 'Home' && $route.name !== 'Home' && $route.name !== 'History'"
            >
              <div class="footer-link__icon-wrapper">
                <img
                  :src="require(`@/assets/images/icons/${link.icon}.svg`)"
                  :alt="link.icon"
                  class="footer-link__icon"
                />
              </div>

              {{ link.name }}
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
  data: () => ({
    footerLinks: [
      {
        path: '/',
        name: 'Home',
        icon: 'home',
        children: ['History'],
      },
      {
        path: '/activities',
        name: 'Activities',
        icon: 'calendar-heart',
      },
      {
        path: '/store',
        name: 'Store',
        icon: 'shopping-cart',
      },
      {
        path: '/club',
        name: 'Club',
        icon: 'building',
      },
      {
        path: '/instructors',
        name: 'Instructors',
        icon: 'users',
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars/_colors.scss';

.footer {
  position: sticky;
  bottom: 0;
  border-radius: 10px 10px 0 0;
  background: #fff;
  box-shadow: 0px -4px 32px rgba(198, 202, 202, 0.22);
  z-index: 9;

  &__nav {
    padding: 25px 0 10px;
  }
}

.footer-menu {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}

.footer-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  color: $light-grey;
  font-weight: 500;
  font-size: 10px;
  line-height: 22px;

  &.router-link-active {
    .footer-link__icon-wrapper {
      background-color: $light-green-3;
    }
  }

  &__icon-wrapper {
    display: grid;
    place-items: center;
    width: 38px;
    height: 38px;
    background-color: #fff;
    border-radius: 10px;
    transition: background-color 0.3s ease-in-out;
  }
}
</style>

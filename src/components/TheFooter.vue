<template>
  <footer class="footer">
    <div class="container">
      <nav class="footer__nav">
        <ul class="footer-menu">
          <li v-for="(link, index) in footerLinks" :key="`footer-item_${index}`" class="footer-menu__item">
            <router-link class="footer-menu__link footer-link" :to="{ name: link.to }" :exact="link.name === 'Home'">
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
        to: 'Home',
        name: 'Home',
        icon: 'home',
      },
      {
        to: 'Activities',
        name: 'Activities',
        icon: 'calendar-heart',
      },
      {
        to: 'Store',
        name: 'Store',
        icon: 'shopping-cart',
      },
      {
        to: 'Club',
        name: 'Club',
        icon: 'building',
      },
      {
        to: 'Instructors',
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
  border-radius: 10px;
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

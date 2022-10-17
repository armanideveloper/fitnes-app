import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView';
import MainView from '@/views/MainView';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: MainView,
    children: [
      { path: '', name: 'Home', component: HomeView },
      {
        path: '/history',
        name: 'History',
        component: () => import(/* webpackChunkName: "history" */ '../views/HistoryView'),
      },
    ],
  },
  {
    path: '/club',
    name: 'Club',
    component: () => import(/* webpackChunkName: "club" */ '../views/ClubView'),
  },
  {
    path: '/activities',
    name: 'Activities',
    component: () => import(/* webpackChunkName: "activities" */ '../views/ActivitiesView'),
  },
  {
    path: '/activities/bookings',
    name: 'Bookings',
    component: () => import(/* webpackChunkName: "bookings" */ '../views/BookingsView'),
  },
  {
    path: '/store',
    name: 'Store',
    component: () => import(/* webpackChunkName: "store" */ '../views/StoreView'),
  },
  {
    path: '/instructors',
    name: 'Instructors',
    component: () => import(/* webpackChunkName: "instructors" */ '../views/InstructorsView'),
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/ProfileView.vue'),
    meta: { hideFooter: true },
  },
  {
    path: '/payments',
    name: 'Payments',
    component: () => import(/* webpackChunkName: "payments" */ '../views/PaymentsView.vue'),
    meta: { hideFooter: true },
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import(/* webpackChunkName: "settings" */ '../views/SettingsView'),
    meta: { hideFooter: true },
  },
  {
    path: '/change-password',
    name: 'ChangePassword',
    component: () => import(/* webpackChunkName: "change-password" */ '../views/ChangePasswordView'),
    meta: { hideFooter: true },
  },
  {
    path: '/change-password/success',
    name: 'ChangePasswordSuccess',
    component: () => import(/* webpackChunkName: "change-password-success" */ '../views/ChangePasswordSuccessView'),
    meta: { hideFooter: true },
  },
  {
    path: '/payment',
    name: 'StorePayment',
    component: () => import(/* webpackChunkName: "store-payment" */ '../views/StorePaymentView'),
    meta: { hideFooter: true },
  },
  {
    path: '/payment/card',
    name: 'StorePaymentCard',
    component: () => import(/* webpackChunkName: "store-payment-card" */ '../views/StorePaymentCardView'),
    meta: { hideFooter: true },
  },
  {
    path: '/payment/success',
    name: 'StorePaymentSuccess',
    component: () => import(/* webpackChunkName: "payment-success" */ '../views/PaymentSuccessView'),
    meta: { hideFooter: true },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, from) => {});

export default router;

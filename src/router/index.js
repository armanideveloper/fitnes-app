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
      {
        path: '/main',
        name: 'Main',
        component: () => import(/* webpackChunkName: "main" */ '../views/MainPageView'),
        meta: { hideFooter: true },
      },
      {
        path: '/sign-in',
        name: 'SignIn',
        component: () => import(/* webpackChunkName: "login" */ '../views/LoginView'),
        meta: { hideFooter: true },
      },
      {
        path: '/sign-up',
        name: 'SingUp',
        component: () => import(/* webpackChunkName: "club" */ '../views/RegisterView'),
        meta: { hideFooter: true },
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
    path: '/store/memberships',
    name: 'StoreMemberships',
    component: () => import(/* webpackChunkName: "store-memberships" */ '../views/StoreMembershipsView'),
  },
  {
    path: '/store/packages',
    name: 'StorePackages',
    component: () => import(/* webpackChunkName: "store-packages" */ '../views/StorePackagesView'),
  },
  {
    path: '/store/workouts',
    name: 'StoreWorkouts',
    component: () => import(/* webpackChunkName: "store-workouts" */ '../views/StoreWorkoutsView'),
  },
  {
    path: '/store/events',
    name: 'StoreEvents',
    component: () => import(/* webpackChunkName: "store-events" */ '../views/StoreEventsView'),
  },
  {
    path: '/instructors',
    name: 'Instructors',
    component: () => import(/* webpackChunkName: "instructors" */ '../views/InstructorsView'),
  },
  {
    path: '/instructors/:id',
    name: 'Instructor',
    component: () => import(/* webpackChunkName: "instructor" */ '../views/InstructorView'),
  },
  {
    path: '/instructors/:id/packages',
    name: 'InstructorPackages',
    component: () => import(/* webpackChunkName: "instructor-schedule" */ '../views/InstructorPackages'),
  },
  {
    path: '/instructors/:id/schedule',
    name: 'InstructorSchedule',
    component: () => import(/* webpackChunkName: "instructor-schedule" */ '../views/InstructorSchedule'),
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

export default router;

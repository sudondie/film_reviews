import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../components/HomeView.vue';
import NewFilm from '../components/NewFilm.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/newFilm',
    name: 'newFilm',
    component: NewFilm,
  },
];
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

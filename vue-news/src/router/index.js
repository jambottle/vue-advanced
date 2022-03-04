import { createRouter, createWebHistory } from 'vue-router';

import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/news',
  },
  {
    path: '/news',
    name: 'News',
    component: NewsView,
  },
  {
    path: '/ask',
    name: 'Ask',
    component: AskView,
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: JobsView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

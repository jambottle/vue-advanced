import { createRouter, createWebHistory } from 'vue-router';

import NewsView from '@/views/NewsView.vue';
import AskView from '@/views/AskView.vue';
import JobsView from '@/views/JobsView.vue';
import UserView from '@/views/UserView.vue';

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
  {
    path: '/user/:id',
    name: 'User',
    component: UserView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

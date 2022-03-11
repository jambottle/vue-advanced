import { createRouter, createWebHistory } from 'vue-router';

import createFeedView from '@/views/createFeedView';
import ItemView from '@/views/ItemView.vue';
import UserView from '@/views/UserView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/news',
  },
  {
    path: '/news',
    name: 'NewsFeed',
    component: createFeedView('news'),
  },
  {
    path: '/ask',
    name: 'AskFeed',
    component: createFeedView('ask'),
  },
  {
    path: '/jobs',
    name: 'JobsFeed',
    component: createFeedView('jobs'),
  },
  {
    path: '/item/:id',
    name: 'Item',
    component: ItemView,
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

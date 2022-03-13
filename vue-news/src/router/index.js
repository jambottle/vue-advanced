import { createRouter, createWebHistory } from 'vue-router';

import FeedView from '@/views/FeedView.vue';
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
    component: FeedView,
  },
  {
    path: '/ask',
    name: 'AskFeed',
    component: FeedView,
  },
  {
    path: '/jobs',
    name: 'JobsFeed',
    component: FeedView,
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

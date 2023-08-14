import { createRouter, createWebHistory } from 'vue-router';

import AppHome from '@/views/AppHome.vue';
import AppAbout from '@/views/AppAbout.vue';
import AppManage from '@/views/AppManage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: AppHome
    },
    {
      name: 'about',
      path: '/about',
      component: AppAbout
    },
    {
      name: 'manage',
      path: '/manage-music',
      component: AppManage
    },
    {
      path: '/manage',
      redirect: { name: 'manage' }
    },
    {
      path: '/:catchAll(.*)*',
      redirect: { name: 'home' }
    }
  ],
  linkExactActiveClass: 'text-yellow-500'
});

export default router;

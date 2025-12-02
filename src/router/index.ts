import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/virtualTableTest',
    },
    {
      path: '/virtualTableTest',
      name: 'virtualTableTest',
      component: () => import('../views/VirtualTableTest/index.vue'),
    },
  ],
})

export default router

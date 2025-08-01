import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/discover',
      name: 'discover',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DiscoverView.vue'),
    },
    {
      path: '/discover/:id',
      name: 'EventDetails',
      component: () => import('../views/EventDetails.vue'),
      props: true,
    },
    {
      path: '/events',
      name: 'MyEvents',
      component: () => import('../views/MyEvents.vue'),
    },
    {
      path: '/calender',
      name: 'Calender',
      component: () => import('../views/CalenderView.vue'),
    },
    {
      path: '/support',
      name: 'support',
      component: () => import('../views/SupportView.vue'),
    },
    {
      path: '/settings',
      name: 'Settings',
      component: () => import('../views/SettingView.vue'),
    },
  ],
})

export default router

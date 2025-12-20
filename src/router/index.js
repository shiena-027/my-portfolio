import { createRouter, createWebHistory } from 'vue-router'
import DashboardLayout from '../components/DashboardLayout.vue'

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: () => import('../pages/Login.vue'),
  },
  {
    path: '/portfolio',
    component: DashboardLayout,
    children: [
      {
        path: '',
        redirect: '/portfolio/profile',
      },
      {
        path: 'profile',
        component: () => import('../pages/Profile.vue'),
      },
      {
        path: 'showcase',
        component: () => import('../pages/Showcase.vue'),
      },
      {
        path: 'contact',
        component: () => import('../pages/Contact.vue'),
      },
      {
        path: 'creative',
        component: () => import('../pages/Creative.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 🔐 Auth Guard
router.beforeEach((to, from, next) => {
  const isAuth = localStorage.getItem('isAuthenticated') === 'true'

  if (to.path.startsWith('/portfolio') && !isAuth) {
    next('/login')
  } else {
    next()
  }
})

export default router

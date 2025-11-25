import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/IndexView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Home' }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: { title: 'About' }
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('../views/PortfolioView.vue'),
    meta: { title: 'Portfolio' }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
    meta: { title: 'Contact Me' }
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/ProfileView.vue'),
    meta: { title: 'My Profile' }
  },
  {
    path: '/current',
    name: 'current',
    component: () => import('../views/CurrentView.vue'),
    meta: { title: 'Current' }
  },
  {
    path: '/resume',
    name: 'resume',
    component: () => import('../views/ResumeView.vue'),
    meta: { title: 'Resume' }
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router

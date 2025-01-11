import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Contact from '../views/ContactView.vue'
import ApiView from '@/views/ApiView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Home - My Vue App' },
  },
  {
    path: '/aboutView',
    name: 'About',
    component: About,
    meta: { title: 'About - My Vue App' },
  },
  {
    path: '/contactView',
    name: 'Contact',
    component: Contact,
    meta: { title: 'Contact - My Vue App' },
  },
  {
    path: '/apiview',
    name: 'Api',
    component: ApiView,
    meta: { title: 'API - My Vue App' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes, //short for routes: routes
})

router.beforeEach((to, from, next) => {
  console.log('Navigating to:', to.meta.title)
  document.title = to.meta.title || 'Default Title'
  next()
})

export default router

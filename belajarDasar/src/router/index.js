import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Contact from '../views/ContactView.vue'
import ApiView from '@/views/ApiView.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/aboutView', component: About },
  { path: '/contactView', component: Contact },
  { path: '/ApiView', component: ApiView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

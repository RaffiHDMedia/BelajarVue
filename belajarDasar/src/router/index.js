import { createRouter, createWebHistory } from 'vue-router' //mengimport liblary router agar bisa menggganti ganti halaman
import Home from '../views/HomeView.vue' // 2 sampai 5 adalah untuk mengimport halaman di folder views agar bisa diakses
import About from '../views/AboutView.vue'
import Contact from '../views/ContactView.vue'
import ApiView from '@/views/ApiView.vue'

const routes = [
  // buat variabel routes dengan type array
  {
    path: '/', // ini adalah halaman utama
    name: 'Home',
    component: Home,
    meta: { title: 'Home - My Vue App' },
  },
  {
    path: '/aboutView', // ini adalah halaman abaut
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
  //
  history: createWebHistory(),
  routes, //short for routes: routes
})

router.beforeEach((to, from, next) => {
  console.log('Navigating to:', to.meta.title)
  document.title = to.meta.title || 'Default Title'
  next()
})

export default router

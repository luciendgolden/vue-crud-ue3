import { createWebHistory, createRouter } from 'vue-router'

import Home from '@/views/HomeView.vue'
import DetailView from '@/views/DetailView.vue'
import CreateView from '../views/CreateView.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/users/create', component: CreateView },
  { path: '/users/:id', component: DetailView, props: true },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
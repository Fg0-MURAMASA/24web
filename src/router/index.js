import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/rank',
    name: 'rank',
    component: () => import('../views/RankList.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

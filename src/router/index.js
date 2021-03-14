import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '',
    name: 'Home',
    component: Home
  },
  {
    path: '/success',
    name: 'success',
    component: ()=> import('../views/Success')
  }
]

const router = createRouter({
  // mode:'history',
  history: createWebHashHistory(),
  routes
})

export default router

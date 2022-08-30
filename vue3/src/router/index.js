import { createRouter, createWebHashHistory } from 'vue-router'
import Select from '../pages/select'
import Home from '../pages/home'
const routes = [
  // 首页
  {
    path: '/index',
    name: 'Index',
    component: Home
  },
  {
    path: '/select',
    name: 'Select',
    component: Select
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import pastOrders from '../views/pastOrders.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path: '/past-orders',
      name: 'pastOrders',
      component: pastOrders
    }
  ]
})

export default router

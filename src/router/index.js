import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'
import Login from '@/views/Login/index.vue'
import Home from '@/views/Home/index.vue'
import Product from '@/views/Product/index.vue'
import Security from '@/views/Security/index.vue'
import About from '@/views/About/index.vue'
import Contact from '@/views/Contact/index.vue'
import Privacy from '@/views/Privacy/index.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path : '/',
      component : Layout,
      children : [
        {
          path : '',
          component : Home,
        },
        {
          path : 'product',
          component : Product,
        },
        {
          path : 'security',
          component : Security,
        },
        {
          path : 'about',
          component : About
        },
        {
          path : 'contact',
          component : Contact
        },
        {
          path : 'privacy',
          component : Privacy
        }
      ]
    },
    {
      path : '/login',
      component : Login
    },
  ]
})

export default router

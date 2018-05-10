import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: () => import('@/components/home')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/components/home')
    },
    {
      path: '/classify',
      name: 'classify',
      component: () => import('@/components/classify')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/components/cart')
    },
    {
      path: '/center',
      name: 'center',
      component: () => import('@/components/center')
    }
  ]
})

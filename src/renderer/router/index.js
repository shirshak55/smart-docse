import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'dashboard',
      component: require('@/components/layouts/master').default,

      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: require('@/components/Dashboard')
        },
        {
          path: '/news',
          name: 'news',
          component: require('@/components/News')
        },
        {
          path: '/results',
          name: 'results',
          component: require('@/components/Results')
        },
        {
          path: '/about-us',
          name: 'about_us',
          component: require('@/components/AboutUs')
        },
        {
          path: '/contact',
          name: 'contact',
          component: require('@/components/Contact')
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

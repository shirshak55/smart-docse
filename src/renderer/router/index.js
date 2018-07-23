import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: 'dashboard',
      component: require('@/components/layouts/Master').default,

      children: [
        {
          path: '/news',
          name: 'news',
          component: require('@/components/News/News').default
        },
        {
          path: '/result',
          name: 'result',
          component: require('@/components/Result/Result').default
        },
        {
          path: '/about-us',
          name: 'about_us',
          component: require('@/components/AboutUs').default
        },
        {
          path: '/contact',
          name: 'contact',
          component: require('@/components/Contact').default
        }
      ]
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: require('@/components/Dashboard').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

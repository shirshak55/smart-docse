import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: 'dashboard',
      component: require('@/components/layouts/master').default,

      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: require('@/components/Dashboard').default
        },
        {
          path: '/news',
          name: 'news',
          component: require('@/components/News/News').default
        },
        {
          path: '/result',
          name: 'result',
          component: require('@/components/Result').default
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
      path: '*',
      redirect: '/'
    }
  ]
})

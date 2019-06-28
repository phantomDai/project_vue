import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'
import Login from '@/components/login'
import DynamicPage from '@/components/DynamicPage'
import ServiceParsing from '@/components/DynamicPage/ServiceParsing'
import Configuration from '@/components/DynamicPage/Configuration'
import TestingProcess from '@/components/DynamicPage/TestingProcess'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      redirect: (to) => {
        return '/login'
      },
      children: [{
        path: 'login',
        name: 'login',
        component: Login
      }, {
        path: '/dynamicPage',
        name: 'dynamicPage',
        component: DynamicPage,
        children: [{
          path: 'serviceParsing',
          name: 'serviceParsing',
          component: ServiceParsing
        }, {
          path: 'configuration',
          name: 'configuration',
          component: Configuration
        }, {
          path: 'testingProcess',
          name: 'testingProcess',
          component: TestingProcess
        }]
      }]
    }
  ]
})

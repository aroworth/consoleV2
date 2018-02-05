import Vue from 'vue'
import Router from 'vue-router'
import appbuilder from '@/components/appbuilder'
import registration from '@/components/registration'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/appbuilder',
      name: 'appbuilder',
      component: appbuilder
    },
    {
      path: '/rego',
      name: 'registration',
      component: registration
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import appbuilder from '@/components/appbuilder'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/appbuilder',
      name: 'appbuilder',
      component: appbuilder
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import appbuilder from '@/components/appbuilder'
import registration from '@/components/registration'
import consoleview from '@/components/console'
import login from '@/components/login'
import organisations from '@/components/organisations'
import home from '@/components/home'
import callback from '@/components/Callback'
import analytics from '@/components/Analytics'
import api from '@/components/Api'
import buildbot from '@/components/Buildbot'
import forms from '@/components/Forms'
import webapp from '@/components/Webapp'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*', component: login
    },
    {
      path: '/console',
      name: 'console',
      component: consoleview,
      children: [
        {
          path: '/appbuilder',
          name: 'appbuilder',
          component: appbuilder
        },
        {
          path: '/home',
          name: 'home',
          component: home
        },
        {
          path: '/organisations',
          name: 'organisations',
          component: organisations
        },
        {
          path: '/analytics',
          name: 'analytics',
          component: analytics
        },
        {
          path: '/buildbot',
          name: 'buildbot',
          component: buildbot
        },
        {
          path: '/api',
          name: 'api',
          component: api
        },
        {
          path: '/forms',
          name: 'forms',
          component: forms
        },
        {
          path: '/webapp',
          name: 'webapp',
          component: webapp
        }
        
      ]
    },
    {
      path: '/rego',
      name: 'registration',
      component: registration
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/callback',
      name: 'callback',
      component: callback
    }
  ]
})

<template>
  <div id="console">
    <div id="sidepanel__container">
  
      <div id="sidepanel__menu" v-if="consolemenu" v-model="consolemenu">
        <md-ripple>
          <img class="sidepanel__menu__icon" src="/static/img/icons/1blinktrans.gif" v-on:click="goToService('home')" />
        </md-ripple>
        <md-ripple>
          <img class="sidepanel__menu__icon" src="/static/img/icons/templater.png" v-on:click="goToService('appbuilder')" />
        </md-ripple>
            <img class="sidepanel__menu__icon" src="/static/img/icons/bb.png" v-on:click="goToService('buildbot')" />
        </md-ripple>
        <md-ripple>
          <img class="sidepanel__menu__icon" src="/static/img/icons/forms.png" v-on:click="goToService('forms')" />
        </md-ripple>
        <md-ripple>
          <img class="sidepanel__menu__icon" src="/static/img/icons/clientcli.png" v-on:click="goToService('webapp')" />
        </md-ripple>
        <md-ripple>
          <img class="sidepanel__menu__icon" src="/static/img/icons/api.png" v-on:click="goToService('api')" />
        </md-ripple>
        <md-ripple>
          <img class="sidepanel__menu__icon" src="/static/img/icons/anal.png" v-on:click="goToService('analytics')" />
        </md-ripple>
        <md-button id="sidepanel__logout_btn" v-on:click="orgs">Orgs</md-button>
      </div>
      <div id="sidepanel__img" v-else>
        <img src="/static/img/icons/1blinktrans.gif" />
      </div>
  
      <md-button id="sidepanel__logout_btn" v-on:click="logout">LogOut</md-button>
      <div id="sidepanel__content">
  
      </div>
    </div>
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
  import {
    store
  } from '../store/store.js'
  
  import AuthService from '@/services/AuthService'
  
  export default {
    name: 'Console',
    data() {
      return {
        consolemenu: store.state.inconsole
      }
    },
    updated() {
      this.updateState()
      console.log('updated')
    },
    methods: {
      goToService: function(route) {
        this.$router.push(route)
  
      },
      updateState: function() {
        if (this.$route.path === '/organisations') {
          console.log(this.$route.path)
          store.state.isconsole = false
          this.consolemenu = store.state.isconsole
        } else {
          store.state.isconsole = true
          this.consolemenu = store.state.isconsole
        }
        console.log(this.$route.path)
        console.log('updated console state to: ' + this.consolemenu)
        console.log(this.$route.path)
  
      },
      logout: function() {
        AuthService.logout()
      },
      orgs: function() {
        this.$router.push('organisations')
      }
    },
    created() {
      this.updateState()
  
    }
  }
</script>

<style>
  body {
    background-color: #f1f2f4;
  }
  
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  
  body {
    margin: 0;
    margin-top: 0px;
  }
  
  #sidepanel__container {
    position: fixed;
    min-height: 2000px;
    width: 80px;
    background-color: #2c3546;
    margin: 0 auto;
    margin-right: 30px;
    float: left;
    margin-top: 0px;
    z-index: 5;
  }
  
  #sidepanel__menu {
    margin: 0 auto;
    text-align: center;
    padding: 20px;
    margin-top: 20px;
  }
  
  .sidepanel__menu__icon {
    margin-bottom: 30px;
  }
  
  #sidepanel__img {
    width: 50px;
    margin: 0 auto;
    margin-top: 40vh;
  }
  
  #sidepanel__logout_btn {
    color: white;
    border-color: white;
    margin: 0 auto;
    min-width: 75px !important;
    margin-bottom: 5vh;
  }
  
  .sidepanel__menu__btn {
    height: 75px;
    max-width: 20px;
    padding-left: 0px;
    margin-left: 0px;
  }

  .md-button{
    min-width: 50px !important;
    margin-left: 0px;
  }
</style>

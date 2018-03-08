<template>
  <div id="console">
    <div id="sidepanel__container">
  
      <div id="sidepanel__menu" v-if="consolemenu" v-model="consolemenu">
        <md-button class="sidepanel__menu__icon">
        <md-ripple>
          <img  src="/static/img/icons/1blinktrans.gif" v-on:click="goToService('home')" />
        </md-ripple>
        </md-button>
        <md-button class="sidepanel__menu__icon">
        <md-ripple>
          <img src="/static/img/icons/templater.png" v-on:click="goToService('appbuilder')" />
        </md-ripple>
        </md-button>
        <md-button class="sidepanel__menu__icon">
        <md-ripple>
            <img src="/static/img/icons/bb.png" v-on:click="goToService('buildbot')" />
        </md-ripple>
        </md-button>
        <md-button class="sidepanel__menu__icon">
        <md-ripple>
          <img src="/static/img/icons/forms.png" v-on:click="goToService('forms')" />
        </md-ripple>
        </md-button>
        <md-button class="sidepanel__menu__icon">
        <md-ripple>
          <img src="/static/img/icons/clientcli.png" v-on:click="goToService('webapp')" />
        </md-ripple>
        </md-button>
        <md-button class="sidepanel__menu__icon">
        <md-ripple>
          <img src="/static/img/icons/api.png" v-on:click="goToService('api')" />
        </md-ripple>
        </md-button>
        <md-button class="sidepanel__menu__icon">
        <md-ripple>
          <img src="/static/img/icons/anal.png" v-on:click="goToService('analytics')" />
        </md-ripple>
        </md-button>
      </div>
      <div id="sidepanel__img" v-else>
        <img src="/static/img/icons/1blinktrans.gif" />
      </div>
      <md-button id="sidepanel__orgs_btn" v-on:click="orgs"><md-icon>account_balance</md-icon><br>Orgs</md-button>
      <md-button id="sidepanel__logout_btn" v-on:click="logout"><md-icon>power_settings_new</md-icon><br>logout</md-button>
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
    display: grid;
    grid-template-rows: repeat(6, 1fr);
    position: fixed;
    max-height: 100%;
    width: 80px;
    background-color: #2c3546;
    margin: 0 auto;
    margin-right: 30px;
    float: left;
    z-index: 5;
  }
  
  #sidepanel__menu {
    margin: 0 auto;
    text-align: center;
    margin-top: 20px;
  }
  
  .sidepanel__menu__icon {
    width: 70px;
    height: 70px;
    margin-bottom: 50px;
    margin-left: 0px;
    margin: auto 0;
  }
  
  #sidepanel__img {
    width: 50px;
    margin: 0 auto;
    margin-top: 40vh;
  }
  
   #sidepanel__orgs_btn{
    color: white;
    border-color: white;
    margin: 0 auto;
    min-width: 75px !important;
    grid-row: 5/5;
  }

  #sidepanel__logout_btn {
    color: white;
    border-color: white;
    margin: 0 auto;
    min-width: 75px !important;
    margin-bottom: 5vh;
    grid-row: 6/6;
  }

  @media (max-width: 1300px) {
    #sidepanel__logout_btn {
    color: white;
    border-color: white;
    margin: 0 auto;
    min-width: 75px !important;
    margin-bottom: 5vh;
    grid-row: 6/6;
  }
    
    #sidepanel__orgs_btn{
    color: white;
    border-color: white;
    margin: 0 auto;
    min-width: 75px !important;
    grid-row: 4/5;
  }

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

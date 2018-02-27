<template>
  <div class="organisations">
    <!-- <md-button v-on:click="goToOrg"> Go To Org Home </md-button> -->
  
    <md-drawer :md-active.sync="showNavigation" md-persistent="full">
      <md-toolbar class="md-transparent" md-elevation="0">

        <span class="md-title">Organisations</span>
        
      </md-toolbar>
  
      <md-list 
      class="orgs__list"
      >
  
        <md-button 
        v-for="orgs in consoleorgs.organisations" 
        v-bind:data="orgs" 
        v-bind:key="orgs.name" 
        v-on:click.native="goToOrg(orgs.id, orgs.name)" 
        class="org__button"
        >
          {{orgs.name}}
        </md-button>
      </md-list>
    </md-drawer>
    <img id="img__loading" 
    v-bind:class="{img_loading_animate: consoleorgs.initializing}" 
    src="/static/img/icons/1blinkblack.png" 
    />
  </div>
</template>

<script>
  import {
    store
  } from '../store/store.js'
  
  import simpleAuthService from '@/services/SimpleAuthService'
  
  export default {
    name: 'organisations',
    data() {
      return {
        consolemenu: store.state.inconsole,
        showNavigation: false,
        showSidepanel: false,
        consoleorgs: {
          initializing: true,
          organisations: []
        }
      }
    },
  
    methods: {
      goToOrg: function(orgid, orgname) {
        store.state.orgid = orgid
        store.state.orgname = orgname
        console.log('org id: ' + store.state.orgid)
        console.log('org name: ' + store.state.orgname)
        localStorage.setItem('orgid', orgid)
        localStorage.setItem('orgname', orgname)
        this.$router.push('home')
      },
      getOrgs: function() {
        simpleAuthService.getOrganisations()
          .then((data) => {
            this.consoleorgs.organisations = data
            this.consoleorgs.initializing = false
            this.showNavigation = true
            this.showSidepanel = true
          })
      },
      checkIfLoaded: function() {
        if (this.consoleorgs.initializing = false) {
  
        }
      }
    },
    mounted() {
      this.getOrgs()
    },
    updated() {
      this.checkIfLoaded()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body {
    background-color: #f1f2f4;
  }
  
  #header__org {
    padding-bottom: 75px;
  }
  
  #orgcard {
    width: 275px;
    height: 250px;
    margin-left: 50px;
    margin-right: 30px;
    margin-bottom: 50px;
    float: left;
    background-color: white;
  }
  
  ul {
    list-style-type: none;
  }
  
  .serviceslist {
    padding-top: 0px;
    margin-top: 0px;
    margin-bottom: 0px;
    text-align: left;
  }
  
  .org__button {
    max-width: 225pc;
    width: 225px;
    color: white;
    text-align: left !important;
    border-color: white !important;
  }
  
  .orgs__list {
    text-align: left;
    padding-left: 10px;
  }
  
  
  /* MD Styles */
  
  .md-drawer {
    padding-left: 90px;
    width: 350px;
    max-width: calc(100vw - 125px);
    background-color: #4B5361;
    color: #fff;
    z-index: 3;
  }
  
  .md-content {
    padding: 16px;
  }
  
  .md-button {
    min-width: 30px;
  }
  
  #img__loading {
    width: 100px;
    margin: auto 0;
    margin-top: 40vh;
    margin-left: 40vh;
  }
  
  .img_loading_animate {
    -webkit-animation: spin 4s linear infinite;
    -moz-animation: spin 4s linear infinite;
    animation: spin 4s linear infinite;
  }
  
  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
</style>

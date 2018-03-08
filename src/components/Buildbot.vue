<template>
  <div class="buildbot">
     <md-drawer :md-active.sync="showNavigation" md-persistent="full">
      <md-toolbar class="md-transparent" md-elevation="0">

        <span class="md-title">Buildbot</span>
        
      </md-toolbar>
  
      <md-list 
      class="orgs__list"
      >
  <!-- v-for="orgs in consoleorgs.organisations" 
        v-bind:data="orgs" 
        v-bind:key="orgs.name" 
        v-on:click.native="goToOrg(orgs.id, orgs.name)" 
        class="org__button" -->
        <md-button 
        class="org__button"
        v-for="webapp in webapps" v-bind:key="webapps.webapp">
          {{webapp.name}}
        </md-button>
      </md-list>
    </md-drawer>
  </div>
</template>

<script>
import simpleAuthService from '@/services/SimpleAuthService'
  export default {
    name: 'buildbot',
    data() {
      return {
        email: '',
        showNavigation: false,
        showSidepanel: false,
        webapps: {
          "aarons-kebabs": {
            name: "aarons-kebabs.blinkm.io",
            id: "1234567890",
            version: "1.0.0",
            framework: "ios"
          },
          "kebab-stock": {
            name: "kebab-stock.blinkm.io",
            id: "1234567890",
            version: "1.0.0",
            framework: "ios"
          },
          "kebab-builder": {
            name: "kebab-builder.blinkm.io",
            id: "1234567890",
            version: "1.0.0",
            framework: "ios"
          }
        }
      }
    },
    mounted() {
      // console.log('id at home:' + this.$store.state.orgid)
      // console.log('org name at home: ' + this.$store.state.orgname)
      this.getInstances()
    },
    methods: {
      getInstances: function() {
        simpleAuthService.getServiceInstances(localStorage.getItem('orgid'))
          .then((data) => {
            //this.consoleorgs.initializing = false
            console.log('data:')
            console.log(data)
            this.instances = data
            this.showSidepanel = true
            this.showNavigation = true
            console.log('instances:')
            console.log(this.instances)
          })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .md-drawer {
    padding-left: 90px;
    width: 350px;
    max-width: calc(100vw - 125px);
    background-color: #4B5361;
    color: #fff;
    z-index: 3;
  }
  .org__button {
    max-width: 225pc;
    width: 225px;
    color: white;
    text-align: left !important;
    border-color: white !important;
  }
</style>

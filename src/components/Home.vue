<template>
  <div class="Home">
  <div class="container__grid">
    <div id="container__header">
      <h1>{{orgname}}</h1>
      <h2>Dashboard</h2>
    </div>
    <div id="container__webapp" v-bind:class="{hiddenOnLoad: initializing}">
      <!-- <ul>
            <li v-for="instance in instances">{{instance.id}} || {{instance.links.services}} </li>
          </ul> -->
  
      <md-table v-model="instances" md-sort="name" md-sort-order="asc" md-fixed-header>
        <md-table-toolbar>
          <h1 class="md-title">Web Apps</h1>
        </md-table-toolbar>
  
        <md-table-row slot="md-table-row" slot-scope="{ item }">
          <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
          <md-table-cell md-label="Status" id="status__icon__cell">
            <md-icon>cloud_done</md-icon>
          </md-table-cell>
  
        </md-table-row>
      </md-table>
    </div>
    <div id="container__api" v-bind:class="{hiddenOnLoad: initializing}">
        <md-table v-model="instances" md-sort="name" md-sort-order="asc" md-fixed-header>
        <md-table-toolbar>
          <h1 class="md-title">API</h1>
        </md-table-toolbar>
  
        <md-table-row slot="md-table-row" slot-scope="{ item }">
          <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
          <md-table-cell md-label="Status" id="status__icon__cell">
            <md-icon>cloud_done</md-icon>
          </md-table-cell>
  
        </md-table-row>
      </md-table>
    </div>
    <div id="container__buildbot" v-bind:class="{hiddenOnLoad: initializing}">
        <md-table v-model="instances" md-sort="name" md-sort-order="asc" md-fixed-header>
        <md-table-toolbar>
          <h1 class="md-title">BuildBot Apps</h1>
        </md-table-toolbar>
  
        <md-table-row slot="md-table-row" slot-scope="{ item }">
          <md-table-cell md-label="Name" md-sort-by="name" id="mdtable__nameheader">{{ item.name }}</md-table-cell>
          <md-table-cell md-label="Status" id="status__icon__cell">
            <md-icon>cloud_done</md-icon>
          </md-table-cell>
  
        </md-table-row>
      </md-table>
    </div>
    </div>
  </div>
</template>

<script>
  //import {store} from '../store/store.js'
  import simpleAuthService from '@/services/SimpleAuthService'
  
  export default {
    name: 'home',
    data() {
      return {
        orgname: localStorage.getItem('orgname'),
        initializing: true,
        instances: []
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
            this.initializing = false
            console.log('instances:')
            console.log(this.instances)
          })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  /* GRID STYLES */

  .container__grid{
    display: grid;
    margin-left: 150px;
    margin-right: 50px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(12, 1fr);
    grid-gap: 20px;
  }

  #container__header{
    grid-column: 1/13;
    grid-row: 1/3;
    text-align: left;
  }

  #container__webapp {
    background-color: white;
    grid-column: 1/5;
    grid-row: 2/6;
  }
  
  #container__api {
    background-color: white;
    grid-column: 5/9;
    grid-row: 2/6;
  }

  #container__buildbot {
    background-color: white;
    grid-column: 9/13;
    grid-row: 2/6;
  }

  @media (max-width: 1200px) {
    #container__webapp {
      grid-column: 1/7;
      grid-row: 2/6;
    }
    
    #container__api {
      grid-column: 7/13;
      grid-row: 2/6;
    }

    #container__buildbot {
      grid-column: 1/13;
      grid-row: 6/12;
    }
  }

  @media (max-width: 990px) {
    #container__webapp {
      grid-column: 1/13;
      grid-row: 2/6;
    }
    
    #container__api {
      grid-column: 1/13;
      grid-row: 6/10;
    }

    #container__buildbot {
      grid-column: 1/13;
      grid-row: 10/14;
    }
  }

 /* Regular Styles */

  .hiddenOnLoad {
    display: none;
  }
  
  .md-table-head {
    text-align: left !important;
  }
  
  .md-table-cell {
    text-align: left !important;
  } 

 #status__icon__cell{
    width: 50px !important;
  }

  h2 {
    margin-top: 0px;
    padding-top: 20px;
    font-weight: lighter !important;
    text-align: left;
  }
  
  h1 {
    margin-top: 0px;
    padding-top: 20px;
    font-weight: lighter !important;
    text-align: left;
  }
</style>

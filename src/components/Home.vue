<template>
  <div class="Home">
    <div>
      <h1>{{orgname}}</h1>
      <h2>Dashboard</h2>
    </div>
    <div id="container__instances" v-bind:class="{hiddenOnLoad: initializing}">
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
    <div id="container__right">
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
    <div id="container__far__right">
        <md-table v-model="instances" md-sort="name" md-sort-order="asc" md-fixed-header>
        <md-table-toolbar>
          <h1 class="md-title">BuildBot Apps</h1>
        </md-table-toolbar>
  
        <md-table-row slot="md-table-row" slot-scope="{ item }">
          <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
          <md-table-cell md-label="Status" id="status__icon__cell">
            <md-icon>cloud_done</md-icon>
          </md-table-cell>
  
        </md-table-row>
      </md-table>
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
  h2 {
    margin-top: 0px;
    padding-top: 20px;
    margin-left: 130px;
    font-weight: lighter !important;
    text-align: left;
  }
  
  h1 {
    margin-top: 0px;
    padding-top: 20px;
    margin-left: 120px;
    font-weight: lighter !important;
    text-align: left;
  }
  
  #container__instances {
    background-color: white;
    width: 26vw;
    height: 80vh;
    margin-left: 120px;
    float: left;
  }
  
  #container__right {
    float: left;
    margin-left: 15px;
    height: 80vh;
    width: 26vw;
    margin-right: 15px;
    background-color: white;
  }

  #container__far__right {
    float: left;
    height: 80vh;
    width: 30vw;
    background-color: white;
  }
  
  .hiddenOnLoad {
    display: none;
  }
  
  .md-table-head {
    width: 20vw !important;
    text-align: left !important;
  }
  
  .md-table-cell {
    width: 20vw !important;
    text-align: left !important;
  }

  .img__quickstart{
    width: 80px;
  }

  #status__icon__cell{
    width: 5vw !important;
  }
</style>

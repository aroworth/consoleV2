<template>
  <div class="Analytics">
    <div class="container__grid">
      <div id="container__header">
        <h2>Metrics</h2>
      </div>
      <md-button id="btn__alarms" @click="showSidepanel = true">ALARMS</md-button>
      <md-card id="card__graph">
        <label id="lbl__graph-instances">Instances:</label>
        <el-select v-model="value" placeholder="Select Time" class="selectbox__graph-instances">
          <el-option
            v-for="time in times"
            :key="time.value"
            :label="time.label"
            :value="time.value">
          </el-option>
        </el-select>
        <label id="lbl__graph-routes">Routes:</label>
        <el-select v-model="value" placeholder="Select Time" class="selectbox__graph-routes">
          <el-option
            v-for="time in times"
            :key="time.value"
            :label="time.label"
            :value="time.value">
          </el-option>
        </el-select>
        <label id="lbl__graph-time">Time:</label>
        <el-select v-model="value" placeholder="Select Time" class="selectbox__graph-time">
          <el-option
            v-for="time in times"
            :key="time.value"
            :label="time.label"
            :value="time.value">
          </el-option>
        </el-select>
        
        <div id="div__response-cbx">
          <!-- <label><span class="checkbox__label">2XX Responses</span></input> <input type="checkbox" class="checkboxflex"></label><br />
          <label><span class="checkbox__label">4XX Responses</span></input> <input type="checkbox" class="checkboxflex"></label><br />
          <label><span class="checkbox__label">5XX Responses</span></input> <input type="checkbox" class="checkboxflex"></label><br /> -->
          <el-checkbox class="checkbox__label" v-model="checked">5XX</el-checkbox> <br />
          <el-checkbox class="checkbox__label" v-model="checked">4XX</el-checkbox> <br />
          <el-checkbox class="checkbox__label" v-model="checked">2XX</el-checkbox> <br />
        </div>
          <div class="Chart">
            <linechart></linechart>
          </div>
      </md-card>
      <md-card id="card__status">
      </md-card>
      <md-card id="card__statushistory">
      </md-card>
      <md-card id="card__routes">
        <el-table
          :data="tableData3"
          height="700"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="Endpoint"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="Requests"
            width="100">
          </el-table-column>
          <el-table-column
            label="Average Response Time"
            width="200">
            <template slot-scope="timingbar">
              <div class="timingbar__container">
              <timingbar :width="300" :height="50"></timingbar>
              30.1 seconds
              </div>
            </template>
          </el-table-column> 
          <el-table-column
            prop="name"
            label="Status"
            width="100">
          </el-table-column>        
        </el-table>
      </md-card>
    </div>
     <md-drawer class="md-right" :md-active.sync="showSidepanel">
      
    </md-drawer>  
  </div>
</template>

<script>
  import linechart from './charts/linechart.js'
  import timingbar from './charts/timingbar.js'
  import serviceinstanceservice from '../services/serviceinstance.js'

  export default {
    name: 'analytics',
    components: {
      linechart,
      timingbar
    },
    data() {
      return {
        // value: serviceinstanceservice.getServerInstance().name,
        instancenames: "",
        showSidepanel: false,
        routes: "",
        times: [{
          value: 'week',
          label: '1 Week'
        }, {
          value: 'day',
          label: '1 Day'
        }, {
          value: 'fortnight',
          label: '1 Fortnight'
        }, {
          value: 'month',
          label: '1 Month'
        }, {
          value: '3months',
          label: '3 Months'
        }],
        value: '',
        tableData3: [{
          date: '/v1/getjobs',
          name: 'AVAILABLE',
          address: '100'
        }, {
          date: '/v1/getjobs',
          name: 'AVAILABLE',
          address: '100'
        }, {
          date: '/v1/getjobs',
          name: 'AVAILABLE',
          address: '100'
        }, {
          date: '/v1/getjobs',
          name: 'AVAILABLE',
          address: '100'
        }, {
          date: '/v1/getjobs',
          name: 'AVAILABLE',
          address: '100'
        }, {
          date: '/v1/getjobs',
          name: 'AVAILABLE',
          address: '100'
        }, {
          date: '/v1/getjobs',
          name: 'AVAILABLE',
          address: '100'
        }]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Analytics{
    overflow: hidden;
    position: relative;
  }
  
  .md-drawer {
    width: 500px;
    max-width: calc(100vw - 125px);
    background-color: #fff;
  }

  .checkbox__label {
    font-size: 14px;
    margin-left: 10px;
    display: inline-block;
  }

/* Initiate grid set up 12x10 */ 
 .container__grid{
    display: grid;
    margin-left: 150px;
    margin-right: 50px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(12, 50px);
    grid-gap: 20px;
  }

  #container__header{
    grid-column: 1/13;
    grid-row: 1/2;
    text-align: left;
  }

/* Graph Card - Styles and Sub-grid set up */
  #card__graph{
    grid-column: 1/8;
    grid-row: 2/10;
    background-color: white;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(8, 50px);
    padding-top: 10px;
  }

  .selectbox__graph-routes{
    grid-column: 3/5;
    grid-row: 2/3;
    width: 190px;
    max-height: 30px !important;
  }

  .selectbox__graph-time{
    grid-column: 8/10;
    width: 100px;
  }

  .selectbox__graph-instances{
    grid-column: 3/5;
    grid-row: 1/2;
    width: 190px;
  }

  #lbl__graph-instances{
    grid-column: 1/3;
    grid-row: 1/2;
    justify-self: end;
    align-self: center;
    margin-right: 10px;
  }

  #lbl__graph-routes{
    grid-column: 1/3;
    grid-row: 2/3;
    justify-self: end;
    align-self: center;
    margin-right: 10px;
  }

  #lbl__graph-time{ 
    grid-column: 6/8;
    grid-row: 1/2;
    justify-self: end;
    align-self: center;
    margin-right: 10px;
  }

  #card__graph > #div__response-cbx{
    grid-column: 10/15;
    grid-row: 1/3;
  }
  /* End Graph Card Styles */

  #card__status{
    grid-column: 1/4;
    grid-row: 10/17;
    background-color: white;
  }

  #card__statushistory{
    background-color: white;
    grid-row: 10/17;
    grid-column: 4/7;
  }

  #card__routes{
    grid-column: 8/13;
    grid-row: 2/17;
    background-color: white;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(8, 50px);
  }

   #card__routes > .chart__timingbar{
     grid-column: 1/4;
     grid-row: 1/2;
  }

  #card__routes > canvas > #horizontalbar-chart{
    max-height: 50px;
  }
  
  #horizontalbar-chart{
    height: 10px;
  }

  #btn__alarms{
    grid-column: 12/13;
    grid-row: 1/2;
    background-color: white;
  }

  #card__graph > .Chart{
    grid-row: 3/4;
    grid-column: 1/12;
    margin-left: 20px;
  }

  .timingbar__container{
    max-height: 50px;
  }
  
</style>

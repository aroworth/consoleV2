<template>
  <div class="Analytics">
    <div class="container__grid">
      <div id="container__header">
        <h2>Metrics</h2>
      </div>
      <md-button id="btn__alarms">ALARMS</md-button>
      <md-card id="card__graph">
        
        <!-- <select class="selectbox__graph" id="selectbox__graph-routes">
                <option v-for="option in options" v-bind="option">{{option.name}}</option>
        </select>
        
        <select class="selectbox__graph" id="selectbox__graph-time">
                <option v-for="option in options" v-bind="option">{{option.name}}</option>
        </select> -->
        
        <!-- <select class="selectbox__graph" id="selectbox__graph-instances">
                <option v-for="time in times"
            :key="time.value"
            :label="time.label"
            :value="time.value">>{{time.label}}</option>
        </select> -->
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
          <label><span class="checkbox__label">2XX Responses</span></input> <input type="checkbox" class="checkboxflex"></label><br />
          <label><span class="checkbox__label">4XX Responses</span></input> <input type="checkbox" class="checkboxflex"></label><br />
          <label><span class="checkbox__label">5XX Responses</span></input> <input type="checkbox" class="checkboxflex"></label><br />
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
        <div class="chart__timingbar">
          <timingbar></timingbar>
        </div>
      </md-card>
    </div>    
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
        value: ''
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

input[type='checkbox'] {
    -webkit-appearance: none;
    width: 15px;
    height: 15px;
    background: white;
    /* border-radius: 5px; */
    border: 2px solid #555;
  }
  
  input[type='checkbox']:checked {
    background: #abd;
  }

  .checkbox__label {
    font-size: 14px;
    margin-left: 10px;
    display: inline-block;
  }

  input {
    width: 13px;
    height: 13px;
    vertical-align: bottom;
    position: relative;
    overflow: hidden;
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
    grid-row: 2/9;
    background-color: white;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(12, 25px);
    padding-top: 10px;
  }

  .selectbox__graph-routes{
    grid-column: 3/5;
    grid-row: 2/3;
    width: 170px;
  }

  .selectbox__graph-time{
    grid-column: 8/10;
    width: 100px;
  }

  .selectbox__graph-instances{
    grid-column: 2/3;
    grid-row: 1/2;
    width: 190px;
  }

  #lbl__graph-instances{
    grid-column: 1/3;
    grid-row: 1/2;
    justify-self: end;
    margin-right: 10px;
  }

  #lbl__graph-routes{
    grid-column: 1/3;
    grid-row: 2/3;
    justify-self: end;
    margin-right: 10px;
  }

  #lbl__graph-time{ 
    grid-column: 6/8;
    grid-row: 1/2;
    justify-self: end;
    margin-right: 10px;
  }

  #card__graph > #div__response-cbx{
    grid-column: 10/15;
    grid-row: 1/3;
  }
/* End Graph Card Styles */

  #card__status{
    grid-column: 1/4;
    grid-row: 9/17;
    background-color: white;
  }

  #card__statushistory{
    background-color: white;
    grid-row: 9/17;
    grid-column: 4/7;
  }

  #card__routes{
    grid-column: 8/13;
    grid-row: 2/17;
    background-color: white;
  }

  #btn__alarms{
    grid-column: 12/13;
    grid-row: 1/2;
    background-color: white;
  }
  .chartjs-size-monitor{
    
    max-height: 100px !important;
    height: 100px;
  }

  canvas#line-chart.chartjs-render-monitor{
    grid-row: 4/4;
    grid-column: 1/15;
    max-height: 100px !important;
    height: 100px;
  }

#horizontalbar-chart{
  max-height: 50px !important;
}

.Chart{
  grid-row: 4/4;
  grid-column: 1/12;
  max-height: 200px !important;
  margin-left: 10px;
}

.chart__timingbar{
  max-height: 50px;
}

  
</style>

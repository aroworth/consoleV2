<template>
  <div class="hello">
    <div>
      <h2> Select a Layout </h2>
      <div class="md-layout">
        <div class="md-layout-item">
          <img src="/static/img/templates/template1.png" />
        </div>
        <div class="md-layout-item">
          <img src="/static/img/templates/template2.png" />
        </div>
        <div class="md-layout-item">
          <img src="/static/img/templates/template3.png" />
        </div>
      </div>
    </div>
    <h2> Select a Javascript Framework </h2>
    <div class="md-layout" id="logo-frameworks__container">
      <div class="md-layout-item">
        <img src="/static/img/logos/vue.png" id="logo-frameworks__img" />
      </div>
      <div class="md-layout-item">
        <img src="/static/img/logos/react.png" id="logo-frameworks__img" />
      </div>
      <div class="md-layout-item">
        <img src="/static/img/logos/angular.png" id="logo-frameworks__img" />
      </div>
    </div>
    <h2> Select Your Forms </h2>
    <div id="forms__div">
      <input type="checkbox" class="checkboxflex"> <b>Form 1</b></input><br />
      <input type="checkbox" class="checkboxflex"> <b>Form 2</b></input><br />
      <input type="checkbox" class="checkboxflex"> <b>Form 3</b></input><br />
      <input type="checkbox" class="checkboxflex"> <b>Form 4</b></input><br />
      <input type="checkbox" class="checkboxflex"> <b>Form 5</b></input><br />
    </div>
    <br />
    <br />
  
    <h2> Select Your Web App Hosting Instance </h2>
  
      <select>
        <option value="volvo">client1.blinkm.io</option>
        <option value="saab">client2.blinkm.io</option>
        <option value="mercedes">client3.blinkm.io</option>
        <option value="audi">client4.blinkm.io</option>
      </select>
  <br />
  <br />
  <br />
  <br />
      <md-button class="md-raised md-primary">DEPLOY</md-button>

  
  </div>
</template>

<script>
  export default {
    name: 'appbuilder',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h2 {
    margin-top: 0px;
    padding-top: 50px;
    margin-left: 100px;
  }
  
  .md-layout-item {
    margin-left: 40px;
    margin-right: 40px;
    margin-bottom: 40px;
  }
  
  #logo-frameworks__img {
    height: 75px;
  }
  
  #logo-frameworks__container {
    width: 35%;
    height: 100px;
    margin: 0 auto;
    margin-top: 40px;
    margin-bottom: 40px;
  }
  
  .checkboxflex {
    margin: 10px;
  }

  #forms__div{
    margin-bottom: 10pxc;
  }
</style>

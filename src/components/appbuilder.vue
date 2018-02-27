<template>
  <div class="hello">
    <br>
    <br>
    <br>
    <div id="appbuilder__container">
      <div>
        <h2> Select a Layout </h2>
        <div class="md-layout" id="layouts">
          <div class="md-layout-item">
            <img class="layout__img" src="/static/img/templates/template1.png" v-bind:class="{ isClickedBorder: isVueClicked }" v-on:click="isVueClicked = !isVueClicked" />
          </div>
          <div class="md-layout-item">
            <img class="layout__img" src="/static/img/templates/template2.png" v-bind:class="{ isClickedBorder: isLayout2Clicked }" />
          </div>
          <div class="md-layout-item">
            <img class="layout__img" src="/static/img/templates/template3.png" v-bind:class="{ isClickedBorder: isLayout3Clicked }" />
          </div>
        </div>
      </div>
      <div class="md-layout">
        <div class="md-layout-item">
          <div id="logo-frameworks__container">
            <h2> Select a Javascript Framework </h2>
            <div class="md-layout-item">
              <img src="/static/img/logos/vue.png" id="logo-frameworks__img" v-bind:class="{ isClickedBorder: isLayout1Clicked }" v-on:click="isLayout1Clicked = !isLayout1Clicked" />
            </div>
            <div class="md-layout-item">
              <img src="/static/img/logos/react.png" id="logo-frameworks__img" />
            </div>
            <div class="md-layout-item">
              <img src="/static/img/logos/angular.png" id="logo-frameworks__img" />
            </div>
          </div>
        </div>
        <div class="md-layout-item">
          <div id="forms__div">
            <h2> Select Your Forms </h2>
            <label><input type="checkbox" class="checkboxflex"> <span class="checkbox__label">Form 1</span></input></label><br />
            <label><input type="checkbox" class="checkboxflex"> <span class="checkbox__label">Form 2</span></input></label><br />
            <label><input type="checkbox" class="checkboxflex"> <span class="checkbox__label">Form 3</span></input></label><br />
            <label><input type="checkbox" class="checkboxflex"> <span class="checkbox__label">Form 4</span></input></label><br />
            <label><input type="checkbox" class="checkboxflex"> <span class="checkbox__label">Form 5</span></input></label><br />
          </div>
        </div>
        <div class="md-layout-item">
          <div id="container__webapps">
            <h2> Select Your Web App Hosting Instance </h2>
            <label><input type="checkbox" class="checkboxflex"> </input></label>
            <select id="webapp_selectbox">
                <option value="volvo">client1.blinkm.io</option>
                <option value="saab">client2.blinkm.io</option>
                <option value="mercedes">client3.blinkm.io</option>
                <option value="audi">kebab-stock.blinkm.io</option>
              </select>
            <br />
            <br />
            <br />
            <h2> Select Your Mobile Application ID</h2>
            <label><input type="checkbox" class="checkboxflex"> </input></label>
            <select id="webapp_selectbox">
                <option value="volvo">io.blinkm.aaronskebabs</option>
                <option value="saab">io.blinkm.kebabstock</option>
                <option value="mercedes">io.blinkm.snackpack</option>
              </select>
            <br />
            <br />
            <br />
            <md-button 
            class="md-raised md-primary"
            v-on:click="buildapp()"
            >
            DEPLOY</md-button>
            <br>
            <img id="img__loading" 
    v-bind:class="{img_loading_animate: isLoading}" 
    src="/static/img/icons/1blinkblack.png" 
    />
            <br>
            <br>
            <a href="https://kebab-stock-dev.blinkm.io">{{deployMsg}}</a>
            <br>
            <br>
            <a href="https://apps-dev.blinkm.io/#/aaronskebabs">{{provPageMsg}}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'appbuilder',
    data() {
      return {
        msg: "asd",
        isLayout1Clicked: false,
        isLayout2Clicked: false,
        isLayout3Clicked: false,
        isVueClicked: false,
        isReactClicked: false,
        isAngularClicked: false,
        provPageMsg: "",
        deployMsg: "",
        isLoading: false
      }
    },
    methods: {
      buildapp: function() {
        console.log('clicked')
        var self = this
        this.isLoading = true
        setTimeout(function(){
                self.deployMsg = "Your app is live at - https://kebab-stock-dev.blinkm.io"
                self.provPageMsg = "Your iOS app is available for download at - https://apps.blinkm.io"
                self.isLoading = false
            }, 7500);
      }
  
  
  
    }
    //   async buildapp() {
    //     try {
    //       const response = await AuthenticationService.register({""})
    //       this.error = "registered!",
    //       console.log(response.data)
    //     } catch (error) {
    //       this.error = error.response.data.error
    //     }
  
    //   }
  
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    margin-left: 50px;
    display: block;
  }
  
  h2 {
    margin-top: 0px;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-left: 0px;
    font-weight: lighter;
  }
  
  #logo-frameworks__img {
    height: 75px;
    margin-bottom: 15px;
  }
  
  #layouts {
    /* background-color: white; */
    margin: 0 auto;
    width: 80vw;
    /* padding-top: 20px; */
    margin-bottom: 20px;
  }
  
  #appbuilder__container {
    background-color: white;
    width: 80vw;
    margin: 0 auto;
    height: 120vh;
  }
  
  #container__webapps {}
  
  #webapp_selectbox {
    width: 200px;
    height: 30px;
    font-size: 16px;
  }
  
  input[type='checkbox'] {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background: white;
    border-radius: 5px;
    border: 2px solid #555;
  }
  
  input[type='checkbox']:checked {
    background: #abd;
  }
  
  .checkbox__label {
    font-size: 18px;
    margin-left: 10px;
  }
  
  label {
    display: block;
    padding-left: 15px;
    text-indent: -15px;
  }
  
  input {
    width: 13px;
    height: 13px;
    padding: 0;
    margin: 0;
    vertical-align: bottom;
    position: relative;
    top: -1px;
    *overflow: hidden;
  }
  
  .layout__img {
    border: 3px solid white;
  }
  
  .isClickedBorder {
    border: 3px solid blue;
  }

  #img__loading {
    width: 60px;
    margin: auto 0;
    display: none;
    margin-left: 215px;
  }
  
  .img_loading_animate {
    display: block !important;
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

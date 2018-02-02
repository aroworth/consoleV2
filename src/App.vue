<template>
  <div id="app">
    <div id="sidepanel__container">
      <div id="sidepanel__menu">
        <img class="sidepanel__menu__icon" src="/static/img/icons/1blinktrans.gif"/>
        <img class="sidepanel__menu__icon" src="/static/img/icons/templater.png"/>
        <img class="sidepanel__menu__icon" src="/static/img/icons/bb.png"/>
        <img class="sidepanel__menu__icon" src="/static/img/icons/forms.png"/>
        <img class="sidepanel__menu__icon" src="/static/img/icons/clientcli.png"/>
        <img class="sidepanel__menu__icon" src="/static/img/icons/api.png"/>
        <img class="sidepanel__menu__icon" src="/static/img/icons/anal.png"/>
      </div>
      <div id="sidepanel__content">
  
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin: 0;
  margin-top: 0px;
}

#sidepanel__container {
    position: relative;
    min-height: 3000px;
    width: 80px;
    background-color: #2c3546;
    margin: 0 auto;
    padding: 0;
    float: left;
    margin-top: 0;
  }

  #sidepanel__menu{
    margin: 0 auto;
    text-align: center;
    padding: 20px;
    margin-top: 20px;
  }

  .sidepanel__menu__icon{
    margin-bottom:30px;
  }

</style>

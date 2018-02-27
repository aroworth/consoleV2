<template>
  <div id="app">
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
    position: fixed;
    min-height: 3000px;
    width: 80px;
    background-color: #2c3546;
    margin: 0 auto;
    margin-right: 30px;
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

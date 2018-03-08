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
  max-height: 100%;
  min-height: 100%;
}

body{
  margin: 0;
  margin-top: 0px;
  max-height: 100%;
  min-height: 100%;
}

  .sidepanel__menu__icon{
    margin-bottom:30px;
  }

</style>

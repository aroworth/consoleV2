<template>
  <div class="login">
    <div id=header__container>
      <img id="header__oneblink" src="/static/img/logos/console.gif" />
      <br>
      <img id="header__service_imgs" src='/static/img/icons/icons.gif' />
    </div>
    <md-content class="md-elevation-10">
      <div id="body__container">
        <div id="body__login">
          Your Application is being loaded :-)
        </div>
      </div>
    </md-content>  
  </div>
</template>

<script>
  import AuthService from '@/services/AuthService'

  export default {
    name: 'login',
    data() {
      return {
        email: '',
        password: '',
        error: null
      }
    },
    mounted () {
      AuthService.handleAuthentication()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login {
    background-color: #2c3546;
    height: 100%;
  }
  
  #header__container {
    max-height: 600px;
    min-height: 400px;
  }
  
  @font-face {
    font-family: 'Helvetica Neue Thin';
    src: url('/static/HelveticaNeueThin.ttf') format ('truetype');
    font-weight: normal;
    font-style: normal;
  }
  
  #header__oneblink {
    padding-top: 50px;
    padding-bottom: 30px;
    color: white;
    width: 40%;
  }
  
  #header__service_imgs {
    width: 30%;
  }
  
  #body__container {
    width: 100%;
    display: flex;
    flex-flow: column;
    height: 60vh;
    background-color: white;
  }

  #body__login{
    padding-top: 200px;
  }

  #body__login_btn{
    background-color: #f13d37;
    width: 200px;
    height: 50px;
    color: white;
    font-size: 22px;
  }
</style>

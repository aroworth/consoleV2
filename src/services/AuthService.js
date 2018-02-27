import {WebAuth} from 'auth0-js'
import router from './../router'
const clientID = 'EkTovLGkY40eBERO8k0eBGwpEn2Fz7ja'

const auth0 = new WebAuth({
  domain: 'blinkmobile.auth0.com',
  clientID: clientID,
  redirectUri: 'http://localhost:8080/callback',
  audience: 'https://blinkmobile.auth0.com/userinfo',
  responseType: 'token id_token',
  scope: 'openid email'
})

export default {

  // authenticated = this.isAuthenticated()
  // authNotifier = new EventEmitter()
    
  // constructor() {
  //   this.login = this.login.bind(this)
  //   this.setSession = this.setSession.bind(this)
  //   this.logout = this.logout.bind(this)
  //   this.isAuthenticated = this.isAuthenticated.bind(this)
  // }

  // auth0 = new auth0.WebAuth({
  //   domain: 'blinkmobile.auth0.com',
  //   clientID: 'EkTovLGkY40eBERO8k0eBGwpEn2Fz7ja',
  //   redirectUri: 'http://localhost:8080/callback',
  //   audience: 'https://blinkmobile.auth0.com/userinfo',
  //   responseType: 'token id_token',
  //   scope: 'openid'
  // })

  login: function() {
    auth0.authorize()
  },

  handleAuthentication: function() {
    auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        let expiresAt = JSON.stringify(
          authResult.expiresIn * 1000 + new Date().getTime()
        )
        localStorage.setItem('access_token', authResult.accessToken)
        localStorage.setItem('id_token', authResult.idToken)
        localStorage.setItem('expires_at', expiresAt)
        router.replace('organisations')
      } else if (err) {
        //router.replace('login')
        console.log(err)
      }
    })
  },

  // setSession: function(authResult) {
  //   // Set the time that the access token will expire at
  //   // let expiresAt = JSON.stringify(
  //   //   authResult.expiresIn * 1000 + new Date().getTime()
  //   // )
  //   // localStorage.setItem('access_token', authResult.accessToken)
  //   // localStorage.setItem('id_token', authResult.idToken)
  //   // localStorage.setItem('expires_at', expiresAt)
  //   //this.authNotifier.emit('authChange', { authenticated: true })
  // }

  logout: function() {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('expires_at')
    //this.userProfile = null
    // this.authNotifier.emit('authChange', false)
    // navigate to the home route
    auth0.logout({
      returnTo: 'http://localhost:8080/login',
      clientID: clientID
    });
  },

  isAuthenticated: function() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    return new Date().getTime() < expiresAt
  },

  getIdToken: function() {
    return localStorage.getItem('id_token')
  }
}
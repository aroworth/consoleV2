import Api from '@/services/Api'

export default {
  register (creds) {
    return Api().post('register', creds)
  }
}

// AuthenticationService.register({
//   email: 'aaronroworth@gmail.com',
//   password: '123456'
// })
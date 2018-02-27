import axios from 'axios'
import AuthService from '@/services/AuthService'

const BASE_URL = 'https://auth-api-test.blinkm.io/'



export default {
  getOrganisations: () => {

    const instance = axios.create({
      baseURL: BASE_URL,
      headers: { 'Authorization': `Bearer ${AuthService.getIdToken()}` }
    })

    return instance.get('/organisations')
      .then(function (response) {
        console.log(response)
        return response.data.organisations
      })
  },
  getServiceInstances: (orgid) => {
    
    const instance = axios.create({
      baseURL: BASE_URL,
      headers: { 'Authorization': `Bearer ${AuthService.getIdToken()}` }
    })

    return instance.get('/organisations/'+orgid+'/serviceInstances?fields=id,links,name,vpcSecurityGroupIds,vpcSubnetIds&sort=name')
      .then(function (response) {
        console.log(response.data)
        return response.data.serviceInstances
      })

  }
} 
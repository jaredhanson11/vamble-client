import router from '@/router'
import { routes } from '@/router'
import axios from 'axios'

// SETUP ROUTES
const BASE_HOST = 'http://localhost:8081'
const V1_API = BASE_HOST + '/api/v1.0'

const apiRoutes = {
  LOGIN: () => V1_API + '/login',
  SIGNUP: () => V1_API + '/signup',
  EVENTS: () => V1_API + '/events',
  EVENT: id => V1_API + `/events/${id}`,
  ESPORTS: () => V1_API + '/esports',
  ESPORT: id => V1_API + `/esports/${id}`,
  BETS: () => V1_API + '/bets',
  BET: id => V1_API + `/bets/${id}`,
  BETODDS: () => V1_API + '/bets/odds',
  BETODD: id => V1_API + `/bets/odds/${id}`,
  BETCONDITIONS: () => V1_API + '/bets/conditions',
  BETCONDITION: id => V1_API + `/bets/conditions/${id}`,
  BETTYPES: () => V1_API + '/bets/types',
  BETTYPE: id => V1_API + `/bets/types/${id}`
}

// SETUP AXIOS
axios.interceptors.request.use(request => {
  request.withCredentials = true
  return request
})

axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response && error.response.status == 401) {
      const loginRoute = routes.filter(
        item => item.name.toLowerCase() == 'login'
      )[0]
      router.push(loginRoute.path)
    }
    return Promise.reject(error)
  }
)

export default {
  apiRoutes,
  axios
}

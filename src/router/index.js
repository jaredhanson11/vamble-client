import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'Home',
    isNavItem: false,
    component: Home
  },
  {
    path: '/esports',
    name: 'Esports',
    isNavItem: true,
    component: () =>
      import(/* webpackChunkName: "esports" */ '../views/Esports.vue')
  },
  {
    path: '/events',
    name: 'Events',
    isNavItem: true,
    component: () =>
      import(/* webpackChunkName: "events" */ '../views/Events.vue')
  },
  {
    path: '/events/:id',
    name: 'Event',
    isNavItem: false,
    component: () =>
      import(/* webpackChunkName: "events" */ '../views/Event.vue')
  },
  {
    path: '/login',
    name: 'Login',
    isNavItem: false,
    component: () =>
      import(/* webpackChunkName: "events" */ '../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    isNavItem: false,
    component: () =>
      import(/* webpackChunkName: "events" */ '../views/Signup.vue')
  }
]

export function getRoute(name) {
  const route = routes.filter(
    item => item.name.toLowerCase() == name.toLowerCase()
  )[0]
  if (route) {
    return route.path
  }
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

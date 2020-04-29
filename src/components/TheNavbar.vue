<template>
  <b-navbar id="the-navbar" fixed="top">
    <b-navbar-brand :to="home.path">Vamble</b-navbar-brand>
    <b-navbar-nav>
      <b-nav-item v-for="(route, idx) in navRoutes" :key="idx" :to="route.path">{{ route.name }}</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import { routes } from '@/router'
export default {
  name: 'TheNavbar',
  computed: {
    home: () => routes.filter(route => route.name.toLowerCase() === 'home')[0],
    navRoutes: () => routes.filter(route => route.isNavItem)
  }
}
</script>

<style></style>

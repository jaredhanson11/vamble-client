<template>
  <b-card class="shadow-sm col-md-6 offset-md-3 text-center">
    <b-card-title>
      Login
    </b-card-title>
    <b-form>
      <b-input
        type="email"
        v-model="email"
        class="mx-auto mt-3"
        placeholder="Email"
        @keyup.enter="loginUser"
      />
      <b-input
        type="password"
        v-model="password"
        class="mx-auto mt-3"
        placeholder="Password"
        @keyup.enter="loginUser"
      />
      <b-button @click="loginUser" class="mt-3">Login</b-button>
    </b-form>
    <b-card-footer class="mt-3">
      <router-link :to="signupRoute">Don't have an account?</router-link>
    </b-card-footer>
  </b-card>
</template>

<script>
import { getRoute } from '@/router'
export default {
  name: 'LoginCard',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    signupRoute() {
      return getRoute('signup')
    }
  },
  methods: {
    loginUser() {
      this.$store.dispatch('loginUser', {
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>

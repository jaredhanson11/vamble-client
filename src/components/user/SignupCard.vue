<template>
  <b-card class="shadow-sm col-md-6 offset-md-3 text-center">
    <b-card-title>
      Sign Up
    </b-card-title>
    <b-form>
      <b-input
        v-model="first_name"
        type="text"
        class="mx-auto mt-3"
        placeholder="First Name"
        required
        @keyup.enter="signupUser"
      />
      <b-input
        v-model="last_name"
        type="text"
        class="mx-auto mt-3"
        placeholder="Last Name"
        required
        @keyup.enter="signupUser"
      />
      <b-input
        v-model="email"
        type="email"
        class="mx-auto mt-3"
        placeholder="Email"
        required
        @keyup.enter="signupUser"
      />
      <b-input
        v-model="password"
        type="password"
        class="mx-auto mt-3"
        placeholder="Password"
        required
        @keyup.enter="signupUser"
      />
      <b-input
        v-model="confirm_password"
        type="password"
        class="mx-auto mt-3"
        placeholder="Confirm Password"
        required
        @keyup.enter="signupUser"
      />
      <b-button @click="signupUser" class="mt-3">Sign Up</b-button>
    </b-form>
    <b-card-footer class="mt-3">
      <router-link :to="loginRoute">Already have an account?</router-link>
    </b-card-footer>
  </b-card>
</template>

<script>
import { getRoute } from '@/router'
export default {
  name: 'SignupCard',
  data() {
    return {
      email: '',
      password: '',
      confirm_password: '',
      first_name: '',
      last_name: ''
    }
  },
  computed: {
    loginRoute() {
      return getRoute('Login')
    }
  },
  methods: {
    signupUser() {
      this.$store.dispatch('signupUser', {
        email: this.email,
        password: this.password,
        first_name: this.first_name,
        last_name: this.last_name
      })
    }
  }
}
</script>

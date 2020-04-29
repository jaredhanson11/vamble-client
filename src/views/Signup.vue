<template>
  <b-row id="signup" class="h-75">
    <SignupCard class="my-auto" />
  </b-row>
</template>

<script>
import SignupCard from '@/components/user/SignupCard.vue'
export default {
  name: 'Signup',
  components: { SignupCard },
  methods: {
    postLogin() {
      this.email
    }
  }
}
</script>

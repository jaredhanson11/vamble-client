<template>
  <b-row id="login" class="h-75">
    <LoginCard class="my-auto" />
  </b-row>
</template>

<script>
import LoginCard from '@/components/user/LoginCard.vue'
export default {
  name: 'Login',
  components: { LoginCard },
  methods: {
    postLogin() {}
  }
}
</script>

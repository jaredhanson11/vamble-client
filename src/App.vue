<template>
  <b-container fluid>
    <TheNavbar />
    <TheBody />
  </b-container>
</template>

<script>
import TheNavbar from '@/components/TheNavbar'
import TheBody from '@/components/TheBody.vue'
export default {
  name: 'App',
  components: {
    TheNavbar,
    TheBody
  }
}
</script>

<style></style>

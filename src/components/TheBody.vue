<template>
  <b-col id="body">
    <router-view />
  </b-col>
</template>

<script>
export default {
  name: 'TheBody'
}
</script>

<style scoped>
#body {
  overflow: scroll;
  min-height: 125vh;
  margin-top: 56px;
}
</style>

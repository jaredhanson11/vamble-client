<template>
  <div>
    <div>Esports</div>
    <div v-for="esport in esportsList" :key="esport.id">{{ JSON.stringify(esport) }}</div>
  </div>
</template>
<script>
export default {
  name: 'EsportsList',
  mounted() {
    this.$store.dispatch('getEsports')
  },
  computed: {
    esportsList() {
      console.log(this.$store.getters.esportsList)
      return this.$store.getters.esportsList
    }
  }
}
</script>

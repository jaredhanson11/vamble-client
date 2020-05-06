<template>
  <div>
    <div>Events</div>
    <div v-for="event in eventsList" :key="event.id">{{ JSON.stringify(event) }}</div>
  </div>
</template>
<script>
export default {
  name: 'EventsList',
  mounted() {
    this.$store.dispatch('getEvents')
  },
  computed: {
    eventsList() {
      return this.$store.getters.eventsList
    }
  }
}
</script>

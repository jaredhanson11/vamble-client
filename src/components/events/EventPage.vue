<template>
  <div>
    <div>Event</div>
    <div>{{ JSON.stringify(event) }}</div>
  </div>
</template>
<script>
export default {
  name: 'EventPage',
  data() {
    return {
      eventId: this.$route.params['id']
    }
  },
  mounted() {
    const eventId = this.eventId
    console.log(eventId)
    this.$store.dispatch('getEvent', eventId)
  },
  computed: {
    event() {
      return this.$store.getters.events[this.eventId]
    }
  }
}
</script>

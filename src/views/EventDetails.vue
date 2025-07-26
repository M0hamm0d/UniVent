<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import UniVents from '@/data/university_events.json'
const route = useRoute()
const event = ref(null)
const allEvents = UniVents
console.log(allEvents)

onMounted(() => {
  const id = Number(route.params.id)
  event.value = allEvents.find((e) => e.id === id)
})
</script>
<template>
  <div v-if="event">
    <h1>{{ event.event_title }}</h1>
    <p>{{ event.description }}</p>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

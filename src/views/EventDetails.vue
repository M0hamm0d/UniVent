<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const event = ref(null)
const allEvents = [
  { id: 1, title: 'Tech Conference', fullDescription: 'Full details about tech conference' },
  { id: 2, title: 'Art Fest', fullDescription: 'Full details about art festival' },
]

onMounted(() => {
  const id = Number(route.params.id)
  event.value = allEvents.find((e) => e.id === id)
})
</script>
<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.fullDescription }}</p>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

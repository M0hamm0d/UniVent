<script setup>
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useRoute } from 'vue-router'
import UniVents from '@/data/university_events.json'
import BackArrow from '@/components/icons/BackArrow.vue'
const route = useRoute()
const event = ref(null)
const allEvents = UniVents
console.log(allEvents)
//note
onMounted(() => {
  const id = Number(route.params.id)
  event.value = allEvents.find((e) => e.id === id)
})
</script>
<template>
  <div v-if="event" class="wrapper">
    <div class="title">
      <RouterLink to="/discover">
        <button><BackArrow /></button>
      </RouterLink>
      <h1>{{ event.event_title }}</h1>
    </div>
    <div class="body">
      <div class="img">
        <img src="/public/hero-image.jpg" alt="" />
        <!-- <img :src="event.image_url" alt="" /> -->
      </div>
      <div class="save-event-buttons">
        <div class="add-to-calender">
          <button>Add to Calender</button>
        </div>
        <div class="add-to-my-event">
          <button>Add to My Events</button>
        </div>
      </div>
      <div class="about-event">
        <h2>About This Event</h2>
        <div class="description">
          <p v-for="(description, i) in event.description" :key="i">{{ description }}</p>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>
<style scoped>
.wrapper {
  font-family: Satoshi;
  /* margin: 50px 0 30px; */
  display: flex;
  flex-direction: column;
  gap: 10px;
}
h1,
h2,
p {
  margin: 0;
}
.title {
  display: flex;
  gap: 5px;
  align-items: center;
}
.title button {
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
}
.body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.body .img {
  width: 100%;
}
.body .img img {
  width: 100%;
  max-height: 400px;
  height: 100%;
  border-radius: 10px;
}
.save-event-buttons {
  display: flex;
  gap: 5px;
}
.save-event-buttons button {
  padding: 10px;
}
.add-to-calender button {
  background-color: #0b99ff;
  border-radius: 5px;
  color: #fff;
  border: 1px solid #0b99ff;
}
.add-to-my-event button {
  color: #0b99ff;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #0b99ff;
  cursor: pointer;
}
.add-to-my-event button:hover {
  color: #fff;
  background-color: #0b99ff;
}
.add-to-calender button:hover {
  color: #0b99ff;
  background-color: white;
  border: 1px solid #0b99ff;
}
.about-event {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.description {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>

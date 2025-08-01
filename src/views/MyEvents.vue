<script setup>
import { RouterLink } from 'vue-router'
import NoEvent from '@/components/icons/NoEvent.vue'
// import MyEventsCard from '@/components/MyEventsCard.vue'
// import UniVents from '@/data/university_events.json'
// const firstEvent = UniVents.splice(0, 1)
</script>
<template>
  <div class="empty-container">
    <NoEvent />
    <h3>You haven’t shown interest in any event yet.</h3>
    <p>
      Go to <RouterLink to="/discover">Discover</RouterLink> and find exciting events happening near
      you!
    </p>
  </div>
  <!-- <div class="my-events">
    <h2>My Events</h2>
    <div class="my-event-cards">
      <MyEventsCard
        v-for="event in firstEvent"
        :key="event.id"
        :title="event.event_title"
        :university="event.university"
        :date="event.date"
        :time="event.time"
        :location="event.location"
        :id="event.id"
        :category="event.category"
      />
    </div>
  </div> -->
</template>
<style scoped>
.my-events {
  font-family: Satoshi;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 30px 0;
}
.my-events > h2 {
  text-align: left;
}
.my-events-cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.empty-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Satoshi;
  gap: 10px;
}
.empty-container a {
  color: #0b99ff;
  text-decoration: none;
}
.empty-container a:hover {
  color: #0b99ff;
  text-decoration: underline;
}
h2,
h3,
p {
  margin: 0;
  text-align: center;
}
</style>

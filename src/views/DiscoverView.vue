<script setup>
import UniVents from '@/data/university_events.json'
import EventCard from '@/components/EventCard.vue'
const categories = [
  'Social',
  'Academic',
  'Career & Professional',
  'Sport',
  'Arts & Culture',
  'Club & Organizations',
  'Tech & Innovation',
  'Others',
]
const periods = ['All', 'Today', 'This Week', 'Newest']
const events = UniVents.slice(0, 10)
</script>
<template>
  <div class="wrapper">
    <div class="browse-category">
      <h2>Filter by Category</h2>
      <div class="">
        <button v-for="(category, i) in categories" :key="i">{{ category }}</button>
      </div>
    </div>
    <div class="all-event-section">
      <h2>All Events</h2>
      <div class="events-filter">
        <button v-for="(period, i) in periods" :key="i">{{ period }}</button>
      </div>
      <div class="event-cards-wrapper">
        <EventCard
          v-for="event in events"
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
    </div>
  </div>
</template>
<style scoped>
.wrapper {
  margin: 0 0 30px;
  display: flex;
  flex-direction: column;
  font-family: Satoshi;
}
.browse-category {
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 20px 30px;
}
.browse-category h2 {
  margin: 0;
}
.browse-category > div,
.all-event-section .events-filter {
  display: flex;
  gap: 10px;
}
.all-event-section {
  padding: 20px 30px;
}
.browse-category > div button,
.all-event-section .events-filter button {
  width: fit-content;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #f1f1f1;
  cursor: pointer;
}
.event-cards-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin-top: 25px;
}
</style>

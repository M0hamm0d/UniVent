<script setup>
import UniLogo from './icons/UniLogo.vue'
import DateIcon from './icons/DateIcon.vue'
import LocationIcon from './icons/LocationIcon.vue'
import { RouterLink } from 'vue-router'
defineProps({
  title: {
    type: String,
    required: true,
  },
  university: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
})
</script>
<template>
  <div class="event-card">
    <div class="">
      <img src="../../public/hero-image.jpg" alt="" />
    </div>
    <div class="card-content">
      <h4>{{ title }}</h4>
      <div class="event-info">
        <div class="event-location">
          <UniLogo />
          <p>{{ university }}</p>
        </div>
        <div class="event-time-and-date">
          <DateIcon />
          <p>{{ date }} • {{ time }} AM</p>
        </div>
        <div class="event-location">
          <LocationIcon />
          <p>{{ location }}</p>
        </div>
      </div>
      <!-- `/event/${event.id}` -->
      <RouterLink :to="`/explore/1`">
        <button class="">View Details</button>
      </RouterLink>
    </div>
  </div>
</template>
<style scoped>
.event-card {
  border-radius: 0 0 10px 10px;
}
.event-card > div:first-child {
  border-radius: 4px 4px 0 0;
  height: 250px;
}
.event-card div img {
  width: 100%;
  border-radius: 10px 10px 0 0;
  height: 100%;
}
.card-content {
  display: flex;
  flex-direction: column;
  background-color: #f1f1f1;
  padding: 15px;
  gap: 10px;
  border-radius: 0 0 10px 10px;
}
.event-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
  /* color: #7d7d7d; */
  color: #797979;
}
.card-content h4,
.event-info p {
  margin: 0;
}
.event-info > div {
  display: flex;
  align-items: center;
  gap: 5px;
}
.card-content button {
  background-color: #0b99ff;
  color: white;
  border: none;
  padding: 10px 0;
  border-radius: 5px;
  width: 100%;
}
a {
  width: 100%;
}
</style>

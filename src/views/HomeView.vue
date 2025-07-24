<script setup>
import EventCard from '@/components/EventCard.vue'
import UniVents from '@/data/university_events.json'
const currentMonth = (new Date().getMonth() + 1).toString().padStart(2, '0')
const exploreMonth = UniVents.filter((event) => event.date.split('-')[1] == currentMonth)
const firstThreeEvents = exploreMonth.slice(0, 4)
console.log(firstThreeEvents)
</script>
<template>
  <div class="container">
    <div class="hero-section">
      <div class="hero-text">
        <div class="">
          <h1>Discover Campus Events Near You! Your Uni Life, Amplified.</h1>
          <p>
            From academic workshops to vibrant social gathering, UniVent connect you to every
            exciting opportunity happening on and around your campus.
          </p>
          <div class="button">
            <button class="find-event-btn">Find Events</button>
            <button class="post-yours-btn">Post Yours</button>
          </div>
        </div>
      </div>
    </div>
    <div class="trending-events">
      <h2>Upcoming Trending Events You Shouldn’t Miss This Month</h2>
      <div class="event-cards-wrapper">
        <EventCard
          v-for="event in firstThreeEvents"
          :key="event.id"
          :title="event.event_title"
          :university="event.university"
          :date="event.date"
          :time="event.time"
          :location="event.location"
        />
      </div>
      <button>View All Event For This Month</button>
    </div>
  </div>
</template>
<style scoped>
@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
.container {
  font-family: Satoshi;
}
.hero-section {
  background-image: url(../../public/hero-image.jpg);
  width: 100%;
  height: 530px;
  position: relative;
  background-size: cover;
  opacity: 0;
  animation: fadeIn 1.2s ease-in-out forwards;
}
.hero-text {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  background:
    linear-gradient(254.37deg, rgba(255, 255, 255, 0) -19.77%, rgba(63, 134, 212, 0.2) 34.56%),
    linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.86));
}
.hero-text > div {
  color: white;
  width: 75%;
  height: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  margin: auto;
}
.hero-text div h1 {
  font-size: 50px;
  margin: 0;
  line-height: 60px;
}
.hero-text div p {
  margin: 35px 0;
  font-size: 18px;
}
.hero-text .button {
  display: flex;
  gap: 10px;
}
.hero-text button {
  padding: 10px 15px;
  border-radius: 4px;
  color: white;
  border: none;
  cursor: pointer;
  font-weight: 500;
}
.find-event-btn {
  background-color: #ff7308;
}
.hero-text .post-yours-btn {
  background-color: transparent;
  border: 1px solid #0b99ff;
  color: #0b99ff;
}
.trending-events {
  display: flex;
  flex-direction: column;
  margin: 20px 60px;
}
.trending-events h2 {
  text-align: center;
}
.event-cards-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}
.trending-events button {
  width: fit-content;
  display: flex;
  justify-content: center;
  margin: 30px auto;
  background-color: #c0e0ff;
  color: #0b99ff;
  /* background-color: #0b99ff;
  color: white; */
  border: none;
  border-radius: 10px;
  padding: 15px 25px;
  cursor: pointer;
}
</style>

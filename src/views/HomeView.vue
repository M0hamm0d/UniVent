<script setup>
import EventCard from '@/components/EventCard.vue'
import UniVents from '@/data/university_events.json'
import StudentReview from '@/components/StudentReview.vue'
import HowItWorks from '@/components/HowItWorks.vue'
import LazySection from '@/components/LazySection.vue'
import { RouterLink } from 'vue-router'
const currentMonth = (new Date().getMonth() + 1).toString().padStart(2, '0')
const exploreMonth = UniVents.filter((event) => event.date.split('-')[1] == currentMonth)
const firstThreeEvents = exploreMonth.slice(0, 4)
// const featuredUniversity = [
//   { id: '1', university: 'University of Ilorin', uniLogo: '/unilorinLogo.jpeg' },
//   { id: '2', university: 'University of Lagos', uniLogo: '/unilagLogo.webp' },
//   { id: '3', university: 'University of Ibadan', uniLogo: '/unibanLogo.webp' },
//   { id: '4', university: 'Kwara State University', uniLogo: '/KWASULOGO.webp' },
//   { id: '5', university: 'Lagos State University', uniLogo: '/lasuLogo.webp' },
// ]
const reviews = [
  {
    id: '1',
    image: '/unilorinLogo.jpeg',
    review:
      '“Honestly, I love UniVent! I found out about an art showcase I wouldn’t have known existed. The platform makes event discovery so easy, and the design is actually nice to look at. 10/10 for helping creative students like me get involved!”',
    name: 'Muhammad Yusuf',
    department: 'Medicine',
  },
  {
    id: '2',
    image: '/unilorinLogo.jpeg',
    review:
      '“As a fresher, I was super lost on what to do outside class. UniVent helped me find welcome parties, seminars, and even sports tryouts. I feel more connected and confident in school now. Thank you so much for this app!”',
    name: 'Kamal Adebiyi',
    department: 'Chemistry',
  },
  {
    id: '3',
    image: '/unilorinLogo.jpeg',
    review:
      '“I really appreciate UniVent because it helps me stay on top of academic and networking events. I discovered a career fair last month through it, and I actually got an internship offer from it. It’s a powerful tool if you use it well.”',
    name: 'Abdulrahman Bello',
    department: 'Computer Engineering',
  },
]
console.log(firstThreeEvents)
</script>
<template>
  <div class="container">
    <div class="hero-section">
      <div class="hero-text">
        <div class="">
          <!-- <h1>From Chill Hangouts to Big Campus Shows, It’s All Here.</h1> -->
          <h1>Discover Campus Events Near You! Your Uni Life, Amplified.</h1>
          <p>
            From academic workshops to vibrant social gatherings, UniVent connect you to every
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
          :id="event.id"
          :category="event.category"
        />
      </div>
      <RouterLink to="/discover">
        <button>View All Events For This Month</button>
      </RouterLink>
    </div>
    <LazySection>
      <HowItWorks />
    </LazySection>
    <div class="feedback">
      <h2>What Are Unilorin Students Saying About UniVents</h2>
      <div class="card-review">
        <StudentReview
          v-for="review in reviews"
          :key="review.id"
          :name="review.name"
          :image="review.image"
          :department="review.department"
          :review="review.review"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
.trending-events h2,
.feedback h2 {
  margin: 40px 0;
}
button {
  transition: all 0.3s ease;
}
button:hover {
  transform: scale(1.03);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}
a {
  text-decoration: none;
}
.container {
  font-family: Satoshi;
  padding: 1rem 30px;
}
.hero-section {
  background-image: url(../../public/UnilorinGate.jpg);
  width: 100%;
  height: 530px;
  position: relative;
  background-size: cover;
  opacity: 0;
  animation: fadeIn 1.2s ease-in-out forwards;
  border-radius: 5px;
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
  border-radius: 5px;
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
.trending-events,
.feedback {
  display: flex;
  flex-direction: column;
  margin: 20px 10px;
}
.trending-events h2,
.feedback {
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
.feedback {
  margin-bottom: 80px;
}
.card-review {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}
@media (max-width: 768px) {
  .event-cards-wrapper,
  .card-review {
    grid-template-columns: 1fr;
  }
  .hero-text div h1 {
    font-size: 28px;
    line-height: 36px;
  }
  .universities-cover {
    grid-template-columns: 1fr 1fr;
  }
}
/* how it works */
</style>

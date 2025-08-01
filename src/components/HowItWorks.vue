<script setup>
import { ref, onMounted } from 'vue'
import ChatIcon from './icons/ChatIcon.vue'
// import NumOne from './icons/NumOne.vue'

const isChat = ref(true)
const isTyping = ref(false)
const visibleMessages = ref([])

const conversation = [
  { sender: 'student', text: "What's happening this week on campus?" },
  {
    sender: 'univent',
    text: '🔥 CS Night, TEDxUnilorin, UI/UX Workshop, and more! All in one place 🎉',
  },
  { sender: 'student', text: 'How do I join one?' },
  {
    sender: 'univent',
    text: 'Just tap the event → See details → Set a reminder 🔔 You’re good to go!',
  },
  { sender: 'student', text: 'Can I get reminders before the event?' },
  { sender: 'univent', text: 'Absolutely! UniVent will ping you so you never miss a vibe 😎' },
  { sender: 'student', text: 'Sweet. What else can I do?' },
  {
    sender: 'univent',
    text: 'Browse real-time campus events, mark your faves as Interested, and add them straight to your calendar',
  },
  // {
  //   sender: 'univent',
  //   text: 'You can explore by department, follow your fav clubs, and even RSVP to secure your spot ✅',
  // },
]

const steps = [
  {
    emoji: '1',
    title: 'Find Events That Matter',
    text: 'No more asking “What’s happening?” — just open UniVent and see all the hot events on campus.',
  },
  {
    emoji: '2',
    title: 'Tap to Get the Details',
    text: 'Check what it’s about, where it’s happening, and who’s behind it (plus if there’s food 😎).',
  },
  {
    emoji: '3',
    title: 'Set a Reminder',
    text: 'Busy schedule? Just tap "Remind me" so you never miss something cool.',
  },
  {
    emoji: '4',
    title: 'Show Up, Link Up, Vibe',
    text: 'Go, connect with others, and enjoy. UniVent keeps you in the loop, always.',
  },
]

onMounted(async () => {
  for (let i = 0; i < conversation.length; i++) {
    const msg = conversation[i]
    if (msg.sender === 'univent') {
      isTyping.value = true
      await new Promise((r) => setTimeout(r, 1200)) // fake typing time
      isTyping.value = false
    }
    visibleMessages.value.push(msg)
    await new Promise((r) => setTimeout(r, 800))
  }
})
</script>
<template>
  <section class="how-it-works-chat">
    <h2 class="title">Using UniVent Made Easy</h2>

    <div class="view-toggle">
      <button @click="isChat = true" :class="{ active: isChat }"><ChatIcon /> Chat View</button>
      <button @click="isChat = false" :class="{ active: !isChat }">📋 Steps View</button>
    </div>

    <!-- CHAT VIEW -->
    <div v-if="isChat" class="chat-wrapper">
      <div
        v-for="(message, index) in visibleMessages"
        :key="index"
        :class="['chat-bubble', message.sender]"
      >
        <p class="text">{{ message.text }}</p>
      </div>

      <div v-if="isTyping" class="chat-bubble univent typing">
        <p class="text">UniVent is typing<span class="dots">...</span></p>
      </div>
    </div>

    <!-- STEPS VIEW -->
    <div v-else class="steps-wrapper">
      <div v-for="(step, i) in steps" :key="i" class="step">
        <div class="emoji">{{ step.emoji }}</div>
        <h3>{{ step.title }}</h3>
        <p>{{ step.text }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
p {
  margin: 0;
  text-align: left;
}
.how-it-works-chat {
  padding: 3rem 1.5rem;
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}

.title {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

.view-toggle {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.view-toggle button {
  padding: 0.5rem 1rem;
  border: none;
  background: #eee;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: 0.3s;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 16px;
}

.view-toggle button.active {
  background: #0077ff;
  color: white;
}

.chat-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.chat-bubble {
  max-width: 80%;
  padding: 1rem;
  border-radius: 1rem;
  font-size: 0.95rem;
  line-height: 1.5;
  animation: fadeIn 0.4s ease forwards;
}

.chat-bubble.student .text,
.chat-bubble.univent .text {
  margin-top: 0;
}

.chat-bubble.student {
  align-self: flex-start;
  background-color: #f1f1f1;
  border-top-left-radius: 0;
}

.chat-bubble.univent {
  align-self: flex-end;
  background-color: #d1e8ff;
  border-top-right-radius: 0;
}

.typing p {
  font-style: italic;
  color: #666;
}

.dots::after {
  content: '...';
  animation: blink 1s steps(3, start) infinite;
}

@keyframes blink {
  0%,
  100% {
    content: '';
  }
  33% {
    content: '.';
  }
  66% {
    content: '..';
  }
  99% {
    content: '...';
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Steps layout */
.steps-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-top: 2rem;
}

.step {
  background-color: #f1f1f1;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  text-align: left;
}
.step:hover {
  transform: scale(1.01);
  transition: transform 0.2s ease-in-out;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.emoji {
  font-size: 20px;
  margin-bottom: 0.5rem;
  border: 1px solid #000;
  width: fit-content;
  padding: 4px 12px;
  border-radius: 100%;
}
</style>

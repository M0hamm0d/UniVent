<script setup>
import { ref } from 'vue'

const data = [
  {
    id: 0,
    isOpen: false,
    question: 'Who can use UniVent?',
    answer:
      'Any student, staff, or campus organization can use UniVent to find or promote events within their university.',
  },
  {
    id: 1,
    isOpen: false,
    question: 'How do I find events related to my department or interest?',
    answer:
      'Go to the Explore page and use filters like event category, faculty, department, or date to find what matches your interests.',
  },
  {
    id: 2,
    isOpen: false,
    question: 'Can I post my own event on UniVent?',
    answer:
      'Yes! If you’re a student group, department, or club, you can submit your event through the “Add Event” page. Once approved, it will appear on the platform.',
  },
  {
    id: 3,
    isOpen: false,
    question: 'How long does it take for my event to be approved?',
    answer: 'Events are usually reviewed within 24 hours. You’ll be notified once it goes live.',
  },
  {
    id: 4,
    isOpen: false,
    question: 'Can I edit or delete my event after posting?',
    answer:
      'At the moment, event edits or deletions are not automatic. Kindly use the comment box below to request changes, we will help you update or remove it.',
  },
]
const FAQ = ref(data)
function toggleData(id) {
  FAQ.value = FAQ.value.map((faq) => ({
    ...faq,
    isOpen: faq.id === id ? !faq.isOpen : false,
  }))
}
</script>
<template>
  <div class="support-container">
    <h1>Support</h1>
    <div class="basic-info">
      <p>How Can We Help You?</p>
      <div class="faq-container">
        <div class="faq" v-for="question in FAQ" :key="question.id">
          <div @click="toggleData(question.id)">
            <h4>{{ question.question }}</h4>
            <span>{{ question.isOpen ? '▲' : '▼' }}</span>
          </div>
          <p class="faq-answer" :class="{ open: question.isOpen }">
            {{ question.answer }}
          </p>
        </div>
      </div>
      <div class=""></div>
    </div>
    <div class="need-help">
      <h1>Still Need Help?</h1>
      <div class="">
        <div class="comment">
          <textarea name="need-help" id="helpInput" rows="6"></textarea>
          <label for="">Comment</label>
        </div>
        <button class="submit">Submit</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.need-help,
.need-help > div {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.need-help > div button {
  width: fit-content;
  padding: 15px 100px;
  background-color: #0b99ff;
  border: none;
  border-radius: 5px;
  color: #fff;
}
.comment {
  position: relative;
  width: 80%;
  display: flex;
}
.comment label {
  position: absolute;
  top: 15px;
  left: 15px;
  transition: all 0.1s ease;
}
.comment textarea {
  width: 100%;
  outline: none;
  padding: 15px;
  color: #8c8c8b;
  border: 1px solid #dfdfdf;
  font-size: 16px;
}
.comment textarea:focus + label {
  top: -7px;
  background-color: #fff;
  font-size: 12px;
}
/* .. */
.support-container {
  padding: 20px 30px;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
.basic-info,
.support-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.basic-info > p {
  font-size: 28px;
  font-weight: 500;
}
.faq-container {
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.faq-container .faq {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid #dfdfdf;
  border-radius: 5px;
}
.faq > div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 18px 12px;
  cursor: pointer;
}
/* .faq p {
  padding: 0 18px 18px;
} */
.faq-answer {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition:
    max-height 0.3s ease,
    opacity 0.3s ease;
  padding: 0 18px;
}

.faq-answer.open {
  max-height: 200px;
  opacity: 1;
  padding: 0 18px 18px;
}
</style>

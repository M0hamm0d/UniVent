<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
})
</script>
<template>
  <div class="card">
    <img :src="image" :alt="`${name}'s review picture`" />
    <div class="">
      <div class="review">{{ review }}</div>
      <div class="about">
        <h5 class="name">{{ name }}</h5>
        <p class="university">{{ department }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  background-color: #f1f1f1;
  border-radius: 10px;
  padding: 15px;
}
.card:hover {
  transform: scale(1.01);
  transition: transform 0.2s ease-in-out;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.card img {
  display: flex;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 100%;
}
.card > div {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.card div h5,
.card div p {
  font-size: 16px;
  margin: 0;
}
.card div .about {
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.card div .university {
  color: #797979;
}
</style>

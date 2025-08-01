<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const visible = ref(false)
let sectionRef = ref(null)

let observer

onMounted(() => {
  observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      visible.value = true
      observer.disconnect()
    }
    console.log(entry)
  })
  if (sectionRef.value) observer.observe(sectionRef.value)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>
<template>
  <div ref="sectionRef">
    <slot v-if="visible"></slot>
  </div>
</template>

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

export const modalStore = defineStore('modalStore', () => {
  const editModal = ref(false)
  const changePasswordModal = ref(false)
  function setEditModal() {
    editModal.value = !editModal.value
  }
  function setChangePasswordModal() {
    changePasswordModal.value = !changePasswordModal.value
  }
  return { editModal, changePasswordModal, setEditModal, setChangePasswordModal }
})

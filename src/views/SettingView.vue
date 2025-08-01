<script setup>
import { modalStore } from '@/stores/counter'
const modal = modalStore()
</script>
<template>
  <div class="profile-container">
    <div class="basic-info">
      <h1>Settings</h1>
      <div class="">
        <div class="details">
          <div class="">
            <h4>Name</h4>
            <p>Muhammad Abdus-Salam</p>
          </div>
          <div class="">
            <h4>Email</h4>
            <p>masalami042@gmail.com</p>
          </div>
          <div class="">
            <h4>Phone Number</h4>
            <p>+234 8136208750</p>
          </div>
        </div>
        <div class="edit-section">
          <button class="edit" @click="modal.setEditModal">Edit</button>
          <button class="change-password-btn" @click="modal.setChangePasswordModal">
            Change Password
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
h1,
p,
h4 {
  margin: 0;
}
.profile-container {
  height: 90vh;
  padding: 20px 30px;
}
.profile-container .basic-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 750px;
  font-family: Satoshi;
}
.basic-info > div {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}
.details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}
.details > div {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.details h4 {
  color: #8c8c8b;
  font-size: 14px;
}
.edit-section {
  display: flex;
  gap: 15px;
  width: 100%;
}
.edit-section button {
  padding: 0.75rem 1.3rem;
  width: 100%;
  border: none;
  font-weight: 500;
  font-size: 16px;
  border-radius: 6px;
  cursor: pointer;
}
.edit-section .edit {
  background-color: #0b99ff;
  color: #fff;
}
.edit-section .change-password-btn {
  background-color: transparent;
  border: 1px solid black;
}
</style>

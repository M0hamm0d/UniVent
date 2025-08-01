<script setup>
import CancelBtn from './icons/CancelBtn.vue'
import { modalStore } from '@/stores/counter'
const modal = modalStore()
</script>
<template>
  <div class="modal-card">
    <div class="modal-header">
      <p>Change Password</p>
      <button @click="modal.setChangePasswordModal"><CancelBtn /></button>
    </div>
    <div class="modal-body">
      <form>
        <div class="name">
          <input type="text" placeholder=" " />
          <p>Old Password</p>
        </div>
        <div class="number">
          <input type="text" placeholder=" " />
          <p>New Password</p>
        </div>
        <button class="save" type="button">Change Password</button>
      </form>
    </div>
  </div>
</template>
<style scoped>
.modal-header {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  border-bottom: 1px solid #c9c9c9;
}
.modal-header p {
  font-size: 20px;
  margin: 0;
  font-weight: 600;
}
.modal-header button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}
.modal-body {
  padding: 20px;
}
p {
  margin: 0;
}
.modal-body input {
  width: 100%;
  height: 54px;
  border-radius: 4px;
  padding: 0 15px;
  color: #8c8c8b;
  border: 1px solid #dfdfdf;
  outline: none;
  font-size: 16px;
}
.name,
.number {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 0 0;
}
.name p,
.number p {
  padding: 0;
  position: absolute;
  font-weight: 400;
  text-transform: capitalize;
  transition: all 0.1s ease;
  top: 27px;
  left: 17px;
  font-size: 16px;
  color: #8c8c8b;
}
.name input:focus + p,
.number input:focus + p,
.name input:not(:placeholder-shown) + p,
.number input:not(:placeholder-shown) + p {
  font-size: 12px;
  z-index: 1;
  padding: 0 4px;
  top: 4px;
  left: 12px;
  background-color: white;
}
.modal-body button {
  padding: 10px;
  font-size: 16px;
  background-color: #0b99ff;
  color: white;
  width: 100%;
  text-align: center;
  border: none;
  border-radius: 4px;
  margin-top: 30px;
}
</style>

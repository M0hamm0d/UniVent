<script setup>
import { RouterView } from 'vue-router'
import { RouterLink } from 'vue-router'
import { useRoute } from 'vue-router'
import { modalStore } from '@/stores/counter'
const modal = modalStore()

// import SearchIcon from '@/components/icons/SearchIcon.vue'
const route = useRoute()
import AppFooter from './components/AppFooter.vue'
import HomeIcon from './components/icons/HomeIcon.vue'
import DiscorverIcon from './components/icons/DiscorverIcon.vue'
import EventIcon from './components/EventIcon.vue'
import CalendarIcon from './components/icons/CalendarIcon.vue'
import SupportIcon from './components/icons/SupportIcon.vue'
import SettingIcon from './components/icons/SettingIcon.vue'
import EditModal from './components/EditModal.vue'
import ChangePassword from './components/ChangePassword.vue'
</script>

<template>
  <div class="app">
    <div v-if="modal.editModal" class="modal-backdrop" @click="modal.setEditModal">
      <div class="modal-content" @click.stop>
        <EditModal />
      </div>
    </div>
    <div
      v-if="modal.changePasswordModal"
      class="modal-backdrop"
      @click="modal.setChangePasswordModal"
    >
      <div class="modal-content" @click.stop>
        <ChangePassword />
      </div>
    </div>
    <div class="home-content">
      <header class="sidebar">
        <div class="nav">
          <RouterLink to="/">
            <HomeIcon />
            Home
          </RouterLink>
          <RouterLink to="/discover" :class="route.path.startsWith('/discover') ? 'active' : ''"
            ><DiscorverIcon /> Discover
          </RouterLink>
          <RouterLink to="/events"><EventIcon /> My Events</RouterLink>
          <RouterLink to="/calender"><CalendarIcon /> School Calender</RouterLink>
          <RouterLink to="/support"><SupportIcon /> Support</RouterLink>
          <RouterLink to="/settings"><SettingIcon /> Settings</RouterLink>
        </div>
        <div class="add-event">Add Event +</div>
      </header>
      <div class="main">
        <RouterView />
        <AppFooter />
      </div>
    </div>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  height: 100vh;
  font-family: Satoshi;
}
.home-content {
  flex: 1;
  display: flex;
  height: 100vh;
  overflow: hidden;
}
/* Modal Start */
.modal-backdrop {
  position: fixed;
  font-family: Satoshi;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.7); /* transparent black */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-content {
  background: white;
  border-radius: 12px;
  max-width: 426px;
  width: 100%;
  color: #000;
}
/* Modal component */
/* Modal ends */
.sidebar {
  width: 200px;
  flex-shrink: 0;
  background-color: white;
  border-right: 1px solid #c9c9c9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 20px;
  position: relative;
}
.logo {
  font-size: 32px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  padding: 0;
  margin: 0;
}
.navigation {
  display: flex;
  gap: 10px;
  align-items: center;
}
a {
  color: black;
  text-decoration: none;
}
a:hover {
  transition: 0.3s;
}
.router-link-active,
.active {
  background-color: #e8e8e8;
  color: black;
  font-weight: bold;
  border-radius: 5px;
}
.home-explore {
  display: flex;
  gap: 10px;
}
.header-input {
  background-color: #f1f1f1;
  padding: 5px;
  width: 300px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 4px;
}
.header-input input {
  border: none;
  outline: none;
  background-color: #f1f1f1;
}
.main {
  flex: 1;
  overflow-y: auto;
  background-color: #fdfdfd;
}
.nav {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.nav a {
  padding: 0 10px;
  height: 56px;
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  color: #4a4a4a;
  outline: none;
}
</style>

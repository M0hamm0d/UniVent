<script setup>
import { RouterView } from 'vue-router'
import { RouterLink } from 'vue-router'
import { useRoute } from 'vue-router'
// import SearchIcon from '@/components/icons/SearchIcon.vue'
const route = useRoute()
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <div class="app">
    <header class="header">
      <div class="nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/discover" :class="route.path.startsWith('/discover') ? 'active' : ''"
          >Discover</RouterLink
        >
        <RouterLink to="/events">My Events</RouterLink>
        <RouterLink to="/calender">School Calender</RouterLink>
        <RouterLink to="/profile">Profile</RouterLink>
        <RouterLink to="/settings">Settings</RouterLink>
      </div>
      <div class="add-event">Add Event +</div>
    </header>
    <div class="main">
      <RouterView />
      <AppFooter />
    </div>
  </div>
</template>

<style scoped>
.app {
  display: flex;
}
.header {
  display: flex;
  flex-direction: column;
  max-width: 200px;
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  justify-content: space-between;
  background-color: white;
  font-size: 16px;
  padding: 10px 30px;
  align-items: center;
  font-family: Satoshi;
  border-right: 1px solid #f1f1f1;
  /* font-family: Arial, Helvetica, sans-serif; */
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
  margin-left: 300px;
}
.nav {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.nav a {
  padding: 10px;
  width: 100%;
  font-weight: bold;
  color: #4a4a4a;
  outline: none;
}
.nav a:hover {
  background-color: #e8e8e8;
  border-radius: 5px;
}
</style>

<!-- <div class="logo">UniVent</div>
  <div class="navigation">
    <div class="header-input">
      <SearchIcon />
      <input type="text" placeholder="search your university..." />
    </div>
    <div class="home-explore">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/discover">Explore Events</RouterLink>
  </div>
</div> -->

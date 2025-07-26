<script setup>
import { RouterView } from 'vue-router'
import { RouterLink } from 'vue-router'
import SearchIcon from '@/components/icons/SearchIcon.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <Header class="header">
    <div class="logo">UniVent</div>
    <div class="navigation">
      <div class="header-input">
        <SearchIcon />
        <input type="text" placeholder="search your university..." />
      </div>
      <div class="home-explore">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/explore">Explore Events</RouterLink>
      </div>
    </div>
  </Header>
  <RouterView />
  <AppFooter />
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  background-color: white;
  font-size: 16px;
  padding: 15px 60px;
  align-items: center;
  border-bottom: 1px solid #f1f1f1;
  font-family: Satoshi;
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
  color: #0b99ff;
  transition: 0.3s;
}
.router-link-active {
  color: #169eff;
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
</style>

<script setup lang="ts">
// import WelcomeItem from './WelcomeItem.vue'
</script>

<template>
  <header>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/add-time">Add</RouterLink>
  </header>
</template>

<style scoped>
  header {
    height: 50px;
    border-bottom: 1px solid gray;
    font-size: 22px;
    font-weight: bold;
  }
</style>
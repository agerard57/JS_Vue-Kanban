<template>
  <header>
    <h1 class="title">Kanban app</h1>
    <div id="nav">
      <router-link :to="{ name: 'Home page' }">Home</router-link> |
      <router-link :to="{ name: 'Tasks lists' }">List</router-link> |
      <router-link :to="{ name: 'Page not found' }">Add task</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "PageHeader",
};
</script>

<style scoped>
@import "../../styles/pageHeader.css";
</style>

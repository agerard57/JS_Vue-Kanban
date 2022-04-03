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
.title {
  margin-bottom: 20px;
}

header {
  background: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
}

header a {
  color: #d4d4d4;
  padding-right: 5px;
  text-decoration: none;
  transition: all 0.3s;
}

header a.active,
header a:hover,
header a:focus {
  color: #fff;
}
</style>

<template>
  <main class="content text-center">
    <p>Oops, this page doesn't exist, the sadness...</p>
    <router-link :to="{ name: 'Home page' }">Back to the home page</router-link>
  </main>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<template>
  <div id="app">
    <PageHeader />
    <h2 id="page-title" class="text-center">{{ $route.name }}</h2>
    <router-view />
  </div>
</template>

<script>
import PageHeader from "./components/layout/PageHeader";
export default {
  name: "app",
  components: {
    PageHeader,
  },
};
</script>

<style>
@import "./styles/core.css";
</style>

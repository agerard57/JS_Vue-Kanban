<template>
  <div id="app">
    <page-header />
    <!-- Takes route name as page title -->
    <h2 id="page-title" class="text-center">{{ $route.name }}</h2>
    <router-view />
    <page-footer />
  </div>
</template>

<script>
import PageHeader from "./components/layout/PageHeader";
import PageFooter from "./components/layout/PageFooter";

export default {
  name: "app",

  components: {
    PageHeader,
    PageFooter,
  },

  watch: {
    // Everytime a new page loads,
    // the tab title changes
    $route: {
      immediate: true,
      handler(to) {
        document.title = `${to.name} - Kanban` || "Kanban";
      },
    },
  },
};
</script>

<style>
@import "./styles/core.css";
</style>

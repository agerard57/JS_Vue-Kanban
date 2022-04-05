<template>
  <div id="app">
    <page-header />
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

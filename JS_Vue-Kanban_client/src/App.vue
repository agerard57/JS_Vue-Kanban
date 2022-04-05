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
};
</script>

<style>
@import "./styles/core.css";
</style>

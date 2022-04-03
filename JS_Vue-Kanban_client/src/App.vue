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
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}

.btn:hover {
  background: #666;
}

#page-title {
  margin-top: 60px;
  padding-bottom: 20px;
}
</style>

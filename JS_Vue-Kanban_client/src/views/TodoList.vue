<template>
  <tasks-table v-bind:data="KanbanColumns" />
</template>

<script>
import TasksTable from "../components/table/TasksTable.vue";

export default {
  name: "App",
  components: {
    TasksTable,
  },
  data: () => ({
    KanbanColumns: [
      { title: "Todo", description: "See all tasks you have yet to do!" },
      {
        title: "In progress",
        description: "See all tasks you are currently doing!",
      },
      { title: "Done", description: "Don't worry about those tasks anymore!" },
    ],
  }),
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

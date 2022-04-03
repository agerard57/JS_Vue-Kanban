<template>
  <main class="container p-0">
    <div class="row">
      <kanban-column
        v-for="column in KanbanColumns"
        :key="column.title"
        v-bind:title="column.title"
        v-bind:description="column.description"
      />
    </div>
  </main>
</template>

<script>
import KanbanColumn from "../components/list/KanbanColumn.vue";

export default {
  name: "App",
  components: {
    KanbanColumn,
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

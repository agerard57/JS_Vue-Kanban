<template>
  <div id="app">
    <h1 class="h3 mb-3" id="page-title">Kanban</h1>

    <main class="content">
      <div class="container p-0">
        <div class="row">
          <kanban-column
            v-for="column in KanbanColumns"
            :key="column.title"
            v-bind:title="column.title"
            v-bind:description="column.description"
          />
          <!--<TodoItem />-->
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import KanbanColumn from "./components/KanbanColumn.vue";

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
  margin-top: 60px;
}

#page-title {
  padding-bottom: 20px;
}
</style>

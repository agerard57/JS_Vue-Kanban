<template>
  <main>
    <p class="text-center">Hello, welcome to this kanban app !</p>
    <tasks-table v-bind:data="KanbanColumns" />
  </main>
</template>

<script>
import TasksTable from "../components/table/TasksTable.vue";

export default {
  name: "HomePage",
  components: {
    TasksTable,
  },
  data: () => ({
    KanbanColumns: [
      { title: "Latest tasks", description: "See the three latest tasks" },
      { title: "Favourites", description: "See your favourite tasks" },
    ],
  }),
};
</script>

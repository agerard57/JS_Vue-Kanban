<template>
  <main class="container p-0">
    <div class="row">
      <kanban-column
        v-for="column in data"
        :key="column.title"
        v-bind:title="column.title"
        v-bind:description="column.description"
        v-bind:col-size="getColSize"
      />
    </div>
  </main>
</template>

<script>
import KanbanColumn from "./KanbanColumn.vue";

export default {
  name: "TasksTables",
  props: ["data"],
  components: {
    KanbanColumn,
  },
  computed: {
    getColSize() {
      return 12 / this.data.length;
    },
  },
};
</script>

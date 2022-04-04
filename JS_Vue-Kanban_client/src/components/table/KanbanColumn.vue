<template>
  <div v-bind:class="['col-12', 'col-lg-' + colSize, 'col-xl-' + colSize]">
    <div class="card card-border-primary">
      <div class="card-header">
        <h5 class="card-title">{{ title }}</h5>
        <h6 class="card-subtitle text-muted">
          {{ description }}
        </h6>
      </div>
      <todo-item v-bind:column-title="title.toUpperCase()" />
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  name: "KanbanColumn",
  components: { TodoItem },
  props: ["title", "description", "colSize"],
};
</script>

<style>
img {
  max-width: 300px;
  height: auto;
}
</style>

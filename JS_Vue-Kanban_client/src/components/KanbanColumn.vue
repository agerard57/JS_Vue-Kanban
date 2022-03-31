<template>
  <div class="col-12 col-lg-4 col-xl-4">
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
  props: ["title", "description"],
};
</script>

<style>
img {
  max-width: 300px;
  height: auto;
}
</style>

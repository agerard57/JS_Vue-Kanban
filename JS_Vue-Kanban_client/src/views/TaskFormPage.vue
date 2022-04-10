<template>
  <task-form v-bind:list="this.list" v-bind:id="this.id" />
</template>

<script>
import TaskForm from "../components/taskFormPage/TaskForm";

export default {
  name: "TaskFormPage",

  components: {
    TaskForm,
  },

  props: ["id", "list"],
};
</script>

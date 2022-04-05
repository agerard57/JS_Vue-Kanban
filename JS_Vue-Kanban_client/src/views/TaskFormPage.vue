<template>
  <task-form list="list" id="id" />
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

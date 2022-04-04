<template>
  <span>
    <router-link
      class="btn btn-outline-primary btn-sm"
      :to="{ name: 'View task', params: { id: id } }"
      >View</router-link
    >
    <router-link
      class="btn btn-outline-secondary btn-sm"
      :to="{ name: 'Edit task', params: { id: id } }"
      >Edit</router-link
    >
    <a class="btn btn-outline-danger btn-sm" @click="deleteButtonAction"
      >Delete</a
    >
  </span>
</template>

<script>
import axios from "axios";

export default {
  name: "CardButtons",
  props: ["id"],
  methods: {
    deleteButtonAction() {
      axios
        .delete(`http://localhost:3000/todos/${this.id}`)
        .then((response) => (this.todos = response.data))
        .then(location.reload());
    },
  },
};
</script>

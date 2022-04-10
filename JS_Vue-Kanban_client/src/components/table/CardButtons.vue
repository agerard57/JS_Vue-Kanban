<template>
  <span>
    <router-link
      class="btn btn-outline-primary btn-sm"
      :to="{ name: 'View task', params: { id: id } }"
      >View</router-link
    >
    <span v-if="loggedIn">
      <router-link
        class="btn btn-outline-secondary btn-sm"
        :to="{ name: 'Edit task', params: { id: id } }"
        >Edit</router-link
      >
      <a class="btn btn-outline-danger btn-sm" @click="deleteButtonAction"
        >Delete</a
      >
    </span>
  </span>
</template>

<script>
import api from "../../services/api";

export default {
  name: "CardButtons",
  props: ["id"],
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  methods: {
    deleteButtonAction() {
      api.delete(`/todos/${this.id}`).then(() => {
        this.$toast.info("Your task has been deleted.", {
          position: "top-right",
        });
        this.$router.push("/");
      });
    },
  },
};
</script>

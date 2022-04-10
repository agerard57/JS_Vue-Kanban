<template>
  <main>
    <h3 class="text-center space">
      {{ welcomeMessage }}
    </h3>
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

  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },

    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },

    welcomeMessage() {
      if (this.loggedIn)
        return `Welcome back ${this.currentUser.username}, welcome to your kanban!`;
      else
        return "Welcome to our kanban app, log in if you want to make modifications or whatnot";
    },
  },

  // Colums titles and descriptions
  data: () => ({
    KanbanColumns: [
      { title: "Latest tasks", description: "See the three latest tasks" },
      { title: "Favourites", description: "See your favourite tasks" },
    ],
  }),
};
</script>

<style scoped>
.space {
  padding: 0 0 20px 0;
}
</style>

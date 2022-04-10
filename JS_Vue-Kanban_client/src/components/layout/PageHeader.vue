<template>
  <header>
    <h1 class="title">Kanban app</h1>
    <div id="nav">
      <router-link :to="{ name: 'Home page' }">Home</router-link> |
      <router-link :to="{ name: 'Tasks lists' }">List</router-link> |
      <router-link
        class="btn btn-success"
        :to="{ name: 'Sign up / Login' }"
        v-if="!this.loggedIn"
      >
        Login / Sign-up</router-link
      >
      <span v-else>
        <router-link :to="{ name: 'Add a new task' }">Add task</router-link> |
        <button type="button" class="btn btn-danger" @click.prevent="logOut">
          Log out
        </button>
      </span>
    </div>
  </header>
</template>

<script>
export default {
  name: "PageHeader",

  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },

  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$toast.info("You are now logged out.", {
        position: "top-right",
      });
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
@import "../../styles/pageHeader.css";
</style>

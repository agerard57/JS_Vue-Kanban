<template>
  <main class="content text-center">
    <p>{{ message }}</p>
    <a href @click="$router.go(-1)" v-if="loggedIn">Go back</a>
    <router-link :to="{ name: 'Sign up / Login' }" v-else
      >Sign up or Log in here</router-link
    >
  </main>
</template>

<script>
export default {
  name: "AuthMessage",

  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },

    message() {
      if (this.loggedIn) return "Oops, it seems you are already logged in !";
      else return "Oops, you must be logged to see this page";
    },
  },
};
</script>

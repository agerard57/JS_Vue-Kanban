<template>
  <div>
    <div
      class="card-body text-center p-3"
      v-for="(todo, index) in todos"
      :key="todo.id"
    >
      <div class="card border-secondary mb-3 bg-light">
        <div class="card-body p-3">
          <div class="mr-n2">
            <favourite-star v-bind:is-favourite="todo.fav" />
          </div>
          <h4>{{ todo.title }}</h4>
          <p>{{ todo.description }}</p>
          <div class="mt-n1">
            <small>Author: {{ todo.author }}</small>
          </div>
          <card-buttons v-bind:id="todo.id" />
        </div>
      </div>
      <div
        class="card-body p-3"
        v-if="index == lastTodo && !isHomePage && loggedIn"
      >
        <router-link
          class="btn btn-primary btn-block"
          :to="{ name: 'Add a new task', params: { list: todo.list } }"
          >Add new task in "{{ todo.list.toLowerCase() }}"</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import CardButtons from "./CardButtons.vue";
import FavouriteStar from "./FavouriteStar.vue";
import CardsService from "../../services/cards.service";

export default {
  name: "TodoItem",

  props: ["columnTitle"],

  components: { CardButtons, FavouriteStar },

  data: () => ({
    error: "",
    todos: [],
  }),

  mounted() {
    CardsService.getAllCards().then((results) => {
      let filteredResults = results.data.filter(
        (element) => element.list === this.columnTitle
      );

      if (this.columnTitle === "FAVOURITES")
        filteredResults = results.data.filter(
          (element) => element.fav === true
        );
      else if (this.columnTitle === "LATEST TASKS")
        filteredResults = results.data.sort((x, y) => y.id - x.id).splice(0, 3);

      this.todos = filteredResults;
    });
  },

  computed: {
    lastTodo() {
      return (
        (Array.isArray(this.todos) ? this.todos : Object.keys(this.todos))
          .length - 1
      );
    },

    isHomePage() {
      return this.$route.name === "Home page";
    },

    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
};
</script>

<style>
img {
  max-width: 300px;
  height: auto;
}

.btn-sm {
  margin: 10px;
}
</style>

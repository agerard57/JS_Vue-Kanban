<template>
  <div>
    <div class="card-body p-3" v-for="(todo, index) in todos" :key="todo.id">
      <div class="card mb-3 bg-light">
        <div class="card-body p-3">
          <div class="float-right mr-n2">
            <favourite-button v-bind:is-favourite="todo.fav" />
          </div>
          <h4>{{ todo.title }}</h4>
          <p>{{ todo.description }}</p>
          <div class="float-right mt-n1">
            <!-- 
              TODO Change into author
            <small>{{ todo.list }}</small> 
            -->
          </div>
          <card-buttons v-bind:id="todo.id" />
        </div>
      </div>
      <div class="card-body p-3" v-if="index == lastTodo">
        <a href="#" class="btn btn-primary btn-block">Add new</a>
      </div>
    </div>
  </div>
</template>

<script>
import CardButtons from "./CardButtons.vue";
import FavouriteButton from "./FavouriteButton.vue";
import axios from "axios";

export default {
  name: "TodoItem",
  props: ["columnTitle"],
  components: { CardButtons, FavouriteButton },
  data: () => ({
    error: "",
    todos: [],
  }),

  mounted() {
    axios
      .get("http://localhost:3000/todos")
      .then((response) => (this.todos = response.data))
      .then((results) => {
        const filteredResults = results.filter(
          (element) => element.list === this.columnTitle
        );
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

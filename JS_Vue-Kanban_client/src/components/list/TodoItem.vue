<template>
  <div>
    <div class="card-body p-3" v-for="(todo, index) in todos" :key="todo.id">
      <div class="card mb-3 bg-light">
        <div class="card-body p-3">
          <div class="float-right mr-n2">
            <label class="custom-control custom-checkbox">
              <!-- checked="" -->
              <input type="checkbox" class="custom-control-input" />
              <span class="custom-control-label"></span>
            </label>
          </div>
          <h4>{{ todo.title }}</h4>
          <p>{{ todo.description }}</p>
          <div class="float-right mt-n1">
            <!-- 
              TODO Change into author
            <small>{{ todo.list }}</small> 
            -->
          </div>
          <a class="btn btn-outline-primary btn-sm" href="#">View</a>
          <a class="btn btn-outline-secondary btn-sm" href="#">Edit</a>
          <a class="btn btn-outline-danger btn-sm" href="#">Delete</a>
        </div>
      </div>
      <a href="#" class="btn btn-primary btn-block" v-if="index == lastTodo"
        >Add new</a
      >
    </div>
  </div>
</template>

<script>
const newHeader = new Headers();
const url = "http://localhost:3000/todos";
const options = {
  method: "GET",
  headers: newHeader,
  mode: "cors",
  cache: "default",
};

export default {
  name: "TodoItem",
  props: ["columnTitle"],
  data: () => ({
    error: "",
    todos: [],
  }),

  mounted() {
    fetch(url, options)
      .then((response) => response.json())
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

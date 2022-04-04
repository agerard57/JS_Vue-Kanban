<template>
  <div class="container">
    <!-- TODO MAKE THIS SUBMITTABLE FOR BOTH UPDATE AND ADD -->
    <form v-on:submit.prevent="submitAddTaskForm">
      <div class="form-group">
        <label for="title">Task title</label>
        <input
          v-model="form.title"
          id="title"
          name="title"
          type="text"
          class="form-control"
          aria-describedby="titleHelpBlock"
          required="required"
        />
        <span id="titleHelpBlock" class="form-text text-muted"
          >Enter the task title here...</span
        >
      </div>
      <div class="form-group">
        <label for="description">Task description</label>
        <textarea
          v-model="form.description"
          id="description"
          name="description"
          cols="40"
          rows="5"
          class="form-control"
          aria-describedby="descriptionHelpBlock"
          required="required"
        ></textarea>
        <span id="descriptionHelpBlock" class="form-text text-muted"
          >Enter your desctiption here...</span
        >
      </div>
      <div class="form-group">
        <label for="list">List</label>
        <div>
          <select
            v-model="form.list"
            id="list"
            name="list"
            class="custom-select"
            required="required"
            aria-describedby="listHelpBlock"
          >
            <option value="todo">Todo</option>
            <option value="in progress">In progress</option>
            <option value="done">Done</option>
          </select>
          <span id="listHelpBlock" class="form-text text-muted"
            >Choose your progress on the task</span
          >
        </div>
      </div>
      <div class="form-group">
        <label>Mark your task as favourite</label>
        <div>
          <div class="custom-control custom-radio custom-control-inline">
            <input
              v-model="form.fav"
              name="fav"
              id="fav_0"
              type="radio"
              aria-describedby="favHelpBlock"
              class="custom-control-input"
              value="false"
            />
            <label for="fav_0" class="custom-control-label">No</label>
          </div>
          <div class="custom-control custom-radio custom-control-inline">
            <input
              name="fav"
              id="fav_1"
              type="radio"
              aria-describedby="favHelpBlock"
              class="custom-control-input"
              value="true"
            />
            <label for="fav_1" class="custom-control-label">Yes</label>
          </div>
          <span id="favHelpBlock" class="form-text text-muted"
            >Your task is not favourite by default</span
          >
        </div>
      </div>
      <div class="form-group">
        <button name="submit" type="submit" class="btn btn-primary">
          Add your task
        </button>
      </div>
    </form>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "TodoItem",
  props: ["id"],
  data: () => ({
    form: {
      title: "",
      description: "",
      list: "",
      fav: "",
    },
  }),
  created() {
    axios
      .get(`http://localhost:3000/todos/${this.id}`)
      .then((task) => {
        console.log(task);
        this.form.title = task.data.title;
        this.form.description = task.data.description;
        this.form.list = task.data.list.toLowerCase();
        this.form.fav = task.data.fav;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    submitAddTaskForm() {
      axios
        .post("http://localhost:3000/todos/", this.form)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    submitUpdateTaskForm() {
      axios
        .put(`http://localhost:3000/todos/${this.id}`, this.form)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

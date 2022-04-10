<template>
  <div class="container text-center">
    <form v-on:submit.prevent="submitTaskForm">
      <fieldset :disabled="this.urlContains('task')">
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
            maxlength="50"
          />
          <span
            id="titleHelpBlock"
            class="form-text text-muted"
            v-if="!this.urlContains('task')"
            >Enter the task title here... (
            {{ this.charactersLeft("title", 50) }} )</span
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
            maxlength="500"
          ></textarea>
          <span
            id="descriptionHelpBlock"
            class="form-text text-muted"
            v-if="!this.urlContains('task')"
            >Enter your desctiption here... (
            {{ this.charactersLeft("description", 500) }} )</span
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
              :disabled="this.list !== undefined"
            >
              <option value="todo">Todo</option>
              <option value="in progress">In progress</option>
              <option value="done">Done</option>
            </select>
            <span
              id="listHelpBlock"
              class="form-text text-muted"
              v-if="!this.urlContains('task')"
              >Choose your progress on the task</span
            >
          </div>
        </div>
        <div class="form-group">
          <label>Task as favourite ?</label>
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
                v-model="form.fav"
                name="fav"
                id="fav_1"
                type="radio"
                aria-describedby="favHelpBlock"
                class="custom-control-input"
                value="true"
              />
              <label for="fav_1" class="custom-control-label">Yes</label>
            </div>
            <span
              id="favHelpBlock"
              class="form-text text-muted"
              v-if="!this.urlContains('task')"
              >Your task is not favourite by default</span
            >
          </div>
        </div>
      </fieldset>
      <div class="form-group">
        <button
          name="submit"
          type="submit"
          class="btn btn-success"
          v-if="!this.urlContains('task')"
        >
          {{ buttonLabel }} your task
        </button>
        <button
          type="button"
          class="btn btn-primary"
          @click="$router.go(-1)"
          v-else
        >
          Go back
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import CardsService from "../../services/cards.service";

export default {
  name: "AuthForm",
  props: ["id", "list"],
  data: () => ({
    form: {
      title: "",
      description: "",
      list: "",
      fav: "",
      author: "",
    },
  }),
  computed: {
    currentUser() {
      return this.$store.state.auth.user.username;
    },
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
    buttonLabel() {
      if (this.urlContains("edit")) return "Edit";
      else if (this.urlContains("add")) return "Add";
      else return null;
    },
  },
  created() {
    if (this.urlContains("edit") || this.urlContains("task")) {
      CardsService.getCard(this.id)
        .then((task) => {
          this.form.title = task.data.title;
          this.form.description = task.data.description;
          this.form.list = task.data.list.toLowerCase();
          this.form.fav = task.data.fav;
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      this.form.fav = false;
    }
    if (this.list !== undefined) {
      this.form.list = this.list.toLowerCase();
    }
  },
  methods: {
    charactersLeft(input, maxLength) {
      const formInput = this.form[input];
      return `${
        maxLength - formInput.length
      } / ${maxLength} characters remaining`;
    },
    urlContains(pageName) {
      return this.$route.path.includes(pageName);
    },
    actionConfirmation(task, action) {
      this.$toast.success(
        `You have successfully ${action} ${task.data.title}!`,
        {
          position: "top-right",
        }
      );
      this.$router.push("/todos");
    },
    submitTaskForm() {
      this.form.author = this.currentUser;

      if (this.urlContains("edit")) {
        CardsService.editCard(this.id, this.form, this.$toast, this.$router);
      } else if (this.urlContains("add")) {
        CardsService.addCard(this.form, this.$toast, this.$router);
      }
    },
  },
  mounted() {
    if (!this.loggedIn && !this.urlContains("task")) {
      this.$router.push("/login-message");
    }
  },
};
</script>

<style scoped>
@import "../../styles/forms.css";
</style>

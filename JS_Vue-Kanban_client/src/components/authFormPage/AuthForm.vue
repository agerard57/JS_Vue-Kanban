<template>
  <main class="container text-center">
    <div
      class="btn-group flex-center"
      id="log-selection"
      role="group"
      aria-label="Signup/Login buttons"
    >
      <input
        type="radio"
        v-model="authType"
        value="signup"
        class="btn-check"
        name="btnradio"
        id="signup-btn"
        autocomplete="off"
        checked
      />
      <label class="btn btn-outline-primary" for="signup-btn">Sign Up</label>
      <input
        type="radio"
        v-model="authType"
        value="login"
        class="btn-check"
        name="btnradio"
        id="login-btn"
        autocomplete="off"
      />
      <label class="btn btn-outline-primary" for="login-btn">Login</label>
    </div>
    <form v-on:submit.prevent="submitAuthForm">
      <div class="form-group" v-if="this.authType == 'signup'">
        <label for="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          v-model="form.email"
          aria-describedby="emailHelpBlock"
          required="required"
          class="form-control"
        />
        <span id="emailHelpBlock" class="form-text text-muted"
          >Enter your email here...</span
        >
      </div>
      <div class="form-group">
        <label for="username">Username</label>
        <input
          id="username"
          name="username"
          v-model="form.username"
          type="text"
          aria-describedby="usernameHelpBlock"
          required="required"
          class="form-control"
        />
        <span id="usernameHelpBlock" class="form-text text-muted"
          >Enter your username here...</span
        >
      </div>
      <div class="form-group">
        <label for="pwd">Password</label>
        <input
          id="pwd"
          name="pwd"
          v-model="form.password"
          type="password"
          aria-describedby="pwdHelpBlock"
          required="required"
          class="form-control"
        />
        <span id="pwdHelpBlock" class="form-text text-muted"
          >Enter your password here...</span
        >
      </div>
      <div class="form-group">
        <button name="submit" type="submit" class="btn btn-primary">
          Log in
        </button>
      </div>
    </form>
  </main>
</template>

<script>
import axios from "axios";

export default {
  name: "AuthForm",
  data: () => ({
    form: {
      email: "",
      username: "",
      password: "",
    },
    authType: "signup",
  }),
  created() {
    console.log(this.form);
  },
  methods: {
    submitAuthForm() {
      if (this.authType === "signup")
        axios
          .post("http://localhost:3000/signup/", this.form)
          .then((res) => {
            console.log(res);
          })
          .catch((error) => {
            console.log(error);
          });
      else
        axios
          .post("http://localhost:3000/login/", {
            username: this.form.username,
            password: this.form.password,
          })
          .then((res) => {
            console.log(res.data.accessToken);
          })
          .catch((error) => {
            console.log(error);
          });
    },
  },
};
</script>

<style scoped>
@import "../../styles/forms.css";
</style>

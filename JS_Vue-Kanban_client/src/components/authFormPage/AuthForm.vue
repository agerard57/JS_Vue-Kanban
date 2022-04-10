<template>
  <main class="container text-center">
    <div
      class="btn-group flex-center"
      id="log-selection"
      role="group"
      aria-label="Signup/Login buttons"
    >
      <!-- SIGNUP / LOGIN radio button -->
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
      <!-- EMAIL input -->
      <div class="form-group" v-if="this.authType == 'signup'">
        <label for="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          v-model="user.email"
          v-validate="'required|email|max:50'"
          aria-describedby="emailHelpBlock"
          class="form-control"
        />
        <div v-if="submitted && errors.has('email')" class="alert-danger">
          {{ errors.first("email") }}
        </div>
        <span id="emailHelpBlock" class="form-text text-muted"
          >Enter your email here...</span
        >
      </div>
      <!-- USERNAME input -->
      <div class="form-group">
        <label for="username">Username</label>
        <input
          id="username"
          name="username"
          v-model="user.username"
          type="text"
          aria-describedby="usernameHelpBlock"
          v-validate="'required|min:5|max:50'"
          class="form-control"
        />
        <div v-if="submitted && errors.has('username')" class="alert-danger">
          {{ errors.first("username") }}
        </div>
        <span id="usernameHelpBlock" class="form-text text-muted"
          >Enter your username here...</span
        >
      </div>
      <!-- PASSWORD SIGNUP input -->
      <div class="form-group" v-if="this.authType === 'signup'">
        <label for="pwd">Password</label>
        <input
          id="pwd"
          name="pwd"
          v-model="user.password"
          v-validate="'required'"
          data-vv-as="password"
          :class="{ 'is-danger': errors.has('pwd') }"
          type="password"
          aria-describedby="pwdHelpBlock"
          class="form-control"
          ref="pwd"
        />
        <div v-if="submitted && errors.has('pwd')" class="alert-danger">
          {{ errors.first("pwd") }}
        </div>
        <span id="pwdHelpBlock" class="form-text text-muted"
          >Enter your password here...</span
        >
      </div>
      <div class="form-group" v-else>
        <!-- PASSWORD LOGIN input -->
        <label for="pwd">Password</label>
        <input
          id="pwd"
          name="pwd"
          v-model="user.password"
          v-validate="'required'"
          type="password"
          aria-describedby="pwdHelpBlock"
          class="form-control"
        />
        <span id="pwdHelpBlock" class="form-text text-muted"
          >Enter your password here...</span
        >
      </div>
      <!-- PASSWORD CONFIRMATION input -->
      <div class="form-group" v-if="this.authType === 'signup'">
        <label for="pwdconfirm">Confirm Password</label>
        <input
          id="pwdconfirm"
          name="pwdconfirm"
          v-validate="'required|confirmed:pwd'"
          type="password"
          aria-describedby="pwdconfirmHelpBlock"
          class="form-control"
          :class="{ 'is-danger': errors.has('pwdconfirm') }"
          data-vv-as="password confirmation"
        />
        <div v-if="submitted && errors.has('pwdconfirm')" class="alert-danger">
          {{ errors.first("pwdconfirm") }}
        </div>
        <span id="pwdHelpBlock" class="form-text text-muted"
          >Enter again your password here...</span
        >
      </div>
      <!-- SUBMIT Button -->
      <div class="form-group">
        <button name="submit" type="submit" class="btn btn-primary">
          {{ this.authType === "signup" ? "Register" : "Log in" }}
        </button>
      </div>
      <!-- ERROR message -->
      <div
        v-if="message"
        class="alert form-group"
        :class="registerSuccessful ? 'alert-success' : 'alert-danger'"
      >
        {{ message }}
      </div>
    </form>
  </main>
</template>

<script>
import User from "../../models/user";

export default {
  name: "AuthForm",

  data: () => ({
    authType: "signup",
    message: "",
    registerSuccessful: false,
    submitted: false,
    user: new User("", "", ""),
  }),

  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },

  mounted() {
    if (this.loggedIn) {
      this.$router.push("/login-message");
    }
  },

  created() {
    console.log(this.user);
  },

  methods: {
    submitAuthForm() {
      /* Signup form submitted */
      if (this.authType === "signup") {
        this.message = "";
        this.submitted = true;
        this.$validator.validate().then((isValid) => {
          if (isValid) {
            this.$store.dispatch("auth/register", this.user).then(
              (data) => {
                this.message = `The account for ${data.username} has been successfully created`;
                this.registerSuccessful = true;
                this.authType = "login";
              },
              (error) => {
                this.message =
                  (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                  error.message ||
                  error.toString();
                console.log("error");
                this.registerSuccessful = false;
              }
            );
          }
        });

        /* Login form submitted */
      } else {
        if (this.user.username && this.user.password) {
          this.$store.dispatch("auth/login", this.user).then(
            () => {
              this.$toast.success(
                `You are now connected as ${this.user.username}.`,
                {
                  position: "top-right",
                }
              );
              this.$router.push("/");
            },
            (error) => {
              this.message =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
            }
          );
        }
      }
    },
  },
};
</script>

<style scoped>
@import "../../styles/forms.css";
</style>

<template>
  <a href="#" class="btn btn-primary btn-block">Add new</a>
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
  name: "AddTaskButton",
  props: ["columnTitle"],
  data: () => ({
    error: "",
  }),

  mounted() {
    fetch(url, options)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        alert(JSON.stringify(data));
      });
  },
};
</script>
/* TODO DO SOMETHING WITH THIS I GUESS */

<template>
  <div class="page2">
    <h1>Page 2!!!</h1>
    <p>{{ message }}</p>
    <button v-on:click="changeMessage">Click me!</button>
  </div>
</template>

<script>
export default {
  data() {
    return { message: "Hello world!" };
  },
  methods: {
    changeMessage: function() {
      this.message = "The message has changed!";
    }
  }
};
</script>
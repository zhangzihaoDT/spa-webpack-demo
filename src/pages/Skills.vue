<template>
  <div class="skills">
    <div class="holder">
      <ul>
        <li v-for="(data, index) in skills" :key="index">{{data.skill}}</li>
      </ul>

      <!-- Add these 2 lines -->
      <p v-if="skills.length >= 1">You have more than 1 skill</p>
      <p v-else>You have less than or equal to 1 skill</p>

      <!-- Add this -->
      <div v-bind:class="{ alert: showAlert}"></div>
    </div>
    <div class="next">
      <h1>Second module</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      skills: [
        { skill: "Vue.js" },
        { skill: "Frontend Developer" },
        { skill: "Frontend Developer" }
      ],
      showAlert: true // Add this
    };
  }
};
</script>

<style scoped>
.alert {
  background-color: yellow;
  width: 100%;
  height: 30px;
}
.next {
  background-color: #333;
  margin-top: 40px;
  height: 400px;
}
.holder {
  background: #fff;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

ul li {
  padding: 20px;
  font-size: 1.3em;
  background-color: #e0edf4;
  border-left: 5px solid #3eb3f6;
  margin-bottom: 2px;
  color: #3e5252;
}

p {
  text-align: center;
  padding: 30px 0;
  color: gray;
}

.container {
  box-shadow: 0px 0px 40px lightgray;
}
</style>
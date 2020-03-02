<template>
  <div id="app" class="small-container">
    <!--使用注入的NavigationMenu组件-->
    <navigation-menu></navigation-menu>
    <!--用于显示页面组件-->
    <router-view></router-view>
  </div>
</template>

<script>
import NavigationMenu from "./components/NavigationMenu";

export default {
  components: {
    NavigationMenu
  }
};
</script>

<!--添加以下全局CSS规则集：-->

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700");

body {
  background-color: #eeeeee;
  font-family: "Montserrat", sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;
}
nav {
  padding: 20px 20px 20px 0;
}

nav a {
  padding: 10px;
  text-decoration: none;
  background: #fff;
  border-radius: 3px;
  color: rgb(0, 110, 255);
  font-weight: bold;
  margin-right: 15px;
}
body,
html {
  margin: 0;
  height: 100%;
}
#app {
  width: 90vw;
}
</style>
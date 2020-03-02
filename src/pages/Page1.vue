<template>
  <div class="page1">
    <h1>Page 1</h1>
    <sub-tabs></sub-tabs>
    <router-view></router-view>
  </div>
</template>

<script>
import SubTabs from "../components/SubTabs";

export default {
  components: {
    SubTabs
  }
};
</script>
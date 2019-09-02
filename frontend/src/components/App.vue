<template>
  <!-- Component layout, managed by vue -->
  <div id="vue-app">
    {{name}}
  </div>
</template>

<script lang="ts">
  // Imports
  import Vue from "vue";

  // Extend vue instance of component
  export default Vue.extend({
    data: function() {
      return {
        name: 'Hello World!'
      }
    }
  });
</script>

<style lang="scss">
  #vue-app {
    text-decoration: underline;
  }
</style>
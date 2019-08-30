<template>
  <!-- Component layout, managed by vue -->
  <div>
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
  /* Constants */
  $primary-color: white;
  $bg: black;
  
  /* Document body */
  body {
    color: $primary-color;
    background-color: $bg;
  }
</style>
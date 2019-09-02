<template>
  <!-- Component layout, managed by vue -->
  <div id="vue-app">
    {{greeting}}<br/>
    <img v-bind:src="image" />
  </div>
</template>

<script lang="ts">
  // Imports
  import Vue from "vue";

  // Extend vue instance of component
  export default Vue.extend({
    data: function() {
      return {
        greeting: 'Hello World!',
        image: require('../assets/images/ayaya.png')
      }
    }
  });
</script>

<style lang="scss">
  #vue-app {
    text-decoration: underline;
  }
</style>
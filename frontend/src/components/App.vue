<template>
  <!-- Component layout, managed by vue -->
  <div id="vue-app">
    {{message}}<br/>
    <img src="../assets/images/ayaya.png" />
  </div>
</template>

<script lang="ts">
  // Imports
  import Vue from "vue";

  // Extend vue instance of component
  export default Vue.extend({
    data: function() {
      return {
        message: 'Hello world! \ue6a8'
      }
    }
  });
</script>

<style lang="scss">
  @font-face {
    font-family: 'devicons';
    src: url('../assets/fonts/devicons/devicons.ttf') format('truetype'),
      url('../assets/fonts/devicons/devicons.woff') format('woff'),
      url('../assets/fonts/devicons/devicons.eot') format('embedded-opentype');
    font-weight: normal;
    font-style: normal;
  }

  #vue-app {
    font-family: 'devicons';
  }
</style>
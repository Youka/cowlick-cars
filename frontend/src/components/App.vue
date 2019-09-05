<template>
  <!-- Vue-managed site layout -->
  <v-app>
    <v-form>
      <v-text-field v-bind:label="message" />
    </v-form>
    <img src="../assets/images/ayaya.png" width=100 />
  </v-app>
</template>

<script lang="ts">
  // Imports
  import Vue from "vue";

  // Extend vue instance of component
  export default Vue.extend({
    data: function() {
      return {
        message: 'Hello world! \ue6a8'
      };
    }
  });
</script>

<style lang="scss">
  /* Application default font */
  #app {
    font-family: 'devicons';
  }
</style>
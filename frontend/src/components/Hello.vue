<template>
  <v-form>
    <v-text-field v-bind:label="message" />
    <img src="../assets/images/ayaya.png" width=100 />
  </v-form>
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
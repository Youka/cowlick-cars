<template>
  <v-container fluid>
    <clc-hello />
  </v-container>
</template>

<script lang="ts">
  import Hello from "../tiles/Hello.vue";

  export default {
    components: {
      "clc-hello": Hello
    }
  };
</script>
<template>
  <v-container fluid>
    <v-row>
      <v-col lg="6" md="12">
        <clc-hello />
      </v-col>
    </v-row>
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
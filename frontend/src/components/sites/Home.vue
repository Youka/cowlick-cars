<template>
  <v-container fluid>
    <v-card>
      <v-card-title>Message</v-card-title>
      <v-card-text>
        {{message}}
        <v-divider></v-divider>
        <img src="../../assets/images/ayaya.png" width=100 />
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
  import Vue from "vue";

  export default Vue.extend({
    data: () => ({
      message: "Hello world!"
    })
  });
</script>
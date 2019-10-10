<template>
  <v-container fluid>
    <v-card>
      <v-card-title>{{$vuetify.lang.t("$vuetify.home.message")}}</v-card-title>
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
    data() {
      return {
        message: this.$vuetify.lang.t("$vuetify.home.hello")
      };
    }
  });
</script>
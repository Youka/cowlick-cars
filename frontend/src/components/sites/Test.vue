<template>
  <v-form>
    <v-text-field v-model="count" label="Counter" readonly outlined></v-text-field>
    <v-btn v-on:click="increment">Increment counter</v-btn>
    <v-btn v-on:click="fetchGithubApi">Fetch Github API<v-icon right>mdi-cloud-download</v-icon></v-btn>
  </v-form>
</template>

<script lang="ts">
  // Imports
  import Vue from "vue";
  import {mapGetters, mapMutations} from "vuex";

  // Extend vue instance of component
  export default Vue.extend({
    // Map shared data store into component
    computed: mapGetters([
      "count"
    ]),
    methods: {
      ...mapMutations([
        "increment"
      ]),
      fetchGithubApi: () =>
        fetch("https://api.github.com/").then((response) => response.text()).then((data) => alert(data))
    }
  });
</script>
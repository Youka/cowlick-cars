<template>
    <v-tabs>
      <v-tab>Session</v-tab>
      <v-tab-item class="pa-3">
        <v-btn v-on:click="login">Login<v-icon right>mdi-login</v-icon></v-btn>
        <v-btn v-on:click="logout">Logout<v-icon right>mdi-logout</v-icon></v-btn>
        <v-btn v-on:click="session">Session<v-icon right>mdi-information</v-icon></v-btn>
      </v-tab-item>
      <v-tab>Counter</v-tab>
      <v-tab-item class="pa-3">
        <v-text-field v-model="count" label="Counter" readonly outlined></v-text-field>
        <v-btn v-on:click="increment">Increment counter</v-btn>
      </v-tab-item>
    </v-tabs>
</template>

<script lang="ts">
  // Imports
  import Vue from "vue";
  import {mapGetters, mapMutations} from "vuex";
  import AuthService from "../../services/auth-service";

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
      // Service requests
      login: () =>
        AuthService.login("admin", "admin")
        .then(async (response) =>
          alert("Status: " + response.status + "\nData: " + await response.text())
        ),
      logout: () =>
        AuthService.logout()
        .then(async (response) =>
          alert("Status: " + response.status + "\nData: " + await response.text())
        ),
      session: () =>
        AuthService.session()
        .then(async (response) =>
          alert("Status: " + response.status + "\nData: " + await response.text())
        )
    }
  });
</script>
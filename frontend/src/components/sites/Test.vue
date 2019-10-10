<template>
  <v-container fluid>
    <v-tabs>
      <v-tab>{{$vuetify.lang.t("$vuetify.test.session")}}</v-tab>
      <v-tab-item class="pa-3">
        <v-btn v-on:click="login">{{$vuetify.lang.t("$vuetify.test.login")}}<v-icon right>mdi-login</v-icon></v-btn>
        <v-btn v-on:click="logout">{{$vuetify.lang.t("$vuetify.test.logout")}}<v-icon right>mdi-logout</v-icon></v-btn>
        <v-btn v-on:click="session">{{$vuetify.lang.t("$vuetify.test.session")}}<v-icon right>mdi-information</v-icon></v-btn>
      </v-tab-item>
      <v-tab>{{$vuetify.lang.t("$vuetify.test.counter")}}</v-tab>
      <v-tab-item class="pa-3">
        <v-text-field v-model="count" v-bind:label="$vuetify.lang.t('$vuetify.test.counter')" readonly outlined></v-text-field>
        <v-btn v-on:click="increment">{{$vuetify.lang.t("$vuetify.test.incrementCounter")}}</v-btn>
      </v-tab-item>
    </v-tabs>
  </v-container>
</template>

<script lang="ts">
  // Imports
  import {mapGetters, mapMutations} from "vuex";
  import AuthService from "../../services/auth-service";

  // Extend vue instance of component
  export default {
    // Map shared data store into component
    computed: mapGetters([
      "count"
    ]),
    methods: {
      ...mapMutations([
        "increment"
      ]),
      // Service requests
      login() {
        AuthService.login("admin", "admin")
        .then((success) =>
          alert("Login: " + success)
        );
      },
      logout() {
        AuthService.logout()
        .then(() =>
          alert("Logout!")
        );
      },
      session() {
        AuthService.session()
        .then((response) =>
          alert("Status: " + response.status + "\nData: " + JSON.stringify(response.data))
        );
      }
    }
  };
</script>
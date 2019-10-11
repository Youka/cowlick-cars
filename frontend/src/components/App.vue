<template>
  <!-- Vue application root -->
  <v-app>
    <!-- Side navigation -->
    <v-navigation-drawer app v-model="showNavigation">
      <v-list nav>
        <v-list-item to="/">{{$t("app.home")}}</v-list-item>
        <v-list-item to="/test">{{$t("app.test")}}</v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- Top navigation -->
    <v-app-bar app>
      <v-app-bar-nav-icon @click="showNavigation = !showNavigation" />
    </v-app-bar>
    <!-- Main content -->
    <v-content>
      <router-view></router-view>
    </v-content>
    <!-- Footer -->
    <v-footer app>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
  // Imports
  import Vue from "vue";

  // Extend vue instance of component
  export default Vue.extend({
    data: () => ({
      // Show navigation initially
      showNavigation: true
    }),
    mounted() {
      // Set language by client browser
      this.$i18n.locale = navigator.language.split("-", 1)[0];
    }
  });
</script>

<style lang="scss">
  /* Application default font */
  #app {
    font-family: 'Open Sans';
  }
</style>
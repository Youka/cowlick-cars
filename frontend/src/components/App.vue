<template>
  <!-- Vue application root -->
  <v-app>
    <!-- Side navigation -->
    <v-navigation-drawer app v-model="showNavigation">
      <v-list nav>
        <v-list-item to="/">{{$vuetify.lang.t("$vuetify.app.home")}}</v-list-item>
        <v-list-item to="/test">{{$vuetify.lang.t("$vuetify.app.test")}}</v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- Top navigation -->
    <v-app-bar app>
      <v-app-bar-nav-icon v-on:click="showNavigation = !showNavigation" />
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
  export default {
    data: () => ({
      showNavigation: true
    })
  };
</script>

<style lang="scss">
  /* Application default font */
  #app {
    font-family: 'Open Sans';
  }
</style>
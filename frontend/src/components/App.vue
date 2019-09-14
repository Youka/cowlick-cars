<template>
  <!-- Vue application root -->
  <v-app>
    <!-- Side navigation -->
    <v-navigation-drawer app>
      <v-list nav>
        <v-list-item to="/">Home</v-list-item>
        <v-list-item to="/test">Test</v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- Top navigation -->
    <v-app-bar app>
    </v-app-bar>
    <!-- Main content -->
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <!-- Footer -->
    <v-footer app>
    </v-footer>
  </v-app>
</template>

<style lang="scss">
  /* Application default font */
  #app {
    font-family: 'Open Sans';
  }
</style>
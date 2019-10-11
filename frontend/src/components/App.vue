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
    <v-app-bar app fixed elevate-on-scroll>
      <v-app-bar-nav-icon @click="showNavigation = !showNavigation" />
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <v-spacer />
      <v-select
        v-model="language"
        :items="Object.keys($i18n.messages)"
        :label="$t('app.language')"
        hide-details outlined />
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
      showNavigation: true,
      // Copy title from html document
      title: document.title
    }),
    computed: {
      // Locale wrapper with offline storage
      language: {
        get() {
          return this.$i18n.locale;
        },
        set(language: string) {
          this.$i18n.locale = language;
          localStorage.language = language;
        }
      }
    },
    mounted() {
      // Set language by last save or client browser
      this.language = localStorage.language || navigator.language.split("-", 1)[0];
    }
  });
</script>

<style lang="scss">
  /* Application default font */
  #app {
    font-family: 'Open Sans';
  }
</style>
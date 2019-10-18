<template>
  <!-- Vue application root -->
  <v-app>
    <!-- Side navigation -->
    <v-navigation-drawer app v-model="navigationVisible">
      <v-list nav>
        <v-list-item to="/">{{$t("app.home")}}</v-list-item>
        <v-list-item to="/test">{{$t("app.test")}}</v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- Top navigation -->
    <v-app-bar app fixed elevate-on-scroll>
      <v-app-bar-nav-icon @click="navigationVisible = !navigationVisible" />
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
      <v-alert v-if="!offline" type="success" dense>{{$t("app.mode.online")}}</v-alert>
      <v-alert v-if="offline" type="warning" dense>{{$t("app.mode.offline")}}</v-alert>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
  // Imports
  import Vue from "vue";

  // Extend vue instance of component
  export default Vue.extend({
    data: () => ({
      // Copy title from html document
      title: document.title,
      // Copy online mode from browser
      offline: !navigator.onLine
    }),
    computed: {
      // Map language to shared data store and set i18n
      language: {
        get() {
          return this.$store.state.language;
        },
        set(language: string) {
          this.$store.commit("language", language);
          this.$i18n.locale = language;
        }
      },
      // Map navigation visibility to shared data store
      navigationVisible: {
        get() {
          return this.$store.state.navigationVisible;
        },
        set(navigationVisible: boolean) {
          this.$store.commit("navigationVisible", navigationVisible);
        }
      }
    },
    mounted() {
      // Initialize i18n from shared state
      this.$i18n.locale = this.$store.state.language;
    }
  });
</script>

<style lang="scss">
  /* Application default font */
  #app {
    font-family: 'Open Sans';
  }
</style>
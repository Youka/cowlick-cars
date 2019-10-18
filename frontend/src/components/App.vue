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
      <v-alert v-if="online" type="success" dense>{{$t("app.mode.online")}}</v-alert>
      <v-alert v-if="!online" type="warning" dense>{{$t("app.mode.offline")}}</v-alert>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
  // Imports
  import Vue from "vue";
  import {mapFields} from "vuex-map-fields";

  // Extend vue instance of component
  export default Vue.extend({
    data: () => ({
      // Copy title from html document
      title: document.title,
      // Copy online mode from browser
      online: navigator.onLine
    }),
    computed: mapFields([
      "language",
      "navigationVisible"
    ]),
    watch: {
      language(newLanguage) {
        this.$i18n.locale = newLanguage;
      }
    },
    mounted() {
      // Initialize i18n from shared state
      this.$i18n.locale = this.$store.state.language;
      // Observe online mode
      window.addEventListener("online", () => this.online = true);
      window.addEventListener("offline", () => this.online = false);
    }
  });
</script>

<style lang="scss">
  /* Application default font */
  #app {
    font-family: 'Open Sans';
  }
</style>
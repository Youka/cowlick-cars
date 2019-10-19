// Import libraries
import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import VueI18n from "vue-i18n";
import Vuetify from "vuetify/lib";
import "@mdi/font/scss/materialdesignicons.scss";
import * as OfflinePluginRuntime from "offline-plugin/runtime";

// Extend Vue by plugins
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueI18n);
Vue.use(Vuetify);

// Import configurations
import routes from "./config/routes";
import store from "./config/store";
import locales from "./config/locales";
import theme from "./config/theme";

// Import components
import "./main.scss";
import App from "./components/App.vue";

// Mount Vue instance for application
const vueApp = new Vue({
    el: "#app", // Hook root element
    render: (createElement) => createElement(App), // Render root element
    router: new VueRouter({ routes }),  // Register navigation routes
    store: new Vuex.Store(store),  // Register shared data store
    i18n: new VueI18n(locales), // Register languages for translation
    vuetify: new Vuetify({ theme }) // Register initial ui components
});

// Enable offline mode
OfflinePluginRuntime.install();
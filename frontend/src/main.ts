// Import libraries
import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import Vuetify from "vuetify/lib";
import "@mdi/font/scss/materialdesignicons.scss";

// Extend Vue by plugins
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Vuetify);

// Import configurations
import routes from "./config/routes";
import store from "./config/store";
import theme from "./config/theme";
import lang from "./config/lang";

// Import components
import "./main.scss";
import App from "./components/App.vue";

// Mount Vue instance for application
const vueApp = new Vue({
  el: "#app", // Hook root element
  render: (createElement) => createElement(App), // Render root element
  router: new VueRouter({routes}),  // Register navigation routes
  store: new Vuex.Store(store),  // Register shared data store
  vuetify: new Vuetify({  // Register initial ui components
    theme, // Define theme for default components style
    lang  // Register locales for i18n
  })
});
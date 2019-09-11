// Imports
import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import App from "./components/App.vue";
import routes from "./config/routes";

// Embed global style
import "./main.scss";

// Register polyfills
import "promise-polyfill/src/polyfill";
import "whatwg-fetch";

// Extend Vue by plugins
Vue.use(VueRouter);
Vue.use(Vuex);

// Mount Vue instance of application
const vueApp = new Vue({
  el: "#app", // Hook root element
  render: (createElement) => createElement(App), // Render root element
  router: new VueRouter({routes})  // Register navigation routes
});
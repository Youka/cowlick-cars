// Imports
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./components/App.vue";
import routes from "./config/routes";

// Embed global style
import "./main.scss";

// Extend Vue by plugins
Vue.use(VueRouter);

// Mount Vue instance of application
const vueApp = new Vue({
  el: "#app", // Hook root element
  render: (createElement) => createElement(App), // Render root element
  router: new VueRouter({routes})  // Register navigation routes
});
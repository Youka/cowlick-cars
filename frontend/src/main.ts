// Imports
import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import Vuetify from "vuetify/lib";
import App from "./components/App.vue";
import routes from "./config/routes";
import store from "./config/store";
import theme from "./config/theme";

// Embed global style
import "./main.scss";

// Extend Vue by plugins
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Vuetify);

// Mount Vue instance for application
const vueApp = new Vue({
  el: "#app", // Hook root element
  render: (createElement) => createElement(App), // Render root element
  router: new VueRouter({routes}),  // Register navigation routes
  store: new Vuex.Store(store),  // Register shared data store
  vuetify: new Vuetify({theme}) // Register initial ui components
});
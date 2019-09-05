// Imports
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import App from './components/App.vue';

// Embed global style
require("./main.scss");

// Extend Vue by plugins
Vue.use(Vuetify);

// Mount Vue instance of application
new Vue({
  vuetify: new Vuetify(), // Register initial ui components
  el: '#app', // Hook root element
  render: createElement => createElement(App) // Render root element
});
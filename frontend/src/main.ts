// Imports
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import VueRouter from 'vue-router';
import App from './components/App.vue';
import routes from './config/routes';

// Embed global style
require('./main.scss');

// Extend Vue by plugins
Vue.use(Vuetify);
Vue.use(VueRouter);

// Mount Vue instance of application
new Vue({
  vuetify: new Vuetify(), // Register initial ui components
  router: new VueRouter({routes}),  // Register navigation routes
  el: '#app', // Hook root element
  render: createElement => createElement(App) // Render root element
});
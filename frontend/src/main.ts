// Imports
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import VueRouter from 'vue-router';
import App from './components/App.vue';
import Home from './components/Home.vue';
import Hello from './components/Hello.vue';

// Embed global style
require('./main.scss');

// Extend Vue by plugins
Vue.use(Vuetify);
Vue.use(VueRouter);

// Mount Vue instance of application
new Vue({
  vuetify: new Vuetify(), // Register initial ui components
  router: new VueRouter({ // Register navigation routes
    routes: [
      {path: '/', component: Home},
      {path: '/hello', component: Hello}
    ]
  }),
  el: '#app', // Hook root element
  render: createElement => createElement(App) // Render root element
});
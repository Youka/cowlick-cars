// Imports
import Vue from 'vue';
import App from './components/App.vue';

// Embed site style
require("./main.scss");

// Mount Vue instance of application
new Vue({
  el: '#app',
  render: createElement => createElement(App)
});
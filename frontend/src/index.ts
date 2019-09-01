// Imports
import Vue from 'vue';
import App from './components/App.vue';

// Mount Vue instance of application
new Vue({
  el: '#app',
  render: createElement => createElement(App)
});
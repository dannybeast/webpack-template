// JS
import './js/';

// SCSS
import './assets/scss/main.scss'
import chooseFile from './components/chooseFile';
// CSS (example)
// import './assets/css/main.css'

// Vue.js
window.Vue = require('vue');

// Vue components (for use in html)
Vue.component('the-header', require('./components/TheHeader/TheHeader.vue').default);
Vue.component('ui-tabs', require('./components/UI/Tabs/Tabs.vue').default);
Vue.component('ui-hamburger', require('./components/UI/Hamburger/Hamburger.vue').default);
// Vue init
const app = new Vue({
  el: '#app',
  data: {
    test: 'UI'
  },
  mounted() {
    chooseFile();
  },
});
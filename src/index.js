// JS
import './js/';

// SCSS
import './assets/scss/main.scss'

// CSS (example)
// import './assets/css/main.css'

// Vue.js
window.Vue = require('vue');
console.log('qq');
// Vue components (for use in html)
Vue.component('the-header', require('./components/TheHeader/TheHeader.vue').default);
Vue.component('ui-tabs', require('./components/UI/Tabs/Tabs.vue').default);
Vue.component('ui-button', require('./components/UI/Button/Button.vue').default);
// Vue init
const app = new Vue({
  el: '#app',
  data: {
    test: 'UI'
  }
});
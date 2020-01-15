// JS
import './js/';

// SCSS
import './assets/scss/main.scss'
import chooseFile from './components/UI/chooseFileButton';
import inputmasks from './components/UI/inputmasks';
import notice from './components/UI/notifications';
import {
  modal,
  initModal
} from './components/UI/modals';

// Vue.js
window.Vue = require('vue');

// Vue components (for use in html)
Vue.component('the-header', require('./components/TheHeader/TheHeader.vue').default);
Vue.component('ui-tabs', require('./components/UI/Tabs/Tabs.vue').default);
Vue.component('ui-hamburger', require('./components/UI/Hamburger/Hamburger.vue').default);
// Vue init
const app = new Vue({
  el: '#app',
  mounted() {
    chooseFile();
    inputmasks();
    initModal();
    notice.openError('Helllo');
    modal.open('foo');

  },
});
// SVG
var __svg__ = {
  path: "./assets/icons/**/*.svg",
  name: "assets/icons/sprite.svg",
  filename: "/assets/icons/sprite.svg"
};

require("webpack-svgstore-plugin/src/helpers/svgxhr")(__svg__);

// SCSS
import "./assets/scss/app.scss";

// Modules
import $ from "jquery";
import '@fancyapps/fancybox';
import Accordion from "./js/modules/accordion";
import hideLoader from "./js/modules/loader";
import mobileNavigation from "./js/modules/mobileNavigation";
import animations from "./js/modules/animations";
import "autoresize-textarea";
import Helpers from "./js/modules/helpers";
import  "./js/modules/awesomeNotifications";


$(document).ready(function () {


  let helpers = new Helpers()
  helpers.currentYear()
  helpers.toggle()


  mobileNavigation();

  // Accordion
  for (const e of document.querySelectorAll('[data-accordion="trigger"]')) {
    const newAccordion = new Accordion(e);
    newAccordion;
  }

  animations();
  hideLoader();
})
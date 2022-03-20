import '../libs/resizeSensor';
import 'sticky-sidebar';

export let sidebar = new StickySidebar('.js-sticky-sidebar', {
  topSpacing: 0,
  responsiveWidth: true,
  resizeSensor: true,

});
export default class Helpers {
  toggle() {
    $.fn.extend({
      toggleText: function (a, b) {
        return this.text(this.text() == b ? a : b);
      },
    });
  }

  currentYear() {
    // Year
    let currentYear = new Date().getFullYear();
    $('.js-current-year').html(currentYear);
  }
}

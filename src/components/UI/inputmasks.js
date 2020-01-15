import IMask from 'imask';
// https://imask.js.org/guide.html#getting-started

export default function () {

    // Mask phone
    document.querySelectorAll('.js-phone-mask').forEach((input) => {
        IMask(
            input, {
                mask: '+{7}(000)000-00-00',
                lazy: false,
            });
    });

}
export default function () {

    for (let button of document.querySelectorAll('.choose-file')) {
        let content = `<span class="btn">Выберите файл</span>`;
        let input = button.querySelector('input');

        // Added button
        button.insertAdjacentHTML('afterbegin', content);

        // Input event => replace text button
        input.addEventListener('change', e => button.querySelector('.btn').innerHTML = e.target.value)
    }

}
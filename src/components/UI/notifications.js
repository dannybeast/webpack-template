const hideTime = 2000;
const noticeElement = document.createElement('div');
noticeElement.classList.add('notice');
document.body.appendChild(noticeElement);

class Notice {
    close() {
        noticeElement.classList = "";
        noticeElement.classList.add('notice');
        noticeElement.innerHTML = "";
    }
    openSuccess(text) {
        noticeElement.innerHTML = text;
        noticeElement.classList.add('notice--green', 'notice--open');
        setTimeout(this.close, hideTime);
    }
    openError(text) {
        noticeElement.innerHTML = text;
        noticeElement.classList.add('notice--red', 'notice--open');
        setTimeout(this.close, hideTime);
    }
}
export default new Notice();
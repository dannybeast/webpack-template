const modalElements = document.querySelectorAll(".modal");
const openLink = document.querySelector(".js-modal-open");
const closeLink = document.querySelector(".js-modal-close");

export function initModal() {
    const modal = new Modal();
    document.querySelector(".js-modal-close").addEventListener('click', () => {
        modal.close();
    });
}

class Modal {
    close() {
        modalElements.forEach((modalElement) => {
            modalElement.classList.remove('modal--open');
        })
    }
    open(id) {
        this.close();
        let modalElement = document.querySelector(`div#${id}`);
        if (modalElement) {
            modalElement.classList.add('modal--open');
        }
    }
}


export const modal = new Modal();
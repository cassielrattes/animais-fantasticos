export default class Modal {
    constructor(openButton, closeButton, containerModal) {
        this.openButton = document.querySelector(openButton);
        this.closeButton = document.querySelector(closeButton);
        this.containerModal = document.querySelector(containerModal);

        this.eventToggleModal = this.eventToggleModal.bind(this);
        this.outsideModal = this.outsideModal.bind(this);
    }

    toggleModal() {
        this.containerModal.classList.toggle("ativo");
    }

    eventToggleModal(event) {
        event.preventDefault();
        this.toggleModal();
    }

    outsideModal(event) {
        if (event.target === this.containerModal) {
            this.toggleModal(event);
        }
    }

    addModalEvent() {
        this.openButton.addEventListener("click", this.eventToggleModal);
        this.closeButton.addEventListener("click", this.eventToggleModal);
        this.containerModal.addEventListener("click", this.outsideModal);
    }

    init() {
        if (this.openButton && this.closeButton && this.containerModal) {
            this.addModalEvent();
        }
        return this;
    }
}

import $ from "jquery";

class Modal {
  constructor() {
    this.openModalButton = $(".open-modal");
    this.modal = $(".modal");
    this.closeModalButton = $(".modal__close");
    this.events();
  }
  events() {

    // Clicking open modal openModalButton
    this.openModalButton.click(() => {
      this.openModal();
    });
    // Clicking the x close modal openModalButton
    this.closeModalButton.click(() => {
      this.closeModal();
    });
    // pushes any key
    $(document).keydown(() => {
      this.keyPressHandler(event);
    });
  }

  keyPressHandler(event) {
    if(event.keyCode === 27) {
      this.closeModal();
    }
  }

  openModal() {
    event.preventDefault();
    this.modal.addClass("modal--opened");
  }
  closeModal() {
    this.modal.removeClass("modal--opened");
  }
}

export default Modal;

//ВАЛИДАЦИЯ ФОРМ
const showError = (errorElement, inputElement, config) => {
    inputElement.classList.add(config.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
}

const hideError = (errorElement, inputElement, config) => {
    inputElement.classList.remove(config.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
}

const checkInputValidity = (inputElement, formElement, config) => {
    const isInputValid = inputElement.validity.valid;
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    if (!isInputValid) {
        showError(errorElement, inputElement, config)
    } else {
        hideError(errorElement, inputElement, config)
    }
}

export const toggleButtonState = (button, isActive = false, config) => {
    if (isActive) {
        button.classList.remove(config.inactiveButtonClass);
        button.disabled = false;
    } else {
        button.classList.add(config.inactiveButtonClass);
        button.disabled = 'disabled';
    }
}

const setEventListeners = (formElement, config) => {
    const inputList = formElement.querySelectorAll(config.inputSelector);
    const submitButton = formElement.querySelector(config.submitButtonSelector);

    [...inputList].forEach(input => {
        input.addEventListener('input', () => {
            checkInputValidity(input, formElement, config);
            toggleButtonState(submitButton, formElement.checkValidity(), config)
        })
    })

    formElement.addEventListener('submit', (e) => {
        e.preventDefault();
        toggleButtonState(submitButton, formElement.checkValidity(), config)
    });
}

export const enableValidation = (config) => {
    const forms = document.querySelectorAll(config.formSelector);
    [...forms].forEach(form => {
        setEventListeners(form, config)
    })
}

export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__line',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup_line-error',
}
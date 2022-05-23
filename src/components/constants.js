export const profilePopup = document.querySelector('.popup_type_profile')
export const imagePopup = document.querySelector('.popup_type_image')
export const openPopupButton = document.querySelector('.profile__edit-button')
export const nameInPopup = document.querySelector('.input__text_type_username')
export const jobInPopup = document.querySelector('.input__text_type_job')
export const nameInProfile = document.querySelector('.profile__name')
export const jobInProfile = document.querySelector('.profile__job')
export const form = profilePopup.querySelector('.popup__form')
export const avatarInProfile = document.querySelector('.profile__avatar')
export const avatarPopup = document.querySelector('.popup_type_avatar')
export const inputAvatarLink = avatarPopup.querySelector('.input__link')
export const editAvatarInProfile = avatarPopup.querySelector('.popup__form')

// Переменные связанные с созданием карточки
export const cardTemplate = document.querySelector('#card-template').content.querySelector('.card')
export const cardList = document.querySelector('.cards')
export const cardPopup = document.querySelector('.popup_type_card') // Попап добавления карточки
export const addForm = cardPopup.querySelector('.popup__form') // Форма добавления карточки. Нашли через попап
export const inputName = addForm.querySelector('.input__name') // Поле формы с названием. Нашли через форму
export const inputLink = addForm.querySelector('.input__link') // Поле формы с ссылкой. Нашли через форму
export const cardImage = imagePopup.querySelector('.card__image')
export const volumeLikes = document.querySelector('.card__volume-likes')

// Кнопки с попапов
export const buttonCardPopup = cardPopup.querySelector('.popup__button')
export const buttonProfilePopup = profilePopup.querySelector('.popup__button')
export const buttonAvatarPopup = avatarPopup.querySelector('.popup__button')

// Валидация
export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__line',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup_line-error',
}
import {
  cardTemplate, imagePopup, cardImage} from './constants'

import {openPopup} from './modal'  

import { toggleButtonState } from './validate'

import {addForm} from './index'

// создание карточки
export const createCard = (title, link) => {
  const cardElement = cardTemplate.cloneNode(true)

  cardElement.querySelector('.card__title').textContent = title

  const imageElement = cardElement.querySelector('.card__photo')

  imageElement.src = link
  imageElement.alt = title

  imageElement.addEventListener('click', function(event) {
      cardImage.src = event.target.src;
      cardImage.alt = event.target.alt;
      imagePopup.querySelector('.card__subtitle').textContent = event.target.closest('.card').querySelector('.card__title').textContent;
      openPopup(imagePopup);
  });

  cardElement.querySelector('.card__img').addEventListener('click', handleCardLikeClick)

  cardElement.querySelector('.card__button-delete').addEventListener('click', handleCardRemoveClick)

  return cardElement
}

// Функция добавления элемента карточки в верстку (рендер карточки)
export const renderCard = (cardList, cardElement) => {
  cardList.prepend(cardElement)
}

// Лайки
const handleCardLikeClick = (event) => {
  event.target.classList.toggle('card__img_active')
}

  // Удаление карточки
const handleCardRemoveClick = (event) => {
  event.target.closest('.card').remove()
} 
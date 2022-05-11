import {
  cardTemplate, imagePopup, cardImage, cardList} from './constants'

import {openPopup} from './modal'  

import { toggleButtonState } from './validate'

import {addForm} from './index'

import {removeCard} from './api'

// создание карточки
export const createCard = (cardItem) => {
  const cardElement = cardTemplate.cloneNode(true)

  cardElement.querySelector('.card__title').textContent = cardItem.name

  const imageElement = cardElement.querySelector('.card__photo')

  imageElement.src = cardItem.link
  imageElement.alt = cardItem.title
  imageElement.id = cardItem._id
  // Перенос количества лайков с сервера в карточку РАБОТАЕТ 7
  cardElement.querySelector('.card__volume-likes').textContent = cardItem.likes.length

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
  cardList.append(cardElement)
}

// Лайки
const handleCardLikeClick = (event) => {
  event.target.classList.toggle('card__img_active')
}

  // Удаление карточки
const handleCardRemoveClick = (event) => {
  // removeCard(cardId._id)
  // .then(dataFromServer => {
  //   event.target.closest('.card').remove()
  // })
  // console.log(cardId)
  event.target.closest('.card').remove()
} 
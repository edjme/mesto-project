import {
  cardTemplate, imagePopup, cardImage,
  nameInProfile, cardDeletePopup} from './constants'

import {openPopup} from './modal'  
import { toggleButtonState } from './validate'
import {addForm} from './index'
import {removeCard, putLikesCard, deleteLikesCard} from './api'

// создание карточки
export const createCard = (cardItem) => {
  const cardElement = cardTemplate.cloneNode(true)
  const imageElement = cardElement.querySelector('.card__photo')
  const bin = cardElement.querySelector('.card__button-delete')

  cardElement.querySelector('.card__title').textContent = cardItem.name
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

// Отрисовка лайков с сервера РАБОТАЕТ
renderLikesFromServer(cardItem, cardElement)


  cardElement.querySelector('.card__img').addEventListener('click', event => {
  if (event.target.classList.contains('card__img_active')) {
    deleteLikesCard(cardItem._id)
    .then(dataFromServer => {
      console.log('лайк удалён с сервера')
      renderLikesFromServer(dataFromServer, cardElement)
      cardElement.querySelector('.card__volume-likes').textContent = dataFromServer.likes.length
    })
  } else {
    putLikesCard(cardItem._id)
    .then(dataFromServer => {
      console.log('лайк добавлен на сервер')
      renderLikesFromServer(dataFromServer, cardElement)
      cardElement.querySelector('.card__volume-likes').textContent = dataFromServer.likes.length
    })
  }
  })

  // Убирает корзину с карточки, если создавал не пользователь РАБОТАЕТ 8.1
  if ((cardItem.owner._id) != (nameInProfile.id)) {
    bin.classList.toggle('card__button-delete_disabled')
  }

  // Удаление карточки на сервере и в вёрстке РАБОТАЕТ 8.2 МОМЕНТАЛЬНО
  bin.addEventListener('click', (event) => {
    removeCard(cardItem._id)
      .then(dataFromServer => {
        event.target.closest('.card').remove()
      })
  })

  return cardElement

}

// Отрисовка лайков с сервера РАБОТАЕТ
const renderLikesFromServer = (cardItem, cardElement) => {
  if (cardItem.likes.some((e) => e.id === nameInProfile._id)) {
    cardElement.querySelector('.card__img').classList.toggle('card__img_active')
  } else {
    cardElement.querySelector('.card__img').classList.remove('card__img_active')
  }
}

  // Функция добавления элемента карточки в верстку (рендер карточки)
export const renderCard = (cardList, cardElement) => {
  cardList.append(cardElement)
}
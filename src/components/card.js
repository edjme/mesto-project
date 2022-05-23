import {
  cardTemplate,
  imagePopup,
  cardImage,
  nameInProfile
} from './constants'

import {
  openPopup
} from './modal'

import {
  addForm,
  requestingLikes,
  deletingCard
} from './index'

// создание карточки
export const createCard = (cardItem) => {
  const cardElement = cardTemplate.cloneNode(true)
  const imageElement = cardElement.querySelector('.card__photo')
  const bin = cardElement.querySelector('.card__button-delete')

  cardElement.querySelector('.card__title').textContent = cardItem.name
  imageElement.src = cardItem.link
  imageElement.alt = cardItem.name
  imageElement.id = cardItem._id

  // Перенос количества лайков с сервера в карточку РАБОТАЕТ 7
  cardElement.querySelector('.card__volume-likes').textContent = cardItem.likes.length

  imageElement.addEventListener('click', function (event) {
    cardImage.src = event.target.src;
    cardImage.alt = event.target.alt;
    imagePopup.querySelector('.card__subtitle').textContent = event.target.closest('.card').querySelector('.card__title').textContent;
    openPopup(imagePopup);
  });

  cardElement.querySelector('.card__img').addEventListener('click', event => {
    requestingLikes(event, cardItem, cardElement)
  })

  // Убирает корзину с карточки, если создавал не пользователь РАБОТАЕТ 8.1
  if ((cardItem.owner._id) != (nameInProfile.id)) {
    bin.classList.toggle('card__button-delete_disabled')
  }

  // Удаление карточки на сервере и в вёрстке РАБОТАЕТ 8.2 МОМЕНТАЛЬНО
  bin.addEventListener('click', (event) => {
    deletingCard(event, cardItem)
  })

  renderLikes(cardItem, cardElement)

  return cardElement

}

// Отрисовка лайков с сервера общая
const renderLikes = (cardItem, cardElement) => {
  if (cardItem.likes.some((e) => e._id === nameInProfile.id)) {
    cardElement.querySelector('.card__img').classList.add('card__img_active')
  }
}

// Функция добавления элемента карточки в верстку (рендер карточки)
export const renderCard = (cardList, cardElement) => {
  cardList.append(cardElement)
}

// Постановка лайка
export const puttingLike = (cardElement, dataFromServer) => {
  cardElement.querySelector('.card__img').classList.add('card__img_active')
  cardElement.querySelector('.card__volume-likes').textContent = dataFromServer.likes.length
}

// Удаление лайка
export const deletingLike = (cardElement, dataFromServer) => {
  cardElement.querySelector('.card__img').classList.remove('card__img_active')
  cardElement.querySelector('.card__volume-likes').textContent = dataFromServer.likes.length
}
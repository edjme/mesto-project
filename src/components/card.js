import {
  cardTemplate, imagePopup, cardImage,
  nameInProfile, cardDeletePopup, cardList,
  cardDeleteButton} from './constants'

import {openPopup} from './modal'  

import { toggleButtonState } from './validate'

import {addForm} from './index'

import {removeCard, putLikesCard} from './api'

// создание карточки
export const createCard = (cardItem) => {
  const cardElement = cardTemplate.cloneNode(true)

  cardElement.querySelector('.card__title').textContent = cardItem.name

  const imageElement = cardElement.querySelector('.card__photo')

  const bin = cardElement.querySelector('.card__button-delete')

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

  // cardElement.querySelector('.card__img').addEventListener('click', handleCardLikeClick)

  // Постановка лайка на сервере
  cardElement.querySelector('.card__img').addEventListener('click', (event) => {
    putLikesCard(cardItem._id)
    .then(dataFromServer => {
            // console.log(cardItem.likes)


  })
})



// Отрисовка лайков с сервера РАБОТАЕТ
if ((cardItem.likes.some((e) => e.id === nameInProfile._id))) {
  cardElement.querySelector('.card__img').classList.toggle('card__img_active')
}



// Проверка на наличие id в массиве и удаление лайка
if ((cardItem.likes.some(e => e._id === nameInProfile.id))) {
  console.log(nameInProfile.id)
}
// console.log(nameInProfile.id)


// console.log(cardItem)

  // Убирает корзину с карточки, если создавал не пользователь РАБОТАЕТ 8.1
  if ((cardItem.owner._id) != (nameInProfile.id)) {
    bin.classList.toggle('card__button-delete_disabled')
  }

  // bin.addEventListener('click', handleCardRemoveClick)

  // Удаление карточки на сервере и в вёрстке РАБОТАЕТ 8.2 МОМЕНТАЛЬНО
  bin.addEventListener('click', (event) => {
    removeCard(cardItem._id)
      .then(dataFromServer => {
        event.target.closest('.card').remove()
      })
  })

  return cardElement
}

  // Функция добавления элемента карточки в верстку (рендер карточки)
export const renderCard = (cardList, cardElement) => {
  cardList.append(cardElement)
}

  // Лайки
// const handleCardLikeClick = (event) => {
//   event.target.classList.toggle('card__img_active')
// }

// // Переключение состояния лайка
// function handleCardLikeClick (event) {
//   event.target.classList.toggle('card__img_active')
// }

// const handleCardRemoveClick = (event) => {
//   // removeCard(cardId._id)
//   // .then(dataFromServer => {
//   //   event.target.closest('.card').remove()
//   // })
//   // console.log(cardId)
//   event.target.closest('.card').remove()
// } 
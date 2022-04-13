import {
  cardTemplate, cardList, 
  cardPopup, addForm, imagePopup} from './constants'

import {openPopup, closePopup} from './modal'  

// РАБОТА С КАРТОЧКАМИ
const initialCards = [
    {
      title: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      title: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      title: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      title: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      title: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      title: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 
  
// создание карточки
const createCard = (title, link) => {
  const cardElement = cardTemplate.cloneNode(true)

  cardElement.querySelector('.card__title').textContent = title

  const imageElement = cardElement.querySelector('.card__photo')

  imageElement.src = link
  imageElement.alt = title

  imageElement.addEventListener('click', function(event) {
      imagePopup.querySelector('.card__image').src = event.target.src;
      imagePopup.querySelector('.card__image').alt = event.target.alt;
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
  
  initialCards.forEach(card => renderCard(cardList, createCard(card.title, card.link)))
  
  addForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const name = addForm.querySelector('.input__name').value
    const link = addForm.querySelector('.input__link').value
    renderCard(cardList, createCard(name, link))
    closePopup(cardPopup)
    addForm.querySelector('.input__name').value = "";
    addForm.querySelector('.input__link').value = "";
  })
const profilePopup = document.querySelector('.popup_type_profile')
// const cardPopup = document.querySelector('.popup_type_card')
const imagePopup = document.querySelector('.popup_type_image')

const popupElement = document.querySelector('.popup')
const openPopupButton = document.querySelector('.profile__edit-button')
const openPopupImage = document.querySelector('.card__photo')

let nameInPopup = document.querySelector('.input__text_type_username')
let jobInPopup = document.querySelector('.input__text_type_job')
let nameInProfile = document.querySelector('.profile__name')
let jobInProfile = document.querySelector('.profile__job')
const form = profilePopup.querySelector('.popup__form')

// переменные связанные с созданием карточки
const cardTemplate = document.querySelector('#card-template').content.querySelector('.card')
const cardList = document.querySelector('.cards')



// const profileNameElement = document.querySelector('.profile__name') // Имя пользователя в профиле
// const profileAboutElement = document.querySelector('.profile__about') // Подпись пользователя в профиле
const addButton = document.querySelector('.profile__add-button') // Кнопка добавления карточки
const cardPopup = document.querySelector('.popup_type_card') // Попап добавления карточки
const addForm = cardPopup.querySelector('.popup__form') // Форма добавления карточки. Нашли через попап
const addNameInput = addForm.querySelector('.input__name-name') // Поле формы с названием. Нашли через форму
const addLiinkInput = addForm.querySelector('.input__link') // Поле формы с ссылкой. Нашли через форму


// // По нажатию на кнопку...
// addButton.addEventListener('click', () => {
//   // Открываем попап
//   openPopup(profilePopup)
// })

// // При сохранении формы...
// addForm.addEventListener('submit', (event) => {
//   // Обязательно отменяем действие по умолчанию, чтобы страница не перезагружалась
//   event.preventDefault()

//   // Сохраняем данные из полей обратно в верстку
//   // profileNameElement.textContent = profileNameInput.value
//   // profileAboutElement.textContent = profileAboutInput.value

//   createCard()


//   // Закрываем попап
//   closePopup(addForm)
// })









// ф-я открытия попапа
function openPopup(popup) {
    popup.classList.add('popup_opened')
  }
// ф-я закрытия попапа
function closePopup(popup) {
 popup.classList.remove('popup_opened')
}


function formSubmitHandler(evt) {
  evt.preventDefault()
  nameInProfile.textContent = nameInPopup.value;
  jobInProfile.textContent = jobInPopup.value;
  closePopup(popupElement);
}

// подтягивает текст в попап и открывает его по нажатию кнопки
  openPopupButton.addEventListener('click', function () {
    nameInPopup.value = nameInProfile.textContent;
    jobInPopup.value = jobInProfile.textContent;
    openPopup(profilePopup)
  })


  imagePopup.addEventListener('click', function () {
    openPopup(imagePopup)
  })

// открывает попап для создания карточки
  document.querySelector('.profile__add-button').addEventListener('click', function () {
    openPopup(cardPopup)
  })

  // document.querySelector('.card').addEventListener('click', function () {
  //   openPopup(imagePopup)
  // })

  profilePopup.querySelector('.popup__close').addEventListener('click', function () {
    closePopup(profilePopup)
  })

  imagePopup.querySelector('.popup__close').addEventListener('click', function () {
    closePopup(imagePopup)
  })

  cardPopup.querySelector('.popup__close').addEventListener('click', function () {
    closePopup(cardPopup)
  })



//ф-я закрытия попапа с сохранением новых данных
form.addEventListener('submit', formSubmitHandler);


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

  cardElement.querySelector('.card__img').addEventListener('click', handleCardLikeClick)

  cardElement.querySelector('.card__button-delete').addEventListener('click', handleCardRemoveClick)

  return cardElement
}

// Функция добавления элемента карточки в верстку (рендер карточки)
const renderCard = (cardList, cardElement) => {
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
})


  
// крутая фича, которая не работает

//   popupElement.addEventListener('click', (event) => { console.log(event)
//   if (event.target.classList.contains('popup')) {
//     closePopup(popupElement)
//   }
// })
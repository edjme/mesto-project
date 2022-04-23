// подключениее CSS
import '../pages/index.css'

//api
import {getInitialCards, addCard, removeCard, editTask} from './api'

// Подключение валидации
import {enableValidation, validationConfig} from './validate.js'
enableValidation(validationConfig)

// Подключение отрисовки карточек
import {renderCard, createCard} from './card'

import {profilePopup, openPopupButton, nameInPopup, 
    jobInPopup, nameInProfile, jobInProfile, 
    cardList, inputName, inputLink, addForm, cardPopup, imagePopup} from './constants'
import {openPopup, closePopup} from './modal'

// подтягивает текст в попап и открывает его по нажатию кнопки
openPopupButton.addEventListener('click', function () {
    nameInPopup.value = nameInProfile.textContent;
    jobInPopup.value = jobInProfile.textContent;
    openPopup(profilePopup)
})

//ф-я передачи новых данных в попап редактирования профиля
function submitProfileForm(evt) {
    evt.preventDefault()
    nameInProfile.textContent = nameInPopup.value;
    jobInProfile.textContent = jobInPopup.value;
    closePopup(profilePopup);
}

// открывает попап для создания карточки
document.querySelector('.profile__add-button').addEventListener('click', function () {
    openPopup(cardPopup)
})

//закрывает попап для создания карточки
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
form.addEventListener('submit', submitProfileForm);


// РАБОТА С КАРТОЧКАМИ
// export const initialCards = [
//     {
//         title: 'Архыз',
//         link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
//     },
//     {
//         title: 'Челябинская область',
//         link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
//     },
//     {
//         title: 'Иваново',
//         link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
//     },
//     {
//         title: 'Камчатка',
//         link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
//     },
//     {
//         title: 'Холмогорский район',
//         link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
//     },
//     {
//         title: 'Байкал',
//         link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
//     },
//     {
//         title: 'Принцесса Мононоке',
//         link: 'https://i.pinimg.com/564x/61/dd/c8/61ddc8ad90c7411f7a0f421a46750fe3.jpg'
//     }
// ]; 

// initialCards.forEach(card => renderCard(cardList, createCard(card.title, card.link)))










addForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const name = inputName.value
    const link = inputLink.value
    renderCard(cardList, createCard(name, link))
    closePopup(cardPopup)
    inputName.value = "";
    inputLink.value = "";
})

getInitialCards()
    .then((initialCards) => {
        // dataFromServer(dataFromServer, renderCard, 'append')
        initialCards.forEach(card => renderCard(cardList, createCard(card.title, card.link)))
    })

    
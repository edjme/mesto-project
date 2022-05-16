// подключениее CSS
import '../pages/index.css'

//api
import {getInitialCards, getMyProfile, changeMyProfile,
    addCard} from './api'

// Подключение валидации
import {enableValidation, validationConfig} from './validate'
enableValidation(validationConfig)

// Подключение отрисовки карточек
import {renderCard, createCard} from './card'

import {profilePopup, openPopupButton, nameInPopup, 
    jobInPopup, nameInProfile, jobInProfile, 
    cardList, inputName, inputLink, addForm, 
    cardPopup, imagePopup, form,
    avatarInProfile} from './constants'

    import {openPopup, closePopup} from './modal'

// подтягивает текст в попап и открывает его по нажатию кнопки
openPopupButton.addEventListener('click', function () {
    nameInPopup.value = nameInProfile.textContent;
    jobInPopup.value = jobInProfile.textContent;
    openPopup(profilePopup)
})

//ф-я передачи новых данных с попапа редактирования профиля на сервер и его отрисовка на странице 5
function submitProfileForm(evt) {
    evt.preventDefault()

    changeMyProfile({
        name: nameInPopup.value,
        about: jobInPopup.value
    })
    .then(dataFromServer => {
        nameInProfile.textContent = nameInPopup.value;
        jobInProfile.textContent = jobInPopup.value;
    })
    .catch((err) => {
        console.log(err)
    })

    closePopup(profilePopup);
}

// открывает попап для создания карточки
document.querySelector('.profile__add-button').addEventListener('click', function () {
    openPopup(cardPopup)
})

//закрывает попап для редактирования профиля
profilePopup.querySelector('.popup__close').addEventListener('click', function () {
    closePopup(profilePopup)
})

//закрывает попап с картинкой
imagePopup.querySelector('.popup__close').addEventListener('click', function () {
    closePopup(imagePopup)
})

//закрывает попап для создания карточки
cardPopup.querySelector('.popup__close').addEventListener('click', function () {
    closePopup(cardPopup)
})

//ф-я закрытия попапа с сохранением новых данных
form.addEventListener('submit', submitProfileForm);

// Отрисовка данных пользователя с сервера РАБОТАЕТ 3
getMyProfile()
.then((getProfile) => {
    nameInProfile.textContent = getProfile.name;
    jobInProfile.textContent = getProfile.about;
    avatarInProfile.src = getProfile.avatar;
    nameInProfile.id = getProfile._id;
})
.catch((err) => {
    console.log(err)
})

// Отрисовка карточек с сервера РАБОТАЕТ 4
getInitialCards()
.then((dataFromServerCards) => {
    dataFromServerCards.forEach(cardItem => {
        renderCard(cardList, createCard(cardItem))
    })
.catch((err) => {
    console.log(err)
})
})

// Ф-ия передачи данных с popup card (в вёрстку) и на сервер РАБОТАЕТ 6
function submitCardForm (evt) {
    evt.preventDefault()

    addCard({
        name: inputName.value,
        link: inputLink.value
    })
    .then(dataFromServer => {
        console.log(cardList)
        cardList.prepend(createCard(dataFromServer))
        closePopup(cardPopup)
        inputName.value = "";
        inputLink.value = "";
    })
    .catch((err) => {
        console.log(err)
    })
}

// Передача данных с popup card в вёрстку и на сервер РАБОТАЕТ 6
addForm.addEventListener('submit', submitCardForm)
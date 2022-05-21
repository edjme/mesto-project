// подключениее CSS
import '../pages/index.css'

//api
import {getInitialCards, getMyProfile, changeMyProfile,
    addCard, editAvatar} from './api'

// Подключение валидации
import {enableValidation, validationConfig, toggleButtonState} from './validate'

enableValidation(validationConfig)

// Подключение отрисовки карточек
import {renderCard, createCard} from './card'

import {profilePopup, openPopupButton, nameInPopup, 
    jobInPopup, nameInProfile, jobInProfile, 
    cardList, inputName, inputLink, addForm, 
    cardPopup, imagePopup, form,
    avatarInProfile, avatarPopup, inputAvatarLink,
    editAvatarInProfile, buttonCardPopup, buttonProfilePopup, 
    buttonAvatarPopup} from './constants'

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
console.log(evt)
    const forms = document.querySelector(validationConfig.formSelector);
    const submitButton = forms.querySelector(validationConfig.submitButtonSelector);
    
    loadingOn(buttonProfilePopup)
    changeMyProfile({
        name: nameInPopup.value,
        about: jobInPopup.value
    })
    .then(dataFromServer => {
        nameInProfile.textContent = nameInPopup.value;
        jobInProfile.textContent = jobInPopup.value;
        closePopup(profilePopup);
    })
    .catch((err) => {
        console.log(err)
    })
    .finally(() => {
        
        loadingOff(buttonProfilePopup)
        toggleButtonState(submitButton, false, validationConfig)
    })
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

//закрывает попап для изменения аватара
avatarPopup.querySelector('.popup__close').addEventListener('click', function () {
    closePopup(avatarPopup)
})

//ф-я закрытия попапа с сохранением новых данных
form.addEventListener('submit', submitProfileForm);

Promise.all([
    getMyProfile(),
    getInitialCards()
])
.then(([getProfile, cardItem]) => {
    // Отрисовка данных пользователя с сервера РАБОТАЕТ 3
    nameInProfile.textContent = getProfile.name;
    jobInProfile.textContent = getProfile.about;
    avatarInProfile.src = getProfile.avatar;
    nameInProfile.id = getProfile._id;

    // Отрисовка карточек с сервера РАБОТАЕТ 4
    cardItem.forEach(cardItem => {
        renderCard(cardList, createCard(cardItem))
    })
})
.catch(err => {
    console.log(err);
})

// Ф-ия передачи данных с popup card (в вёрстку) и на сервер РАБОТАЕТ 6
function submitCardForm (evt) {
    evt.preventDefault()
    loadingOn(buttonCardPopup)
    addCard({
        name: inputName.value,
        link: inputLink.value
    })
    .then(dataFromServer => {
        cardList.prepend(createCard(dataFromServer))
        closePopup(cardPopup)
        addForm.reset();
    })
    .catch((err) => {
        console.log(err)
    })
    .finally(() => {
        loadingOff(buttonCardPopup)
    })
}

// Передача данных с popup card в вёрстку и на сервер РАБОТАЕТ 6
addForm.addEventListener('submit', submitCardForm)


// Открывает попап изменения аватара
avatarInProfile.addEventListener('click', function () {
    openPopup(avatarPopup)
})


function submitAvatarForm (evt) {
    evt.preventDefault()

    const forms = document.querySelector(validationConfig.formSelector);
    const submitButton = forms.querySelector(validationConfig.submitButtonSelector);

    loadingOn(buttonAvatarPopup)
    editAvatar({
        avatar: inputAvatarLink.value
    })
    .then(dataFromServer => {
        avatarInProfile.src = dataFromServer.avatar
        closePopup(avatarPopup)
        inputAvatarLink.value = ""
    })
    .catch((err) => {
        console.log(err)
    })
    .finally(() => {
        loadingOff(buttonAvatarPopup)
        toggleButtonState(submitButton, false, validationConfig)
    })
}

// Обновление аватара
editAvatarInProfile.addEventListener('submit', submitAvatarForm)

// UX
export const loadingOn = (button) => {
    button.textContent = button.textContent + "..."
}

export const loadingOff = (button) => {
    button.textContent = button.textContent.replace("...", "")
}
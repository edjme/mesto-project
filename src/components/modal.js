import {
    nameInPopup, 
    jobInPopup, nameInProfile, jobInProfile, 
    form, profilePopup, imagePopup, 
    cardPopup} from './constants.js'

// ф-я открытия попапа
export function openPopup(popup) {
    popup.classList.add('popup_opened')
}

// ф-я закрытия попапа
export function closePopup(popup) {
    popup.classList.remove('popup_opened')
}

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

//ф-ия закрытия попапа с клавиатуры
function closeByEsc(evt) {
    if (evt.key === "Escape") {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup); 
    }
} 
//вызываю ф-ию закрытия попапа с клавиатуры
document.addEventListener('keydown',  closeByEsc)


//ф-ия закрытия попапа с мыши
function closeByMs(evt) {
    if (evt.target.classList.contains('popup_opened')) {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(evt.target); 
    }
} 
//вызываю ф-ию закрытия попапа с мыши
document.addEventListener('mouseup',  closeByMs)
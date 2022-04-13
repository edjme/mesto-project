import {
    popupElement, openPopupButton, nameInPopup, 
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
form.addEventListener('submit', formSubmitHandler);

//ф-ия закрытия попапа с клавиатуры
document.addEventListener('keydown', (event) => {
    if (event.key === "Escape") { 
        const popupOpened = document.querySelector('.popup_opened')

        closePopup(popupOpened)
        }
});

//ф-ия закрытия попапа с мыши
document.addEventListener('click', (event) => { 
    if (event.target.classList.contains('popup_opened')) {
    closePopup(event.target)
    }
})

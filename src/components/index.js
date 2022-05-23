// подключениее CSS
import '../pages/index.css'

//api
import {
  getInitialCards,
  getMyProfile,
  changeMyProfile,
  addCard,
  editAvatar,
  putLikesCard,
  deleteLikesCard,
  removeCard
} from './api'

// Подключение валидации
import {
  enableValidation,
  toggleButtonState
} from './validate'

// Подключение отрисовки карточек
import {
  renderCard,
  createCard,
  puttingLike,
  deletingLike
} from './card'

import {
  profilePopup,
  openPopupButton,
  nameInPopup,
  jobInPopup,
  nameInProfile,
  jobInProfile,
  cardList,
  inputName,
  inputLink,
  addForm,
  cardPopup,
  imagePopup,
  form,
  avatarInProfile,
  avatarPopup,
  inputAvatarLink,
  editAvatarInProfile,
  buttonCardPopup,
  buttonProfilePopup,
  buttonAvatarPopup,
  validationConfig
} from './constants'

import {
  openPopup,
  closePopup
} from './modal'

enableValidation(validationConfig)

// подтягивает текст в попап и открывает его по нажатию кнопки
openPopupButton.addEventListener('click', function () {
  nameInPopup.value = nameInProfile.textContent;
  jobInPopup.value = jobInProfile.textContent;
  openPopup(profilePopup)
})

//ф-я передачи новых данных с попапа редактирования профиля на сервер и его отрисовка на странице 5
function submitProfileForm(evt) {
  evt.preventDefault()

  const forms = document.querySelector('.popup_opened');
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

// const subData = (getMyProfile, getInitialCards) => {
//   Promise.all([
//       getMyProfile(),
//       getInitialCards()
//     ])
//     .then(([getProfile, cardItem]) => {
//       // Отрисовка данных пользователя с сервера РАБОТАЕТ 3
//       nameInProfile.textContent = getProfile.name;
//       jobInProfile.textContent = getProfile.about;
//       avatarInProfile.src = getProfile.avatar;
//       nameInProfile.id = getProfile._id;

//       // Отрисовка карточек с сервера РАБОТАЕТ 4
//       cardItem.forEach(cardItem => {
//         renderCard(cardList, createCard(cardItem))
//       })
//     })
//     .catch(err => {
//       console.log(err);
//     })
// }

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
function submitCardForm(evt) {

  const forms = document.querySelector('.popup_opened');
  const submitButton = forms.querySelector(validationConfig.submitButtonSelector);

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
      toggleButtonState(submitButton, false, validationConfig)
    })
}

// Передача данных с popup card в вёрстку и на сервер РАБОТАЕТ 6
addForm.addEventListener('submit', submitCardForm)


// Открывает попап изменения аватара
avatarInProfile.addEventListener('click', function () {
  openPopup(avatarPopup)
})

function submitAvatarForm(evt) {

  const forms = document.querySelector('.popup_opened');
  const submitButton = forms.querySelector(validationConfig.submitButtonSelector);

  evt.preventDefault()
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

// Работа с лайками с сервера
export const requestingLikes = (event, cardItem, cardElement) => {
  if (event.target.classList.contains('card__img_active')) {
    deleteLikesCard(cardItem._id)
      .then(dataFromServer => {
        deletingLike(cardElement, dataFromServer)
      })
      .catch((err) => {
        console.log(err)
      })
  } else {
    putLikesCard(cardItem._id)
      .then(dataFromServer => {
        puttingLike(cardElement, dataFromServer)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

// Работа с удалением карточки с сервера
export const deletingCard = (event, cardItem) => {
  removeCard(cardItem._id)
    .then(dataFromServer => {
      event.target.closest('.card').remove()
    })
    .catch((err) => {
      console.log(err)
    })
}

// Отправка запросов на сервер и обработка ответов
// const request = (subData, requestingLikes, deletingCard, cardItem, cardElement, event) => {
//     subData(getMyProfile, getInitialCards)
//     requestingLikes(event, cardItem, cardElement)
//     deletingCard(event, cardItem)
// }

// request(subData, requestingLikes, deletingCard, event)

// const request = (subData, event, cardItem, cardElement) => {
//   const requestingLikes = (event, cardItem, cardElement) => {
//     if (event.target.classList.contains('card__img_active')) {
//       deleteLikesCard(cardItem._id)
//         .then(dataFromServer => {
//           deletingLike(cardElement, dataFromServer)
//         })
//         .catch((err) => {
//           console.log(err)
//         })
//     } else {
//       putLikesCard(cardItem._id)
//         .then(dataFromServer => {
//           puttingLike(cardElement, dataFromServer)
//         })
//         .catch((err) => {
//           console.log(err)
//         })
//     }
//   }

//   const deletingCard = (event, cardItem) => {
//     removeCard(cardItem._id)
//       .then(dataFromServer => {
//         event.target.closest('.card').remove()
//       })
//       .catch((err) => {
//         console.log(err)
//       })
//   }
// }
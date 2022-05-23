// ф-я открытия попапа
export function openPopup(popup) {
  popup.classList.add('popup_opened')
  //вызываю ф-ию закрытия попапа с клавиатуры
  document.addEventListener('keydown', closeByEsc)
  //вызываю ф-ию закрытия попапа с мыши
  document.addEventListener('mouseup', closeByMs)
}

// ф-я закрытия попапа
export function closePopup(popup) {
  popup.classList.remove('popup_opened')
  //удаляю ф-ию закрытия попапа с клавиатуры
  document.removeEventListener('keydown', closeByEsc)
  //удаляю ф-ию закрытия попапа с мыши
  document.removeEventListener('mouseup', closeByMs)
}

//ф-ия закрытия попапа с клавиатуры
function closeByEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

//ф-ия закрытия попапа с мыши
function closeByMs(evt) {
  if (evt.target.classList.contains('popup_opened')) {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(evt.target);
  }
}
const config = {
  url: 'https://pm2.webplus.hloud.tw1.ru',
  headers: {
    authorization: '42de998b-e70a-417c-91c6-8efdcf613573',
    'Content-type': 'application/json'
  }
}

const onResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
}

//Даёт данные профиля с сервера
export const getMyProfile = () => {
  return fetch(`${config.url}/users/me`, {
      headers: config.headers
    })
    .then(onResponse)
}

//Данные карточек с сервера
export const getInitialCards = () => {
  return fetch(`${config.url}/cards`, {
      headers: config.headers
    })
    .then(onResponse)
}

//Заменяет данные профиля на сервере
export const changeMyProfile = (data) => {
  return fetch(`${config.url}/users/me`, {
      method: 'PATCH',
      headers: config.headers,
      body: JSON.stringify(data)
    })
    .then(onResponse)
}

//Добавляет новую карточку на сервер
export const addCard = (data) => {
  return fetch(`${config.url}/cards`, {
      method: 'POST',
      headers: config.headers,
      body: JSON.stringify(data)
    })
    .then(onResponse)
}

//Постановка лайка
export const putLikesCard = (dataId) => {
  return fetch(`${config.url}/cards/likes/${dataId}`, {
      method: 'PUT',
      headers: config.headers,
    })
    .then(onResponse)
}

//Удаление лайка
export const deleteLikesCard = (dataId) => {
  return fetch(`${config.url}/cards/likes/${dataId}`, {
      method: 'DELETE',
      headers: config.headers,
    })
    .then(onResponse)
}


//Удаляет карточку на сервере РАБОТАЕТ
export const removeCard = (cardId) => {
  return fetch(`${config.url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: config.headers
    })
    .then(onResponse)
}

//Обновление аватара
export const editAvatar = (data) => {
  return fetch(`${config.url}/users/me/avatar`, {
      method: 'PATCH',
      headers: config.headers,
      body: JSON.stringify(data)
    })
    .then(onResponse)
}

const config = {
    url: 'https://nomoreparties.co/v1/plus-cohort-8',
    headers: {
        authorization: '42de998b-e70a-417c-91c6-8efdcf613573',
        'Content-type': 'application/json'
    }
}

const onResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(res)
}

export const getInitialCards = () => {
    return fetch(`${config.url}/cards`, {
        headers: config.headers
    })
        .then(onResponse)
//         .catch(err => {
//             console.log(err)
//             return Promise.reject(err)
// })
}

// export const profile = () => {
//     return fetch(`${config.url}/users/me`, {
//         headers: config.headers
//     })
//         .then(onResponse)
// }

// function getInitialCards() {
//     return fetch('https://nomoreparties.co/v1/plus-cohort-8/cards', {
//         headers: {
//             authorization: '42de998b-e70a-417c-91c6-8efdcf613573'
//                 }
//     })
//     .then(res => res.json())
//     .then((result) => {
//     console.log(result);
//     });
// }



// export function addCard(data) {
//     return fetch(config.url, {
//         method: 'POST',
//         headers: config.headers,
//         body: JSON.stringify(data)
//     })
//         .then(onResponse)
// }

// export function removeCard(dataId) {
//     return fetch(`${config.url}/dataId`, {
//         method: 'DELETE',
//     })
//         .then(onResponse)
// }

// export function editTask(daraId) {
//     return fetch(`${config.url}/${dataId}`, {
//         method: 'PUT',
//         headers: config.headers,
//         body: JSON.stringify(data)
//     })
//         .then(onResponse)
// }
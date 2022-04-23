const config = {
    url: 'https://nomoreparties.co/v1/plus-cohort-8',
    headers: {
        authorization: '42de998b-e70a-417c-91c6-8efdcf613573',
        "Content-type": "application/json"
    },
}

const onResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(res)
}

export function getInitialCards() {
    return fetch(`${config.url}/${cards}`)
        .then(onResponse)
}

export function addCard(data) {
    return fetch(config.url, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify(data)
    })
        .then(onResponse)
}

export function removeCard(dataId) {
    return fetch(`${config.url}/${dataId}`, {
        method: 'DELETE',
    })
        .then(onResponse)
}

// export function editTask(daraId) {
//     return fetch(`${config.url}/${dataId}`, {
//         method: 'PUT',
//         headers: config.headers,
//         body: JSON.stringify(data)
//     })
//         .then(onResponse)
// }
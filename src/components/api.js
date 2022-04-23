const config = {
    url: 'https://nomoreparties.co/v1/plus-cohort-8',
    headers: {
        authorization: '38053800-14c5-4c22-ac44-33381f46c6f6',
        "Content-type": "application/json"
    },
}

const onResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(res)
}

export function getInitialCards() {
    return fetch(config.url)
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
const config = {
    url: "https://nomoreparties.co/v1/plus-cohort-8",
    headers: {
        "Content-type": "application/json",
        authorization: '997c9532-3a56-4a0c-8fd0-93697b0a5910'
    },
}

const onResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(res)
}

export function getAllTasks() {
    return fetch(config.url)
        .then(onResponse)
}

export function addTasks() {
    return fetch(config.url, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify(data)
    })
        .then(onResponse)
        // .then((data) => {
        //     console.log(data)
        // })
        // // .catch(err => {
        // //     console.log(err)
        // //     return Promise.reject(err)
        // // })
}

export function removeAllTasks(dataId) {
    return fetch(`${config.url}/${dataId}`, {
        method: 'DELETE',
        headers: config.headers,
        body: JSON.stringify(data)
    })
        .then(onResponse)
}

export function editTask(daraId) {
    return fetch(`${config.url}/${dataId}`, {
        method: 'PUT',
        headers: config.headers,
        body: JSON.stringify(data)
    })
        .then(onResponse)
}
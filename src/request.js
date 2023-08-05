export const getRandomData = callback => {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(res => res.json())
        .then(json => callback(json))
}



export const getCategories = callback => {
    fetch('https://api.chucknorris.io/jokes/categories')
        .then(res => res.json())
        .then(json => callback(json))
}
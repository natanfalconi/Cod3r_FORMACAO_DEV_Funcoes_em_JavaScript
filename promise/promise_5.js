// fetch
const url = 'https://api.github.com/users/natanfalconi'

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
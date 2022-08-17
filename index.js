fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature')
    .then(res => res.json())
    .then(data =>  {
        document.body.style.backgroundImage = `url(${data.urls.full})`
        document.getElementById('author').innerHTML = `<h1>${data.user.name}</h1>`
    })
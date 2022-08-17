fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature')
    .then(res => res.json())
    .then(data =>  {
        document.body.style.backgroundImage = `url(${data.urls.full})`
		document.getElementById("author").textContent = `By: ${data.user.name}`
    })
    .catch(err => {
        document.body.style.backgroundImage = `url('./images/default.jpg')`  
    })

fetch('https://api.coingecko.com/api/v3/coins/bitcoin')
    .then(res => res.json())
    .then(data => {
        document.getElementById("crypto-top").innerHTML = `
        <img src=${data.image.small} />
        <span>${data.name}</span>
        `
    })
    .catch(err => console.log(err))
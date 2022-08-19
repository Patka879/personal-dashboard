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
        document.getElementById("crypto").innerHTML += `
            <p>🎯: $${data.market_data.current_price.usd}</p>
            <p>👆: $${data.market_data.high_24h.usd}</p>
            <p>👇: $${data.market_data.low_24h.usd}</p>
        `
    })
    .catch(err => console.log(err))

    function getCurrentTime() {
        const date = new Date()
        const currentTime = date.toLocaleTimeString("en-US", {timeStyle: "medium"})
        document.querySelector('h1').textContent = `${currentTime}`      
    }

    setInterval(getCurrentTime, 1000)

    navigator.geolocation.watchPosition((position) => {
        const lat = position.coords.latitude
        const lon = position.coords.longitude
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=46766f99bc0f25c7a4de58678a0d69c3`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                document.getElementById('weather').innerHTML = `
                <img src='http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png' alt='weather' />
                <p class='weather-temp'>${Math.round(data.main.temp)}°C</p>
                <p class='weather-city'>${data.name}</p>
                `
            })
            .catch(err => console.log(err))
    
      });
    

 
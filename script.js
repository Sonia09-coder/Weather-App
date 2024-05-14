const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');


search.addEventListener('click',() => {
    const APIKey = ' 4f22607ae5f09bb00084c491bf720400';
    const city = document.querySelector('.search-box input').value;

    if(city == ''){
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?id=${city}&units=metric&appid=${APIKey}`).then(response => response.json()).then(json => {

        const image = document.querySelector('.weather-box img');
        const temprature = document.querySelector('.weather-box temprature');
        const description = document.querySelector('.weather-box description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');

        switch (json.weather[0].main) {
            case 'Clear':
                image.src = 'image/clear.png';
                break;
            case 'Rain':
                image.src = 'image/Raining.png';
                break;
            case 'Snow':
                image.src = 'image/Raining.png';
                break;
            case 'Clouds':
                image.src = 'image/Sun cloud.png';
                break;
            case 'Mist':
                image.src = 'image/mist cloud.png';
                break;
            case 'Haze':
                image.src = 'image/mist cloud.png';
                break;
        
            default:
                image.scr = 'image/Sun cloud.png';
        }
    })
})
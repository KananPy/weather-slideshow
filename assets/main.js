const town = document.querySelector('.city')
const temp = document.querySelector('#temp')

let cities = ['Baku', 'London', 'Tabriz', 'Ankara', 'Kiev' ]

const API_KEY = "ce8adb725959853af1d79d03da42a6aa"

let city_index = 0

async function getCity(url){
    try{
        const response = await fetch(url)
        const data = await response.json()
        console.log(data);
        cityInfo(data)

    } catch(err){
        console.log('err', err);
    }
}

function weatherApi(cityName){
    return `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${API_KEY}&units=metric`
}

function cityInfo(city){
    var city_name = cities[city_index]
    city_index = city_index + 1
    town.innerHTML = `${city_name}`
    temp.innerHTML = `${city.main.temp}&#176; C`

    console.log(city);
}

function slideShow(){
    setInterval(() => {
        if( city_index < cities.length){
            const city_data = weatherApi(cities[city_index])
            getCity(city_data)
        } else if( city_index === cities.length){
            city_index = 0
        }

    },2000 )
}

slideShow()
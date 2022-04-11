// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {

    const URL = `http://api.openweathermap.org/data/2.5/forecast?q=Kyiv,ukr&cnt=8&units=metric&appid=...`

    $(function(){
        $.ajax({
            url: URL
        }).done(function(e){
            console.log(e)
            $('.city-country').text(`${e.city.name}, ${e.city.country}`)
            $('.image-img').prop('src', `images/${e.list[0].weather[0].icon}.png`)
            $('.image-span').text(`${e.list[0].weather[0].description}`)
            $('.temperature').html(`<span>${Math.round(e.list[0].main.temp)}°C</span>`)
            $('.date-time').text(`${e.list[0].dt_txt.slice(-8)}`)
            $(`.date-date`).text(`${e.list[0].dt_txt.slice(0, 10)}`)
            $('.stats').html(`<ul>
                <li>Wind: ${e.list[0].wind.speed} kmph</li>
                <li>Precip: ${e.list[0].pop} mm</li>
                <li>Pressure: ${e.list[0].main.pressure} mb</li>
            </ul>`)
            $('.list-group-item').each(function(index){
                index += 1
                $('.date-time', this).text(`${e.list[index].dt_txt.slice(-8)}`)
                $('.image-img', this).prop('src', `images/${e.list[index].weather[0].icon}.png`)
                $('.temperature', this).html(`<span>${Math.round(e.list[index].main.temp)}°C</span>`)
            })
        })
    })
})

let main = 'https://api.aladhan.com/v1/calendarByAddress/2024/4?address=karachi'
let form = document.querySelector('#form')
let input = document.querySelector('#searchInput')
let printer = document.querySelector('#para')
let userDate = document.querySelector('#dateSelector')
let timePrinter = document.querySelector('#prayerTimes')

// let city = prompt('Enter city name to see prayer times!')


// let concat = main + city
// console.log(concat);

// function api(){
//     fetch(concat)
//     .then( res => res.json())
//     .then(data => console.log(data.data[21].timings))
//     // namaz timings => data.data[10].timings
// }
// api(); 



form.addEventListener('submit',(event) => {

    event.preventDefault();

    //////////-------------for city name -----------------
    let main = 'https://api.aladhan.com/v1/calendarByAddress/2024/4?address='
    let userCity = input.value;
    
    main = main + userCity;
    // console.log(main);

    const getFacts = async () => {

        let response = await fetch(main);
        // console.log(response); //JSON format 
    
        let data = await response.json();
        // ---------------- for date -------------
        let date = userDate.value - 1;
        // console.log(data.data[date].timings);

        timePrinter.innerHTML = `Fajir: ${data.data[date].timings.Fajr} <br>
        Sunrise: ${data.data[date].timings.Sunrise} <br>
        Zuhur: ${data.data[date].timings.Dhuhr} <br>
        Asar: ${data.data[date].timings.Asr} <br>
        Sunset: ${data.data[date].timings.Sunset} <br>
        Maghrib: ${data.data[date].timings.Maghrib} <br>
        Isha: ${data.data[date].timings.Isha} <br>
        Midnight: ${data.data[date].timings.Midnight}`;   
    }
    getFacts()
})
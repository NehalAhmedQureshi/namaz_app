// let main = 'https://api.aladhan.com/v1/calendarByAddress/2024/4?address=karachi'
let form = document.querySelector('#form')
let input = document.querySelector('#searchInput')
let printer = document.querySelector('#para')
let userDate = document.querySelector('#dateSelector')
let timePrinter = document.querySelector('#prayerTimes')
let dateTyper = document.querySelector('#dateTyper')
let para1 = document.querySelector(".para1")
let head1 = document.querySelector(".head1")
let para2 = document.querySelector(".para2")
let head2 = document.querySelector(".head2")
let para3 = document.querySelector(".para3")
let head3 = document.querySelector(".head3")
let para4 = document.querySelector(".para4")
let head4 = document.querySelector(".head4")
let para5 = document.querySelector(".para5")
let head5 = document.querySelector(".head5")
let para6 = document.querySelector(".para6")
let head6 = document.querySelector(".head6")

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

let currentDate = new Date()
let onlyDate = currentDate.getDate();
let completeDate = (currentDate.toDateString());

form.addEventListener('submit', (event) => {

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
        console.log(data);

        // --------------------- for date -----------------------------

        let date = onlyDate - 1;
        dateTyper.innerHTML = `${input.value} ,  ${completeDate}`
        timePrinter.innerHTML = `
        <br>
        Fajir: ${data.data[date].timings.Fajr} <br>
        Sunrise: ${data.data[date].timings.Sunrise} <br>
        Zuhur: ${data.data[date].timings.Dhuhr} <br>
        Asar: ${data.data[date].timings.Asr} <br>
        Sunset: ${data.data[date].timings.Sunset} <br>
        Maghrib: ${data.data[date].timings.Maghrib} <br>
        Isha: ${data.data[date].timings.Isha} <br>
        Midnight: ${data.data[date].timings.Midnight}`;

        // -------------------------------- day 1 -----------------------------
        let week1 = date + 1
        
        head1.innerHTML = `${input.value}, ${data.data[week1].date.gregorian.weekday.en} ${data.data[week1].date.readable}`
        para1.innerHTML = `
        <br>
        Fajir: ${data.data[week1].timings.Fajr} <br>
        Sunrise: ${data.data[week1].timings.Sunrise} <br>
        Zuhur: ${data.data[week1].timings.Dhuhr} <br>
        Asar: ${data.data[week1].timings.Asr} <br>
        Sunset: ${data.data[week1].timings.Sunset} <br>
        Maghrib: ${data.data[week1].timings.Maghrib} <br>
        Isha: ${data.data[week1].timings.Isha} <br>
        Midnight: ${data.data[week1].timings.Midnight}`;
        // -------------------------------- day 2 -----------------------------


        let week2 = week1 + 1
        
        head2.innerHTML = `${input.value}, ${data.data[week2].date.gregorian.weekday.en} ${data.data[week2].date.readable}`
        para2.innerHTML = `
        <br>
        Fajir: ${data.data[week1].timings.Fajr} <br>
        Sunrise: ${data.data[week1].timings.Sunrise} <br>
        Zuhur: ${data.data[week1].timings.Dhuhr} <br>
        Asar: ${data.data[week1].timings.Asr} <br>
        Sunset: ${data.data[week1].timings.Sunset} <br>
        Maghrib: ${data.data[week1].timings.Maghrib} <br>
        Isha: ${data.data[week1].timings.Isha} <br>
        Midnight: ${data.data[week1].timings.Midnight}`;

        // -------------------------------- day 3 -----------------------------
        let week3 = week2 + 1
        
        head3.innerHTML = `${input.value}, ${data.data[week3].date.gregorian.weekday.en} ${data.data[week3].date.readable}`
        para3.innerHTML = `
        <br>
        Fajir: ${data.data[week1].timings.Fajr} <br>
        Sunrise: ${data.data[week1].timings.Sunrise} <br>
        Zuhur: ${data.data[week1].timings.Dhuhr} <br>
        Asar: ${data.data[week1].timings.Asr} <br>
        Sunset: ${data.data[week1].timings.Sunset} <br>
        Maghrib: ${data.data[week1].timings.Maghrib} <br>
        Isha: ${data.data[week1].timings.Isha} <br>
        Midnight: ${data.data[week1].timings.Midnight}`;

        // -------------------------------- day 4 -----------------------------
        let week4 = week3 + 1
        
        head4.innerHTML = `${input.value}, ${data.data[week4].date.gregorian.weekday.en} ${data.data[week4].date.readable}`
        para4.innerHTML = `
        <br>
        Fajir: ${data.data[week1].timings.Fajr} <br>
        Sunrise: ${data.data[week1].timings.Sunrise} <br>
        Zuhur: ${data.data[week1].timings.Dhuhr} <br>
        Asar: ${data.data[week1].timings.Asr} <br>
        Sunset: ${data.data[week1].timings.Sunset} <br>
        Maghrib: ${data.data[week1].timings.Maghrib} <br>
        Isha: ${data.data[week1].timings.Isha} <br>
        Midnight: ${data.data[week1].timings.Midnight}`;
        // -------------------------------- day 5 -----------------------------
        let week5 = week4 + 1
        
        head5.innerHTML = `${input.value}, ${data.data[week5].date.gregorian.weekday.en} ${data.data[week5].date.readable}`
        para5.innerHTML = `
        <br>
        Fajir: ${data.data[week1].timings.Fajr} <br>
        Sunrise: ${data.data[week1].timings.Sunrise} <br>
        Zuhur: ${data.data[week1].timings.Dhuhr} <br>
        Asar: ${data.data[week1].timings.Asr} <br>
        Sunset: ${data.data[week1].timings.Sunset} <br>
        Maghrib: ${data.data[week1].timings.Maghrib} <br>
        Isha: ${data.data[week1].timings.Isha} <br>
        Midnight: ${data.data[week1].timings.Midnight}`;
        // -------------------------------- day 6 -----------------------------
        let week6 = week5 + 1
        
        head6.innerHTML = `${input.value}, ${data.data[week5].date.gregorian.weekday.en} ${data.data[week5].date.readable}`
        para6.innerHTML = `
        <br>
        Fajir: ${data.data[week1].timings.Fajr} <br>
        Sunrise: ${data.data[week1].timings.Sunrise} <br>
        Zuhur: ${data.data[week1].timings.Dhuhr} <br>
        Asar: ${data.data[week1].timings.Asr} <br>
        Sunset: ${data.data[week1].timings.Sunset} <br>
        Maghrib: ${data.data[week1].timings.Maghrib} <br>
        Isha: ${data.data[week1].timings.Isha} <br>
        Midnight: ${data.data[week1].timings.Midnight}`;


        
     }


    getFacts()
})


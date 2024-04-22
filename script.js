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
let week1_td1 = document.querySelector('#week1_td1')
let week1_td2 = document.querySelector('#week1_td2')
let week1_td3 = document.querySelector('#week1_td3')
let week1_td4 = document.querySelector('#week1_td4')
let week1_td5 = document.querySelector('#week1_td5')
let week1_td6 = document.querySelector('#week1_td6')
let week1_td7 = document.querySelector('#week1_td7')
let week1_td8 = document.querySelector('#week1_td8')
let week1_td9 = document.querySelector('#week1_td9')
let week2_td1 = document.querySelector('#week2_td1')
let week2_td2 = document.querySelector('#week2_td2')
let week2_td3 = document.querySelector('#week2_td3')
let week2_td4 = document.querySelector('#week2_td4')
let week2_td5 = document.querySelector('#week2_td5')
let week2_td6 = document.querySelector('#week2_td6')
let week2_td7 = document.querySelector('#week2_td7')
let week2_td8 = document.querySelector('#week2_td8')
let week2_td9 = document.querySelector('#week2_td9')
let week3_td1 = document.querySelector('#week3_td1')
let week3_td2 = document.querySelector('#week3_td2')
let week3_td3 = document.querySelector('#week3_td3')
let week3_td4 = document.querySelector('#week3_td4')
let week3_td5 = document.querySelector('#week3_td5')
let week3_td6 = document.querySelector('#week3_td6')
let week3_td7 = document.querySelector('#week3_td7')
let week3_td8 = document.querySelector('#week3_td8')
let week3_td9 = document.querySelector('#week3_td9')
let week4_td1 = document.querySelector('#week4_td1')
let week4_td2 = document.querySelector('#week4_td2')
let week4_td3 = document.querySelector('#week4_td3')
let week4_td4 = document.querySelector('#week4_td4')
let week4_td5 = document.querySelector('#week4_td5')
let week4_td6 = document.querySelector('#week4_td6')
let week4_td7 = document.querySelector('#week4_td7')
let week4_td8 = document.querySelector('#week4_td8')
let week4_td9 = document.querySelector('#week4_td9')
let week5_td1 = document.querySelector('#week5_td1')
let week5_td2 = document.querySelector('#week5_td2')
let week5_td3 = document.querySelector('#week5_td3')
let week5_td4 = document.querySelector('#week5_td4')
let week5_td5 = document.querySelector('#week5_td5')
let week5_td6 = document.querySelector('#week5_td6')
let week5_td7 = document.querySelector('#week5_td7')
let week5_td8 = document.querySelector('#week5_td8')
let week5_td9 = document.querySelector('#week5_td9')
let week6_td1 = document.querySelector('#week6_td1')
let week6_td2 = document.querySelector('#week6_td2')
let week6_td3 = document.querySelector('#week6_td3')
let week6_td4 = document.querySelector('#week6_td4')
let week6_td5 = document.querySelector('#week6_td5')
let week6_td6 = document.querySelector('#week6_td6')
let week6_td7 = document.querySelector('#week6_td7')
let week6_td8 = document.querySelector('#week6_td8')
let week6_td9 = document.querySelector('#week6_td9')
let time = document.querySelector('#hours')



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
        // console.log(data);
        // -------------------------- for Time -------------------------
        // let hours = await  currentDate.getHours()
        // let min = await currentDate.getMinutes()
        // // let sec = await currentDate.getTime()
        // console.log(hours);
        // console.log(min);
        // // console.log(sec);
        // time.innerHTML = `Hours = ${hours}, Minutes = ${min}`

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

        // head1.innerHTML = `${input.value}, ${data.data[week1].date.gregorian.weekday.en} ${data.data[week1].date.readable}`
        // para1.innerHTML = `
        // <br>
        // Fajir: ${data.data[week1].timings.Fajr} <br>
        // Sunrise: ${data.data[week1].timings.Sunrise} <br>
        // Zuhur: ${data.data[week1].timings.Dhuhr} <br>
        // Asar: ${data.data[week1].timings.Asr} <br>
        // Sunset: ${data.data[week1].timings.Sunset} <br>
        // Maghrib: ${data.data[week1].timings.Maghrib} <br>
        // Isha: ${data.data[week1].timings.Isha} <br>
        // Midnight: ${data.data[week1].timings.Midnight}`;
        // -------------------------------- day 2 -----------------------------


        let week2 = week1 + 1

        // head2.innerHTML = `${input.value}, ${data.data[week2].date.gregorian.weekday.en} ${data.data[week2].date.readable}`
        // para2.innerHTML = `
        // <br>
        // Fajir: ${data.data[week2].timings.Fajr} <br>
        // Sunrise: ${data.data[week2].timings.Sunrise} <br>
        // Zuhur: ${data.data[week2].timings.Dhuhr} <br>
        // Asar: ${data.data[week2].timings.Asr} <br>
        // Sunset: ${data.data[week2].timings.Sunset} <br>
        // Maghrib: ${data.data[week2].timings.Maghrib} <br>
        // Isha: ${data.data[week2].timings.Isha} <br>
        // Midnight: ${data.data[week2].timings.Midnight}`;

        // -------------------------------- day 3 -----------------------------
        let week3 = week2 + 1

        // head3.innerHTML = `${input.value}, ${data.data[week3].date.gregorian.weekday.en} ${data.data[week3].date.readable}`
        // para3.innerHTML = `
        // <br>
        // Fajir: ${data.data[week3].timings.Fajr} <br>
        // Sunrise: ${data.data[week3].timings.Sunrise} <br>
        // Zuhur: ${data.data[week3].timings.Dhuhr} <br>
        // Asar: ${data.data[week3].timings.Asr} <br>
        // Sunset: ${data.data[week3].timings.Sunset} <br>
        // Maghrib: ${data.data[week3].timings.Maghrib} <br>
        // Isha: ${data.data[week3].timings.Isha} <br>
        // Midnight: ${data.data[week3].timings.Midnight}`;

        // -------------------------------- day 4 -----------------------------
        let week4 = week3 + 1

        // head4.innerHTML = `${input.value}, ${data.data[week4].date.gregorian.weekday.en} ${data.data[week4].date.readable}`
        // para4.innerHTML = `
        // <br>
        // Fajir: ${data.data[week4].timings.Fajr} <br>
        // Sunrise: ${data.data[week4].timings.Sunrise} <br>
        // Zuhur: ${data.data[week4].timings.Dhuhr} <br>
        // Asar: ${data.data[week4].timings.Asr} <br>
        // Sunset: ${data.data[week4].timings.Sunset} <br>
        // Maghrib: ${data.data[week4].timings.Maghrib} <br>
        // Isha: ${data.data[week4].timings.Isha} <br>
        // Midnight: ${data.data[week4].timings.Midnight}`;
        // -------------------------------- day 5 -----------------------------
        let week5 = week4 + 1

        // head5.innerHTML = `${input.value}, ${data.data[week5].date.gregorian.weekday.en} ${data.data[week5].date.readable}`
        // para5.innerHTML = `
        // <br>
        // Fajir: ${data.data[week5].timings.Fajr} <br>
        // Sunrise: ${data.data[week5].timings.Sunrise} <br>
        // Zuhur: ${data.data[week5].timings.Dhuhr} <br>
        // Asar: ${data.data[week5].timings.Asr} <br>
        // Sunset: ${data.data[week5].timings.Sunset} <br>
        // Maghrib: ${data.data[week5].timings.Maghrib} <br>
        // Isha: ${data.data[week5].timings.Isha} <br>
        // Midnight: ${data.data[week5].timings.Midnight}`;
        // -------------------------------- day 6 -----------------------------
        let week6 = week5 + 1

        // head6.innerHTML = `${input.value}, ${data.data[week6].date.gregorian.weekday.en} ${data.data[week6].date.readable}`
        // para6.innerHTML = `
        // <br>
        // Fajir: ${data.data[week6].timings.Fajr} <br>
        // Sunrise: ${data.data[week6].timings.Sunrise} <br>
        // Zuhur: ${data.data[week6].timings.Dhuhr} <br>
        // Asar: ${data.data[week6].timings.Asr} <br>
        // Sunset: ${data.data[week6].timings.Sunset} <br>
        // Maghrib: ${data.data[week6].timings.Maghrib} <br>
        // Isha: ${data.data[week6].timings.Isha} <br>
        // Midnight: ${data.data[week6].timings.Midnight}`;

        // ---------------------------------- FOR TABLE -------------------------------------------

        // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ for dates
        week1_td9.innerHTML = `${input.value}, ${data.data[week1].date.gregorian.weekday.en} ${data.data[week1].date.readable}`
        week2_td1.innerHTML = `${input.value}, ${data.data[week2].date.gregorian.weekday.en} ${data.data[week2].date.readable}`
        week3_td1.innerHTML = `${input.value}, ${data.data[week3].date.gregorian.weekday.en} ${data.data[week3].date.readable}`
        week4_td1.innerHTML = `${input.value}, ${data.data[week4].date.gregorian.weekday.en} ${data.data[week4].date.readable}`
        week5_td1.innerHTML = `${input.value}, ${data.data[week5].date.gregorian.weekday.en} ${data.data[week5].date.readable}`
        week6_td1.innerHTML = `${input.value}, ${data.data[week6].date.gregorian.weekday.en} ${data.data[week6].date.readable}`

        // --------------------------------- for fajir ----------------------------------

        week1_td1.innerHTML = ` Fajir: ${data.data[week1].timings.Fajr} `
        week2_td2.innerHTML = ` Fajir: ${data.data[week2].timings.Fajr} `
        week3_td2.innerHTML = ` Fajir: ${data.data[week3].timings.Fajr} `
        week4_td2.innerHTML = ` Fajir: ${data.data[week4].timings.Fajr} `
        week5_td2.innerHTML = ` Fajir: ${data.data[week5].timings.Fajr} `
        week6_td2.innerHTML = ` Fajir: ${data.data[week6].timings.Fajr} `

        // -------------------------------- for sunrise -----------------------------------
        week1_td2.innerHTML = `Sunrise:  ${data.data[week1].timings.Sunrise} `
        week2_td3.innerHTML = `Sunrise:  ${data.data[week2].timings.Sunrise} `
        week3_td3.innerHTML = `Sunrise:  ${data.data[week3].timings.Sunrise} `
        week4_td3.innerHTML = `Sunrise:  ${data.data[week4].timings.Sunrise} `
        week5_td3.innerHTML = `Sunrise:  ${data.data[week5].timings.Sunrise} `
        week6_td3.innerHTML = `Sunrise:  ${data.data[week6].timings.Sunrise} `

        // -------------------------------- for zuhur --------------------------------------
            week1_td3.innerHTML = `Zuhur: ${data.data[week1].timings.Dhuhr}`
            week2_td4.innerHTML = `Zuhur: ${data.data[week2].timings.Dhuhr}`
            week3_td4.innerHTML = `Zuhur: ${data.data[week3].timings.Dhuhr}`
            week4_td4.innerHTML = `Zuhur: ${data.data[week4].timings.Dhuhr}`
            week5_td4.innerHTML = `Zuhur: ${data.data[week5].timings.Dhuhr}`
            week6_td4.innerHTML = `Zuhur: ${data.data[week6].timings.Dhuhr}`

            // -------------------------------- for Asr --------------------------------------
            week1_td4.innerHTML =`Asar: ${data.data[week1].timings.Asr}`
            week2_td5.innerHTML =`Asar: ${data.data[week2].timings.Asr}`
            week3_td5.innerHTML =`Asar: ${data.data[week3].timings.Asr}`
            week4_td5.innerHTML =`Asar: ${data.data[week4].timings.Asr}`
            week5_td5.innerHTML =`Asar: ${data.data[week5].timings.Asr}`
            week6_td5.innerHTML =`Asar: ${data.data[week6].timings.Asr}`

            // -------------------------------- for sunser --------------------------------------
            week1_td5.innerHTML =`Sunset: ${data.data[week1].timings.Sunset} `
            week2_td6.innerHTML =`Sunset: ${data.data[week2].timings.Sunset} `
            week3_td6.innerHTML =`Sunset: ${data.data[week3].timings.Sunset} `
            week4_td6.innerHTML =`Sunset: ${data.data[week4].timings.Sunset} `
            week5_td6.innerHTML =`Sunset: ${data.data[week5].timings.Sunset} `
            week6_td6.innerHTML =`Sunset: ${data.data[week6].timings.Sunset} `

            // -------------------------------- for maghrib --------------------------------------
            week1_td6.innerHTML =`Maghrib: ${data.data[week1].timings.Maghrib} `
            week2_td7.innerHTML =`Maghrib: ${data.data[week2].timings.Maghrib} `
            week3_td7.innerHTML =`Maghrib: ${data.data[week3].timings.Maghrib} `
            week4_td7.innerHTML =`Maghrib: ${data.data[week4].timings.Maghrib} `
            week5_td7.innerHTML =`Maghrib: ${data.data[week5].timings.Maghrib} `
            week6_td7.innerHTML =`Maghrib: ${data.data[week6].timings.Maghrib} `

            // -------------------------------- for isha --------------------------------------
            week1_td7.innerHTML =`Isha: ${data.data[week1].timings.Isha}`
            week2_td8.innerHTML =`Isha: ${data.data[week2].timings.Isha}`
            week3_td8.innerHTML =`Isha: ${data.data[week3].timings.Isha}`
            week4_td8.innerHTML =`Isha: ${data.data[week4].timings.Isha}`
            week5_td8.innerHTML =`Isha: ${data.data[week5].timings.Isha}`
            week6_td8.innerHTML =`Isha: ${data.data[week6].timings.Isha}`
            // -------------------------------- for midnight --------------------------------------
            week1_td8.innerHTML =`Midnight: ${data.data[week1].timings.Midnight}`
            week2_td9.innerHTML =`Midnight: ${data.data[week2].timings.Midnight}`
            week3_td9.innerHTML =`Midnight: ${data.data[week3].timings.Midnight}`
            week4_td9.innerHTML =`Midnight: ${data.data[week4].timings.Midnight}`
            week5_td9.innerHTML =`Midnight: ${data.data[week5].timings.Midnight}`
            week6_td9.innerHTML =`Midnight: ${data.data[week6].timings.Midnight}`

    }


    getFacts()
})


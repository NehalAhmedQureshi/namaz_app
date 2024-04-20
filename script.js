let main = 'https://api.aladhan.com/v1/calendarByAddress/2024/4?address='
let city = prompt('Enter city name to see prayer times!')

let concat = main + city
console.log(concat);

function api(){
    fetch(concat)
    .then( res => res.json())
    .then(data => console.log(data.data[21].timings))
    // namaz timings => data.data[10].timings
}
api();
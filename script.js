function api(){
    fetch("https://api.aladhan.com/v1/calendarByAddress/2024/4?address=Pakistan")
    .then( res => res.json())
    .then ( data =>  console.log(data.data[10].timings))
    // namaz timings => data.data[10].timings
}

api();
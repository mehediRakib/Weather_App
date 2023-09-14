// fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then((res)=>res.json()).then(data=>console.log(data));

// const fetchRes=fetch("https://jsonplaceholder.typicode.com/todos/1");
// fetchRes.then(res=>
//     res.json()
// ).then(data=>{
//     console.log(data)});

// fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then(res=>
//     res.json()
// ).then(data=>{
//     document.getElementById('fetch').innerHTML=JSON.stringify(data)
//
// })

async  function  api(){
    await fetch("https://api.openweathermap.org/data/2.5/weather?q=Bangladesh&appid=7f7648b6532c0c36adb3e38a2c4855ed")
        .then(res=>res.json())
        .then(data=>{
        document.getElementById('fetch').innerHTML=JSON.stringify(data);

    })

}
api();
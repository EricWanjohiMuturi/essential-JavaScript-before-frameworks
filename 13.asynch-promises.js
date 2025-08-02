//Asynchronous Javascript: Promises
//using the built-in fetch function
//json placeholder API

const todos =fetch('https://jsonplaceholder.typicode.com/todos/')
    .then((res)=>res.json())
    .then((data)=>console.log(data));

console.log(todos)
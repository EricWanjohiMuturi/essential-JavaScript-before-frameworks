//Async-Await is much cleaner than promises

/* const todos =fetch('https://jsonplaceholder.typicode.com/todos/');
    .then((res)=>res.json())
    .then((data)=>console.log(data));

console.log(todos) */

//here as we fetch it will wait for the execution of 
async function todos(){
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const data = await res.json();
    console.log(data);
}  

const getTodos = todos()

console.log(getTodos)

/* 
fetch() gets data from the internet (async)

await pauses the function until it gets a response

response.json() turns it into usable JSON
*/
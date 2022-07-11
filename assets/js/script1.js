//front 21

// elements
let divEl = document.querySelector("#todos");
let loadingEl = document.querySelector("#loading");
let errEl = document.querySelector("#error");
// request url
let todosUrl = "https://jsonplaceholder.typicode.com/todos";

//request functions
// json is the function that returns the data.
function fetchTodos() {
  fetch(todosUrl)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      displayTodos(data);
    })
    .catch(function () {
      // console.log("Something went wrong");
      // loadingEl.innerHTML = "";
      // errEl.innerHTML = "OMG ==== > Something Went wrong !";
      handleErr();
    });
}
// Single resposibility princible so we will create a separate function
// to handle error look down @ handelErr
function handleErr() {
  loadingEl.innerHTML = "";
  errEl.innerHTML = "OMG ==== > Something Went wrong !";
}

function displayTodos(todos) {
  loadingEl.innerHTML = ""; // method 1

  for (let i = 0; i < todos.length; i++) {
    divEl.innerHTML += `
    <h2>${todos[i].title}</h2>`;
  }
}
// console.log(todos);
// the todos here are the data coming fronm the request
fetchTodos();

/*
function fetchTodos() {
  fetch(todosUrl)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      displayTodos(data);
    })
    .catch(function (err) {
      handleErr();
    });

  // .catch(function (err) {
  //   loadingEl.innerHTML = "";
  //   err.innerHTML = "Something Went Wrong ... ";
  // });
}
function displayTodos(todos) {
  loadingEl.innerHTML = "";
  
  for (let i = 0; i < todos.length; i++) {
    divEl.innerHTML += `<h2> ${todos[i].title} </h2>`;
  }
}

function handleErr() {
  loadingEl.innerHTML = "";
  err.innerHTML = "Something Went Wrong ! ";
}

fetchTodos();
*/

// single responsibility

// */

/*
//front 19

let divEl = document.querySelector("#todos");

let loadingEl = document.querySelector("#loading");

let todosUrl = "https://jsonplaceholder.typicode.com/todos";

function fetchTodos() {
  fetch(todosUrl)
    .then((res) => res.json())
    .then((data) => displayTodos(data))
    .catch((err) => handleErr());
}

function displayTodos(todos) {
  loadingEl.innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    divEl.innerHTML += `<h2> ${todos[i].title} </h2>`;
  }
}

function handleErr() {
  loadingEl.innerHTML = "";
  err.innerHTML = "Something Went Wrong ! ";
}

fetchTodos();

// single responsibility


*/

/*
// https://api.github.com/usrs/HamzaNabil/repos





function getRepos() {
  let username = inputEl.value;
  let reposUrl = "https://api.github.com/users/HamzaNabil/repos";

  fetch(reposUrl)
    .then(function (res) {
      return res.json;
    })
    .then(function (data) {
      displyRepos(data)
      console.log(data);
    })
    .catch();
}

getRepos();


*/

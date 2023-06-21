"use strict";

fetch("https://jsonplaceholder.typicode.com/todos/")
  .then((data) => data.json())
  .then((obj) => console.log(obj));

let todo = {
  completed: false,
  userId: 1,
  title: "Learn promises",
};

fetch("https://jsonplaceholder.typicode.com/todos/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(todo),
})
  .then((res) => res.json())
  .then((obj) => console.log(obj))
  .catch((err) => console.error("There was an error: " + err));

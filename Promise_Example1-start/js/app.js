"use strict";

const swapi = function (number) {
  let url = "https://swapi.dev/api/people/";

  fetch(url + number + "/")
    .then((data) => data.json())
    .then((obj) => {
      console.log(obj);

      // Here we need to return *the promise returned by the fetch* call.
      // Otherwise we couldn't access it with then in the next step.
      return fetch(obj.homeworld);
    })
    .then((homeworldData) => homeworldData.json())
    .then((homeworldObject) => console.log(homeworldObject));
};

("use strict");

const swapiAlternative = function (number) {
  let url = "https://swapi.dev/api/people/";

  fetch(url + number + "/")
    .then((data) => data.json())
    .then((obj) => {
      console.log(obj);

      // Alternatively, we use then whilst not returning the promise.
      fetch(obj.homeworld)
        .then((homeworldData) => homeworldData.json())
        .then((homeworldObject) => console.log(homeworldObject));
    });
};

swapi(1);
swapiAlternative(2);

"use strict";

/*let wordnikWords = "http://api.wordnik.com/v4/words.json/",
    wordnikWord = "http://api.wordnik.com/v4/word.json/",
    apiKey = "?api_key=2efe06dd56a60633b30010e4d970da03b55279db9896d7127",
    wordObj;*/

let promise = asyncFunction();

let promise2 = promise.then(function (val) {
  console.log("Yeah: " + val);
  return asyncFunction2();
});

promise2.then(function (val) {
  console.log("Yeah from 2: " + val);
});

console.log("This code is asynchronous");

// Better way
asyncFunction()
  .then(function (val) {
    console.log("Yeah: " + val);
    return asyncFunction2();
  })
  .then(function (val) {
    console.log("Yeah from 2: " + val);
  });

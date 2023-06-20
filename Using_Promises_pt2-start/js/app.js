"use strict";

let wordnikWords = "http://api.wordnik.com/v4/words.json/",
  wordnikWord = "http://api.wordnik.com/v4/word.json/",
  apiKey = "?api_key=2efe06dd56a60633b30010e4d970da03b55279db9896d7127",
  wordObj;
let randomWord = "https://random-word-api.herokuapp.com/word";
let wordDefinition = "https://api.dictionaryapi.dev/api/v2/entries/en/";

console.log("--- Fetching a random word");
fetch(randomWord)
  .then(function (response) {
    // wordObj = response;
    console.log("--- response");
    console.log(response);
    return response.json();
  })
  .then(function (data) {
    console.log("--- json data");
    console.log(data);
    console.log("--- Fetching definition");
    return fetch(wordDefinition + data);
  })
  .then(function (definition) {
    console.log("--- response");
    console.log(definition);
    return definition.json();
  })
  .then(function (definition) {
    console.log("--- json data");
    console.log(definition[0].meanings[0].definitions[0].definition);
  })
  .catch(function (error) {
    console.error(`Error: ${error}`);
  });

/*asyncFunction()
.then(function(val) {
    console.log("Yeah!! " + val);
    return asyncFunction2();
})
.then(function(val) {
    console.log("Second promise: " + val);
});*/

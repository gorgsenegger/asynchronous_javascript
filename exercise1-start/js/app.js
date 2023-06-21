var MAINAPP = MAINAPP || {};

(function (nsp) {
  "use strict";

  //https://api.wordnik.com/v4/word.json/test/scrabbleScore?api_key=YOURAPIKEY
  let wordnikWord = "https://api.wordnik.com/v4/word.json/test/",
    apiKey = "?api_key=xxx",
    field = document.querySelector("#word"),
    btn = document.querySelector("#submitBtn"),
    results = document.querySelector("#results"),
    word,
    scrabbleVal = 0;

  const getValue = function (word) {
    //code this function so it will query the wordnik site. Send a word that is entered in the field. Retrieve the scrabble score from the site. Extract the score from the response and then display it in the results span tag.
    fetch(`${wordnikWord}${word}/scrabbleScore?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((score) => {
        scrabbleVal = score.value;
        results.innerHTML = scrabbleVal;
      });
  };

  btn.addEventListener("click", function (e) {
    word = field.value;
    getValue(word);
  });

  nsp.scrabbleVal = scrabbleVal;
})(MAINAPP);

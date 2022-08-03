//Instructions
//Given an array of strings, words, return a string that has all the words concatenated together
// - spaces are needed in between words
//
//ex. ['how', 'are', 'you'] -> 'how are you'

function wordsToSentence(words) {
  //your code here
  var sentence = "";
  let tempWord;
  //console.log ('OUTISDE loop' + words[i])

  for (let i = 0; i < words.length; i++) {
    if (Array.isArray(words)) {
      if (words[i] !== null) {
        //console.log ('inside loop' + words[i])
        sentence = sentence + words[i].trim() + " ";
      }
    } else {
      if (words !== null) {
        sentence = words;
      }
    }
  }

  return sentence;
}

//console log results
console.log("results", wordsToSentence(["hey", "there"]));
//console.log('results', wordsToSentence('hello'));
//console.log('results', wordsToSentence(['hi','all','yo']));

//don't change this line
if (typeof module !== "undefined") {
  module.exports = {
    wordsToSentence,
  };
}

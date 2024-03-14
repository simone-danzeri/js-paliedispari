// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Chiedo all'utente un parola
const userWord = prompt("Ciao! Dimmi una parola qualsiasi");
// Richiamo la funzione
let palindrome = isPalindrome(userWord);
console.log(palindrome);

// FUNCTIONS

// word --> stringa che dovrò controllare se palindroma
// return: stringa nella quale enuncio se la parola è palindroma
function isPalindrome(word) {
  let wordReverse = "";
  // Leggo la parola a rovescio
  for (let i = userWord.length - 1; i >= 0; i--) {
    wordReverse += userWord[i];
  }
  let result = "";
  // Controlla se la parola che inserisco è palindroma
  if (word === wordReverse) {
    result = word + " " + wordReverse + " " + "La parola è palindroma";
  } else {
    result = word + " " + wordReverse + " " + "La parola non è palindroma";
  }

  return result;
}

// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Chiedo all'utente un parola
const userWord = prompt('Ciao! Dimmi una parola qualsiasi');
console.log(userWord);
// Dovrò leggermi la parola in stile array
for (let i = 0; i < userWord.length; i++) { // NON CAPISCO PERCHE MA IN CONSOLE LE LETTERE DOPPIE ME LE ACCORPA DICENDO CHE C'E' UNA RIPETIZIONE
    let eachUserWordLetter = userWord[i];
    console.log(eachUserWordLetter);
}


// FUNCTIONS

// Controlla se la parola che inserisco è palindroma
// word --> stringa che dovrò controllare se palindroma
// return: stringa in cui dichiaro se word è palindroma oppure no
function isPalindrome (word) {
    // Devo capire se la sequenza delle lettere inserite dall'utente è uguale al suo reverso
}
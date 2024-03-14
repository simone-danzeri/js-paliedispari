// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


let randomComputerNumber = getRndInteger (1, 5);
console.log(randomComputerNumber);
// FUNCTIONS

// Generare numero intero random tra 1 e 5 per computer
// min --> numero intero minimo
// max --> numero intero massimo
// return: numero intero compreso tra min e max generato random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.



// Chiediamo all'utente se vuole pari o dispari
const userChoice = prompt('Scegli pari o dispari');
console.log('La tua scelta è:', userChoice);
//Chiediamo all'utente un numero tra 1 e 5 compresi
const userNumber = parseInt(prompt('Scegli un numero tra 1 e 5 compresi'));
console.log('Il numero da te scelto è:', userNumber);
//Richiamo il numero generato random dal computer
let randomComputerNumber = getRndInteger (1, 5);
console.log('Il numero random del computer è:', randomComputerNumber);
//Sommare il numero dell'utente con quello generato random dal computer
let sum;
sum = userNumber + randomComputerNumber;
console.log('La somma dei due numeri è:', sum);
// Richiamo la funzione per capire se un numero è pari o dispari
let sumEvenOrOdd = isEvenOrOdd (sum);
console.log('La somma è un numero:', sumEvenOrOdd);
//Dichiariamo chi ha vinto
let userMessage;
if (userChoice === sumEvenOrOdd) {
    userMessage = 'Complimenti hai vinto!';
} else {
    userMessage = 'Peccato hai perso!';
}
alert(userMessage);


// FUNCTIONS

// Generare numero intero random tra 1 e 5 per computer
// min --> numero intero minimo
// max --> numero intero massimo
// return: numero intero compreso tra min e max generato random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Stabilire se un numero è pari o dispari
// num --> numero intero da controllare se pari o dispari
// return: stringa dove mi dice se num è pari o dispari
function isEvenOrOdd (num) {
    let evenOrOdd;

    if (num % 2 === 0) {
        evenOrOdd = 'pari';
    } else {
        evenOrOdd = 'dispari';
    }

    return evenOrOdd;
}
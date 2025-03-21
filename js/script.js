//PRIMO ESERCIZIO
//Palindromia
function reverseString (string){ // Creo una funzione per invertire la stringa
    return string.split('').reverse().join(''); // Ritorno il valore della stringa invertito
} // Fine funzione

function palindrome (string, reversedString) { // Creo un'altra funzione per verifare se la parola è palindroma
    if (string === reversedString){ // se la parola inverita è uguale alla parola non invertita allora:
        console.log(`Le parole sono palindrome`); // Stampo il risultato
    } else { // Altrimenti
        console.log(`Le parole non sono palindrome`); // Stampo il risultato
    } // Fine blocco if
} // Fine funzione

let word = prompt(`Inserisci una parola`); // Faccio inserire la parola all'utente ramite prompt
let reversedWord = reverseString (word); // Richiamo la funzione per invertire la stringa
palindrome (word, reversedWord); // Richiamo la funzione
//FINE ESERCIZIO

//-------------------------------------------------

// SECONDO ESERCIZIO
// Pari e Dispari
function randomNum (min, max){ // Creo una funzione per generare un numero casuale compreso compreso tra min e max
    return Math.floor(Math.random() * (max- min) + min) + 1; // Ritorno il valore generato
} // Fine funzione
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
} // Fine funzione randomNum

function evenOdd (num){ // Creo una funzione che mi verifica se un numero è pari o dispari
    if (num % 2 === 0){// Se è pari
        return true; // Ritorno il valore true
    } else {// Altrimenti
        return false;// false
    }// Fine blocco if
}// fine funzione evenOdd

function result (flag, z){// Creo una funzione che mi mostra il risultato
    if ((z === `pari` && flag) || (z === `dispari` && !flag)){ // Se l'utente indovina
        console.log(`Indovinato\nHai vinto`);// Ha vinto
    } else { // Altrimenti
        console.log(`Non hai indovianto\nHai perso`);// Ha perso
    }
}

function sumNumbers (x, y, z){ // creo una funzione che mi somma i 2 valori in più gli passo anche la scelta di pari o dispari fatta dall'utente
    let sum = x + y; // sommo i 2 numeri
    console.log(`La somma è: ${sum}`);
    let check = evenOdd (sum);// richiamo la funzione che mi restituisce se le somma sia pari o dispari
    result (check, z);// Richiamo la funzione che mi mostra i risultati
}

let myChoice = prompt(`Scegli tra pari o dispari`); //Faccio fare la scelta all'utente
let myNum = parseInt(prompt(`Inserisci un numero compreso tra 1 e 5`)); // Gli faccio scegliere il suo numero
let pcNum = parseInt(randomNum(1,5)); // Richoamo la funzione per generare il numero del computer
console.log(`${myNum} - ${pcNum} - ${myChoice}`);
sumNumbers(myNum, pcNum , myChoice); //Richiamo la funzione che stamperà i risultati
//Fine esercizio
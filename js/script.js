//PRIMO ESERCIZIO
//Palindromia
function reverseString (string){ // Creo una funzione per invertire la stringa
    return string.reverse(); // Ritorno il valore della stringa invertito
} // Fine funzione

function palindrome (string, reversedString) { // Creo un'altra funzione per verifare se la parola è palindroma
    if (string === revesedString){ // se la parola inverita è uguale alla parola non invertita allora:
        return true; // Ritorno il valore true
    } else { // Altrimenti
        return false; // Ritorno il valore false
    } // Fine blocco if
} // Fine funzione
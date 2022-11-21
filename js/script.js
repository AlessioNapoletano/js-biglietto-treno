/*
    - Chiedere all'utente il numero di chilometri da percorrere
    - Chiedere età del passeggero/a
    
    - Calcolare il prezzo del viaggio:
        - il prezzo del biglietto è definito in base ai km (0.21 € al km)
        - va applicato uno sconto del 20% per i minorenni
        - va applicato uno sconto del 40% per gli over 65.

    - Stampare il prezzo.
*/

//Richiesta dati
let chilometri = prompt("Inserisci il numero di chilometri: ");

let etaPasseggero = prompt("Inserisci l'età del passeggero");

console.log("il numero di chilometri del tuo viaggio: " + " " + chilometri);

console.log("l'età del passeggero è: " + " " + etaPasseggero);

//Casting delle due variabili
chilometri = parseInt(chilometri);

etaPasseggero = parseInt(etaPasseggero);


let prezzo = chilometri * 0.21;

prezzo = parseFloat(prezzo);

/* Prova di stampa del prezzo
console.log("il prezzo è: " + " " + prezzo);
console.log(typeof(prezzo));
*/
console.log("il prezzo è: " + " " + prezzo + "\u20ac");


if(etaPasseggero < 18){
    prezzo = prezzo - (prezzo * 0.20);
}

prezzo = prezzo.toFixed(2);



document.getElementById('output').innerHTML = prezzo + "\u20ac";
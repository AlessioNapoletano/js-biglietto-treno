/*
    - Chiedere all'utente il numero di chilometri da percorrere
    - Chiedere età del passeggero/a
    
    - Calcolare il prezzo del viaggio:
        - il prezzo del biglietto è definito in base ai km (0.21 € al km)
        - va applicato uno sconto del 20% per i minorenni
        - va applicato uno sconto del 40% per gli over 65.

    - Stampare il prezzo.
*/

//data request
let kilometres = prompt("Inserisci il numero di chilometri: ");

let agePassenger = prompt("Inserisci l'età del passeggero");

console.log("il numero di chilometri del tuo viaggio: " + " " + kilometres);

console.log("l'età del passeggero è: " + " " + agePassenger);

//variable castings
kilometres = parseInt(kilometres);

agePassenger = parseInt(agePassenger);


let price = kilometres * 0.21;

//Console test
console.log("il prezzo è: " + " " + price + "\u20ac");


if(agePassenger < 18){
    price = price - (price * 0.20);
    document.getElementById("minor_adult").innerHTML = "Il cliente è minorenne, usufruirà quindi dello sconto del 20%";
}else if(agePassenger >= 65)  {
    price = price - (price * 0.40);
    document.getElementById("minor_adult").innerHTML = "Il cliente è over 65, usufruirà quindi dello sconto del 40%";
} else{
    document.getElementById("minor_adult").innerHTML = "Per il cliente non è prevista una scontistica";
}

//only 2 decimal places
const formattedPrice = price.toFixed(2);

//output result
document.getElementById('kilometres').innerHTML = kilometres + " Km";
document.getElementById('age_passenger').innerHTML = agePassenger + " Anni";
document.getElementById('final_price').innerHTML = formattedPrice + "\u20ac";
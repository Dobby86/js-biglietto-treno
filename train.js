//chiedo km da percorrere

var kmDaPercorrere = prompt ("chiedere km");

//chiedo eta:
var eta = prompt ("chiedere eta");

//calcolo prezzo biglietto:
var prezzoBiglietto = kmDaPercorrere * 0.21;

// Il prezzo del biglietto è definito in base ai km (0.21 € al km)

//fascia 20% da 0 a 17       <18
var scontoFascia20 = (prezzoBiglietto * 20)/100;


//fascia 40% da 66 a 100     >65
var scontoFascia40 = (prezzoBiglietto * 40)/100;

var prezzoBigliettoFinale  = "io non ho valore";

//se l'età è inferiore < 18
 if (eta < 18) {

     //applichiamo lo sconto di fascia 20
     var prezzoScontato = prezzoBiglietto - scontoFascia20;

     prezzoBigliettoFinale = prezzoScontato;

}  else if (eta> 65) {

    //applicahiamo lo sconto di fascia 40
    var prezzoScontato = prezzoBiglietto - scontoFascia40;

    prezzoBigliettoFinale = prezzoScontato;

}else {

    // altrimenti il prezzo finale del biglietto è quello di base
     prezzoBigliettoFinale = prezzoBiglietto;
}

if (eta > 18 && eta < 65); {
   console.log ("eta senza sconto");
   prezzoBigliettoFinale = prezzoBiglietto;

}

document.getElementById("generator").innerHTML = prezzoBigliettoFinale;

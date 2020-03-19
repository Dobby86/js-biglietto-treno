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

//se l'età è inferiore < 18
 if (eta < 18) {

     //applichiamo lo sconto di fascia 20
     var prezzoScontato = prezzoBiglietto - scontoFascia20;

}  else if (eta> 65) {

    //applicahiamo lo sconto di fascia 40
    var prezzoScontato = prezzoBiglietto - scontoFascia40;
}

document.getElementById("generator").innerHTML = prezzoScontato;

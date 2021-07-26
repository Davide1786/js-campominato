/*
Consegna
Il computer deve generare 16 numeri casuali (le nostre bombe) tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50
Consigli del giorno:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Proviamo prima con pochi numeri, inserire 86 numeri ogni volta potrebbe essere un po’ scocciante
Le validazioni e i controlli possiamo farli anche in un secondo momento.
Ricordatevi che se non sappiamo quante volte dobbiamo fare una cosa ci serve…
E bon travail a tutti quanti. Vi ricordo che sono disponibile per i ticket fino alle 13

*/

function getRndInteger(min, max) {
   return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var bombe = [];

while (bombe.length < 16) {
   var bomba = getRndInteger(1, 100);
   if (!bombe.includes(bomba)) { 
      bombe.push(bomba);
   }
}

console.log(bombe);

// In seguito deve chiedere all’utente (100 - 16 =84) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.

var scegliNum = [];
var hoPerso = false;

while (scegliNum.length < 5 && !hoPerso) {
   
   console.log("i numeri che hai scelto sono " +  scegliNum.length);
   do {
      var num = parseInt(prompt("inserisci un numeo tra uno e 100"));  
   } while (scegliNum.includes(num));
  
   if (bombe.includes(num)){
      console.log("hai perso");
      hoPerso = true;
   } else {
      scegliNum.push(num);
   }
   
}
   if(scegliNum.length == 5){
     
      console.log("hai vinto");
      
   }
// L’utente non può inserire più volte lo stesso numero.


// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.


// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.



 







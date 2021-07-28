   let bombe = [];
   let haiPerso = false;
   let numGiocatore = [];
   let difficolta = 0;
   let max = 100;
  
    
   //  switch (difficolta) {
   //    case 0:
   //      max = 50;
   //      break;
   //    case 1:
   //      max = 80;
   //      break;
   //    case 2:
   //      max = 100;
   //      break;
   //  }
   // var nome = document.getElementById("nome").value;
   //    document.getElementById("nomePasseggero").innerHTML = nome;

   // document.getElementById("livello").addEventListener("click",
   //    function(){
   //       if (Facile){
   //          document.getElementById("livello").value;
   //          document.getElementById("facile") == 50;
   //          // difficolta == max(50);
   //       }
   //       else if (Medio){
   //          difficolta == max(80);
   //       }
   //       else{
   //          difficolta == max(100);
   //       }
   //    }
   // ) 

   // creazione di celle del campo
   creaCampo (100);

   while (bombe.length < 16) {
      let bomba = getRndInteger(1, 100);
      if (!bombe.includes(bomba)) { 
         bombe.push(bomba);
      }
   }
   console.log(bombe);
   
   // funzione che genera le bombe casuali
   function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1) ) + min;
   }
   // funzione che crea le celle quadrate
   function creaCampo(celle){
      for (let i = 1; i <= celle; i++){
         let cella = `
            <div data-cella = "${i}" class= "cella"></div>
         `
         let strutturaCella = document.createElement("div");
         strutturaCella.classList.add("quadrato");
         strutturaCella.innerHTML = cella;
         document.getElementById("campo").appendChild(strutturaCella);
      }
   }

   // funzione che al click genera evento
   document.getElementById("campo").addEventListener("click",
   function(e){
      let num = parseInt(e.target.dataset.cella);
      let element = document.querySelectorAll("[data-cella='" + e.target.dataset.cella + "']");
         console.log(element[0]);
         element[0].innerHTML=num;
         element[0].classList.add("green");
         numGiocatore.push(num);
         
      if (bombe.includes(num)){
         alert("Hai perso");
         haiPerso = true;
         element[0].classList.add("red");
      } else if (numGiocatore.length > 5 && !haiPerso){
         alert("Hai vinto");
      }
   }
   )

   // campo nascosto

   var campoNascosto = document.getElementById("campo");
      campoNascosto.style.display = "none";

      document.getElementById("btnInizia").addEventListener("click",
      function () {
         var campoNascosto = document.getElementById("campo");
         campoNascosto.style.display = "block";
      }
   )  

   var campoNascosto = document.getElementById("campo");
      campoNascosto.style.display = "none";
      
      document.getElementById("btnAnnulla").addEventListener("click",
      function () {
         var campoNascosto = document.getElementById("campo");
         // campoNascosto.style.display = "none";
         campoNascosto.innerHTML = "";
         creaCampo(100);
      }
   
   )  

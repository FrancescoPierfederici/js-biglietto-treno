var kmPercorsi = parseInt(prompt ("Quanti km vuoi percorrere?"));
var etaPasseggero = parseInt(prompt ("Età del passeggero"));
var prezzoBigliettoaKm = 0.21;
var prezzoBiglietto = kmPercorsi * prezzoBigliettoaKm;







if (etaPasseggero < 18){
    document.writeln("Questo è il prezzo del biglietto per i minorenni:" + ((prezzoBiglietto *20) / 100).toFixed(2) +" Euro");
    
}else if (etaPasseggero >= 65){
    document.writeln("Questo è il prezzo del biglietto per gli over 65:" + ((prezzoBiglietto *40) / 100).toFixed(2) +" Euro");


}else if (Number.isNaN(kmPercorsi) || Number.isNaN(etaPasseggero)) {
    alert("Dati Mancanti o Errati") ;
 
}else{
 document.writeln("Questo è il prezzo del biglietto:" + prezzoBiglietto +" Euro") .toFixed(2) ;  
}

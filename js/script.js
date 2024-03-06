const calcButton = document.querySelector('#calc-button');
calcButton.addEventListener('click', function () {
    // chiedi all'utente di inserire i KM da percorrere 
    const infoCustomerKm = parseInt(document.querySelector ('#info-customer-km').value);
    // chiedi all'utente di inserire la propria età 
    const infoCustomerAge = parseInt(document.querySelector ('#info-customer-age').value);
    console.log(infoCustomerKm);
    console.log(infoCustomerAge);
    console.log('Hai cliccato il pulsante!')

    // Calcola il prezzo del biglietto per il cliente 
    // Il prezzo del biglietto è il prodotto tra  la distanza in KM e il prezzo fisso di 0.21 euro al km.
    const totalPrice = infoCustomerKm * 0.21;
    console.log(totalPrice)


// Applica possibili sconti al cliente
 let percentage = 0;
 // Applica sconto del 20% per clienti al di sotto dei 18 anni.
 if (infoCustomerAge < 18 ) {
    percentage = 0.20;
 }
 // Applica scontro del 40% per clienti al di sopra dei 65 anni.
 else if (infoCustomerAge > 65) {
    percentage = 0.40;
 }

 const discount = percentage * totalPrice;

 const finalPrice = totalPrice - discount;

 const ticketCash = `il costo del tuo biglietto è: ${finalPrice.toFixed(2)} Є`

 document.getElementById('ticket').innerHTML = ticketCash;  
 
 
 console.log(finalPrice.toFixed(2)); 
})




console.log(calcButton);



console.log('it works');

/*
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.

Tools
- let
- for
- array
- log



*/

/*let somma=0;
for (i=0; i<10; i++){
    let numers=parseInt(prompt('inserisci numero'))
    somma+= numers
}

console.log(`la somma dei tuoi numeri è: ${somma}`);
*/

let somma=0
let i=0
while (i<10) {
    let numers=parseInt(prompt('inserisci numero'))
    somma+= numers
    
    i++
}
console.log(`la somma dei tuoi numeri è: ${somma}`);

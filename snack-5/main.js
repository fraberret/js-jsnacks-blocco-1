console.log('it works');

/*
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. @qui

Tools
- let 
- array
- if
- for

*/


let dispari= []
let pari=[]
/*
for (i=0; i<6; i++){
    let numbers = parseInt(prompt('inserisci numero'))
    if (numbers % 2 ==0) {
        pari.push(numbers)
        
    }else {
        dispari.push(numbers)
    }
}

console.log(`i numeri dispari sono ${dispari}`);
console.log(`i numeri pari sono ${pari}`);
*/

let i=0;
while (i<6) {

    let numbers = parseInt(prompt('inserisci numero'))
    if (numbers % 2 ==0) {
        pari.push(numbers)
        
    }else {
        dispari.push(numbers)
    }

    i++
    
}
console.log(`i numeri dispari sono ${dispari}`);
console.log(`i numeri pari sono ${pari}`);
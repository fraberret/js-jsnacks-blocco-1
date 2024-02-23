/*L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.

Tools
-prompt
-let/const
-consolelog

Steps
1. chiedere il numero 2 volte
2. salva in delle variabili
3. if num 1>num2 log
4. else log

*/
//chiedere il primo numero e salva in una variabile
let firstNumber = prompt('Inserisci il numero')
//console.log(firstNumber);

//chiedere il secondo numero e salva in una variabile
let secondNumber = prompt('Inserisci il numero')

//SE num 1>num2 log il primo numero
if (firstNumber > secondNumber) {
    console.log(firstNumber);
}
//ALTRIMENTI SE num 1=num2 log parità
else if (firstNumber==secondNumber) {
console.log('Parità');    
}
//ALTRIMENTI log il secondo numero
else {
    console.log(secondNumber);
}





/*L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.

Tools:
- prompt
- let/const
- consolelog
- if/else

Steps
1. chiedere all utente due parole e salvarle in 2 variabili
2. SE lunghezza parola1>lunghezza parola2 log Parola1
3. SE lunghezza parola1<lunghezza parola2 log Parola2
4. ALTRIMENTI log sono lunghe uguali
*/

//chiedere all utente due parole e salvarle in 2 variabili
let firstWord = prompt('Inserisci la prima parola')
let secondWord = prompt('Inserisci la seconda parola')
//console.log(firstWord , secondWord);

//SE lunghezza parola1>lunghezza parola2 log Parola1
if (firstWord.length>secondWord.length) {
    console.log(`Parola più corta ${secondWord} | Parola più lunga ${firstWord}`);
    
}
//SE lunghezza parola1<lunghezza parola2 log Parola2
else if (firstWord.length<secondWord.length) {
    console.log(`Parola più corta ${firstWord} | Parola più lunga ${secondWord}`);
    
}
//ALTRIMENTI log sono lunghe uguali
else{
    console.log('Hanno la stessa lunghezza');
}

/*In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa

Tools:
- prompt
- let/const
- array
- for
- if/else
- console.log

Steps
1. Crea un lista di invitati
2. Chiedere il nome all utente e salva in una variabile
3. Scorri nella lista
4. SE presente in lista puo entrare
5. ALTRIMENTI non puo entrare
5 Stampa i risultati

*/

let nameList=['Luca','Mario','Francesco']
let myName=prompt('Inserisci il tuo nome')

for (let index = 0; index < nameList.length; index++) {
    const name = nameList[index];
    

    if (name==myName) {
        console.log('puoi entrare');
        
    }else{
        console.log('non puoi entrare');
        
    }
    
}

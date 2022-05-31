// Chiediamo all'utente il suo nome,
//  il cognome, colore prefeito e aggiungiamo 21

// 1.chiediamo il nome 

const userName = prompt('Qual è il tuo nome?');


// 2.chiediamo il cognome 

const userSurname = prompt('Qual è il tuo cognome?')


// 3. chiediamo il colore preferito  

const userColor = prompt('Qual è il tuo colore preferito?')


4.// Costruiamo il messaggio finale per l'utente
const userMessage = userName + userSurname + userColor + '22';


// stampiamo il messaggio
document.getElementById('result').innerHTML = userMessage;



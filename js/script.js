// Chiediamo all'utente il suo nome,
//  il cognome, colore prefeito e aggiungiamo 21

// 1. chiediamo il nome 

const userName = prompt('Qual è il tuo nome?');


// 2. chiediamo il cognome 

const userSurname = prompt('Qual è il tuo cognome?')


// 3. chiediamo il colore preferito  

const userColor = prompt('Qual è il tuo colore preferito?')


// 4. costruiamo il messaggio finale per l'utente
const userMessage = 'Il tuo NickName è' + userName + userSurname + userColor + '21';


// stampiamo il messaggio
document.getElementById('result').innerHTML = userMessage;



/*
Ciao ragazzi,
esercizio di oggi: (insicurissimo) password generator
nome repo: js-pwdgen-wannabe
Descrizione
chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21
Ricordate di aiutarvi anche con i commenti, e scrivere i punti chiave che il vostro script JS dovrà compiere.
Usate console.log() per aiutarvi con i valori delle variabili.
E' con grande piacere ragazzi che vi do il benvenuto nel bellissimo mondo JavaScript :muscolo: Sono sicuro che farete cose incredibili :faccia_sbalordita:
A domani mattina :faccia_leggermente_sorridente:
*/

console.log("start!!");

var nome,cognome,colore,password;

nome = prompt("nome","inserisci il tuo nome");

console.log("\nnome: ",nome);

cognome = prompt("cognome","inserisci il tuo cognome");

console.log("\ncognome: ",cognome);

colore = prompt("colore","inserisci il tuo colore preferito");

console.log("\ncolore: ",colore);

password ="\n la tua password é: "+ nome+cognome+colore+"21";

console.log("\n la tua password é: "+password);

document.getElementById("password").innerHTML=password;
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
var nome,cognome,colore,password,x="",i,temp;

console.log("start!!");

nome = prompt("nome","inserisci il tuo nome");
console.log("\nnome: ",nome);

cognome = prompt("cognome","inserisci il tuo cognome");
console.log("\ncognome: ",cognome);

colore = prompt("colore","inserisci il tuo colore preferito");
console.log("\ncolore: ",colore);

anno = new Date();
anno = anno.getFullYear().toString();
anno = anno.substr(2, 2);

password ="\n la tua password é: "+ nome+cognome+colore+"21";
console.log(password);

document.getElementById("password").innerHTML=password;

for (i=0; i<10;i++){
    temp = Math.random() * 93 + 33;
    console.log(temp);
    temp = Math.trunc(temp);
    console.log(temp);
    x += String.fromCharCode(temp);
    console.log(x);
    }
    
    
document.getElementById("password2").innerHTML="Codice pseudocasuale di 10 caratteri: "+x;
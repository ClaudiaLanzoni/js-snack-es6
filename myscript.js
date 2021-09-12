/** Snack 1
    Creare un array di oggetti: ogni oggetto descriverà una bici 
    da corsa con le seguenti proprietà: nome e peso.
    Stampare a schermo la bici con peso minore.
 */


/*
//spesso const è tutta caps lock
const biciclette = [
    {
        nome : 'Bolt',
        pesoInKg : 2
    },

    {
        nome : 'Thunder',
        pesoInKg : 1
    }
]


let biciLeggera;

for (var i=0; i < biciclette.length; i++) {

    //console.log(biciclette[i]);

    if(!biciLeggera) {
        biciLeggera = biciclette[i]; //se non ho bici leggera la bici leggera è la prima che controllo
        console.log(biciLeggera)
        continue //"continue" fa andare direttamente a i++, ripete ciclo if senza aggiungere else
    } 

    //let pesoInKg = biciclette[i].pesoInKg //è uguale a questa che però è più ripetitiva
    let  { pesoInKg } = biciclette[i]; //DESTRUTTURAZIONE (diamo come valore di una variabile 
                                        //il valore della proprietà di un oggetto)
    //js controlla se dentro biciclette[i] c'è prop che si chiama pesoinKg e nel caso la restituisce alla var
    //allo stesso tempo dichiariamo la variabile peso che deve avere lo stesso nome della proprietà dell'oggetto
    //di cui vogliamo il valore


    if (pesoInKg<biciLeggera.pesoInKg) {
        biciLeggera = biciclette[i]
    }

    console.log(biciLeggera)

    //console.log(i, biciLeggera)

    //console.log(biciclette[i], pesoInKg)
    
}

*/




/** Snack 2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti e falli subiti.
Nome sarà l'unica proprietà da compilare, mentre le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti
 */

/*
let squadre = [

    primaSquadra =
    {
        nome: 'Rossi',
        puntiFatti: 0,
        puntiSubiti: 0

    },

    secondaSquadra = {
        nome: 'Blu',
        puntiFatti: 0,
        puntiSubiti: 0

    },
    
];



for (let valore of squadre) { //On each iteration a value of a different property is assigned to let

    valore.puntiSubiti = numeroRandom(0,100); //qui viene assegnato valore alla proprietà puntiSubiti
    valore.puntiFatti = numeroRandom(0,100); //qui viene assegnato valore alla proprietà puntiFatti

    
}

console.log(primaSquadra, secondaSquadra);
*/


function numeroRandom(min, max) { 
    return Math.floor(Math.random() * (max - min + 1)) + min;  
} 


/*

//versione con ciclo for normale

//cicliamo per ogni elem dell array squadre ovvero per ogni squadra
for (var i = 0; i < squadre.length; i++) {
    var squadra = squadre[i]; // squadra attuale nel ciclo (non era necessaria da creare)

    //per ogni valore squadra nel ciclo assegnamo un numero random
    squadra.puntiFatti = numeroRandom(0, 100);
    
    squadra.puntiSubiti = numeroRandom(0, 100);

}

console.log(primaSquadra, secondaSquadra);

*/






/*Snack 3
Scrivere una funzione che accetti tre argomenti: un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione (indice) compresa tra i due numeri specificati.
Usiamo i nuovi metodi degli array forEach() o filter().*/

let numeri = [1, 2, 21, 5, 78, 40, 51, 8, 9];


function createNewList(listaNumeri, a, b) {

    let sottoLista = [];

    // FOR EACH
    listaNumeri.forEach(createNewList)    
    function createNewList(element, index) {

        if(a < index && index < b) {

            sottoLista.push(element);

        }
    
    }
    // Fine FOR EACH

    return sottoLista;

    /*
    //FOR CLASSICO
    for(let i=0; i<listaNumeri.length; i++) {
        if(a < i && i < b) {

            sottoLista.push(listaNumeri[i]);

        }
    }
    */

    /*
    //FILTER
    let sottoLista = listaNumeri.filter((numero) => {

        if (numeri.indexOf(numero) > a && numeri.indexOf(numero) < b){
            return true
        } 
     
    });
    console.log(sottoLista)
    */
}

let myList = createNewList(numeri, 3, 7);
console.log(myList) //questo serve per il ciclo for




/*
//FOR EACH: funziona ma non come richiesto da consegna
let myList = [];

numeri.forEach(createNewList);

function createNewList(elemento, index, array) {
   
   
   
    if (index > a && index < b){
       myList.push(elemento);
   }
   
}

console.log(myList)*/


//FILTER: funziona ma non come richiesto da consegna
/*const myList = numeri.filter(numero => numeri.indexOf(numero) > a && numeri.indexOf(numero) < b);
console.log(myList)*/


//FILTER con sintassi diversa: funziona ma non come richiesto da consegna

/*
const myList = numeri.filter((numero) => {

    if (numeri.indexOf(numero) > a && numeri.indexOf(numero) < b){
        return true
    } 
 
});
console.log(myList))
*/








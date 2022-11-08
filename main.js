/* Snack 1
Dato l'array di nomi:
const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
e dati due numeri min e max (min più piccolo di max).
Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
Eseguiamo questo esercizio prima con forEach e poi con filter.
esempio: dati i valori min: 2 e come max: 4 i nomi nell'array nuovo saranno i nomi compresi tra queste posizioni 2 e 4

Snack 2
Dato un elenco degli studenti di una facoltà, con il totale dei loro voti
let students = [
    { name: 'Marco', id: 213, grades: 78 },
    { name: 'Paola', id: 110, grades: 96 },
    { name: 'Andrea', id: 250, grades: 48 },
    { name: 'Gaia', id: 145, grades: 74 },
    { name: 'Luigi', id: 196, grades: 68 },
    { name: 'Piero', id: 102, grades: 50 },
    { name: 'Francesca', id: 120, grades: 84 },
  ];
1- Dobbiamo creare delle targhe con il loro nome in maiuscolo. Ci serve quindi un nuovo array di stringhe. Ogni elemento del nuovo array sarà il nome dello studente ma con tutte le lettere maiuscole.
2-  Dobbiamo creare un nuovo array con gli studenti che hanno un totale di voti superiore a 70
3-  Dobbiamo creare un nuovo array di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120 */
/*
Snack 3
Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
Snack4
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */

//snack1

let = array2 = [];
const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

myArray.forEach ((element,index) => {

    if (index >= 2 && index <= 4) {
        array2.push(element);
    } 
});

let array3 = myArray.filter((element,index) => {
    if (index >= 2 && index <= 4) {
        return true;
    }
    return false;
});



console.log(array2)
console.log(array3)


//snack2
let students = [
    { name: 'Marco', id: 213, grades: 78 },
    { name: 'Paola', id: 110, grades: 96 },
    { name: 'Andrea', id: 250, grades: 48 },
    { name: 'Gaia', id: 145, grades: 74 },
    { name: 'Luigi', id: 196, grades: 68 },
    { name: 'Piero', id: 102, grades: 50 },
    { name: 'Francesca', id: 120, grades: 84 },
  ]
;

const capital = students.map( (element) => {

    cap = (element.name).toUpperCase();
    return cap;
});

console.log(capital);

const grades = students.filter((students) => {
    if (students.grades > 70 ) {
        return true;
    }
    return false;

});

console.log(grades); 

const grades_and_id = students.filter((students) => {
    if (students.grades > 70 && students.id > 120) {
        return true;
    }
    return false;

});

console.log(grades_and_id); 

//snack3 Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

let h1 = document.getElementById("h1");

let min = 48;

let bici = [
    { name: 'bici1', peso: 78 },
    { name: 'bici2', peso: 96 },
    { name: 'bici3', peso: 48 },
    { name: 'bici4', peso: 74 },
  ]
;

bici.forEach( ( {name, peso} , index)=>{

    if (peso == min) {
        console.log( name, peso )
        h1.innerHTML = `La bici che pesa di meno è ${(name)} con peso ${(peso)} kg`  ;
    }
  
  } )


//snack 4

// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. Infine usando la destrutturazione creiamo un nuovo array i cui elementi     contengono solo nomi e falli subiti e stampiamo tutto in console.

let squadre = [
    { name: 'Juventus', punti: 0, falli:0  },
    { name: 'Milan', punti:0 , falli:0  },
    { name: 'Manchester', punti:0 , falli:0  },
    { name: 'Uganda', punti:0 , falli:0  },
  ]
;


squadre.forEach ( ({punti,falli},index)  => {

    numeroRandomFunc(1,100)
    console.log(squadre)
} )



function numeroRandomFunc(min, max) {

    let numeroRandom = Math.floor(Math.random() * (max - min + min)) + min;

    return numeroRandom;
}

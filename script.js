"use strict"
// objektai

let zmogusVardas;

zmogusVardas = "Vardas"; // string kintamasis

// objekto aprasymas
// objektas aprasomas kintamasis = {savybes, aprasomos per kableli}
let zmogus;

zmogus = {
    vardas: "Vardas",
    pavarde: "Pavarde",
    asmensKodas: "123456789",
    metai: "80",
    "vardas-pavarde": "Virdzinija Gruzauskiene"
}
console.log(zmogus); // visas objektas
console.log(zmogus.vardas); // objekto reiksme
console.log(zmogus["vardas"]); // kitas budas objekto reiksme atspausdinti
// antras budas tinkiamiausias kai savybese atsiranda simboliai - ir pan.
//console.log(zmogus.vardas-pavarde);// situo atveju mes klaida, todel geriau naudoti []
console.log(zmogus["vardas-pavarde"]); // siuo atveju jau atspausdins


const zmogus1 = {  // const objekto pakeisti negalim, bet galima pakeisti kas yra jo viduje
    vardas: "Vardas1",
    pavarde: "Pavarde2",
    asmensKodas: "12345678910",
    metai: "880",
}

console.log(zmogus1);

zmogus1.vardas = "Pakeistas vardas"; // pakeiciama objekto savybe
zmogus1.pavarde = "Pakeista pavarde";

console.log(zmogus1);

let zmogus3 = {
    vardas: "Vardas1",
    pavarde: "Pavarde2",
    asmensKodas: "12345678910",
    metai: "880",
    apibudinimas: ["ausktas", "protingas", "turtingas"] // objekte sukurtas masyvas
}

console.log(zmogus3);
console.log(zmogus3.apibudinimas);
console.log(zmogus3.metai);


// for ciklas isvedama objekto savybiu pavadinimai
for (let i in zmogus3) { // i kintamasis objekte
    console.log("Pavadinimas " + i); // isvedami objekto savybiu pavadinimai
    console.log("Reiksme " + zmogus3[i]); // isvedami obejkto savybiu reiksmes
}

zmogus3["naujas pavadinimas"] = "Pridejau naujo objekto pavadinimo reiksme"; // objekte pridedama nauja savybe, tokiu budu galima pripildyti objekta
zmogus3.tautybe = "Lietuvis" // irgi pildymo budas, tik kitoks aprasymas
console.log(zmogus3);

let zmogus4 = {}; // objektas gali buti tuscias ir tik eigoje ji galima uzsipildyti
// objekto zmogus 4 uzpildymas
zmogus4.vardas = "Vardas4"; // savybe objekte
zmogus4.pavarde = "Pavarde4";
zmogus4["apibudinimas"] = ["neaukstas, turtingas"]; // masyvas objekte

console.log(zmogus4);

// masyvas - array objektas - object
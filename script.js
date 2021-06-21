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
zmogus1.pavarde = "Pakeista pavarde"; // pakeiciama objekto savybe

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
zmogus4.pavarde = "Pavarde4"; // savybe objekte
zmogus4["apibudinimas"] = ["neaukstas, turtingas"]; // masyvas objekte

console.log(zmogus4); // isvedamas objektas su pridetetomis savybemis

// masyvas - array objektas - object

// Kaip kiekvienas objektas gali tureti apibudinimus, taip kiekvienas objektas gali atlikti tam tikrus veiksmus.
 
// metodas - funkcija kuri yra objekto viduje

let zmogus6 = {
    vardas: "Vardas6",
    pavarde: "Pavarde6",
    asmensKodas: "12345678911",
    metai: "88",
    apibudinimas: ["ausktas", "protingas", "turtingas"],
    dirbti: function() { // funkcija objekte (metodas)
        return "Netrukdyk, dirbu";
    },
    prisistatyk: function() {
        return this.vardas + this.pavarde + this.asmensKodas // isvesti varda, pavarde ir amsnens koda // reikia informacijos kuri yra objekto viduje
    } // naudojama this, kad naudoti objekto savybes, grazinti objekto informacija
    // this siuo momentu yra visas objektas, kreipimasis i objekta

}

// console.log(zmogus6.dirbti); isves visa funkcija
console.log(zmogus6.dirbti());// norint isvesti metoda prirasomos ()

console.log(zmogus6.prisistatyk()); // metodo isvedimas


// Sudeti, atimti, padauginti, padalinti du skaicius. Objektiniu principu

const aritmetika = {
    ska1: 5,
    ska2: 4,
    sudetis: function() {
        let suma;
        suma = this.ska1 + this.ska2;
        return suma;
    },
    atimtis: function() {
        let skirtumas;
        skirtumas = this.ska1 - this.ska2;
        return skirtumas;
    },
    daugyba: function() {
        let sandauga;
        sandauga = this.ska1 * this.ska2;
        return sandauga;
    },
    dalyba: function() {
        let dalyba;
        dalyba = this.ska1 / this.ska2;
        return dalyba;
    },
    rezultatas: function() { 
    console.log(aritmetika.sudetis()); // obketo ir funkcijos pavadinimas
    console.log(aritmetika.atimtis());
    console.log(aritmetika.daugyba());
    console.log(aritmetika.dalyba());
    // return nera funcija kuri nieko negrazina
    }
}
// kreipimasis i metoda, kuris yra objekto viduje
aritmetika.rezultatas(); // isvedimas objekto viduje 

// isvedima galima iterpti i objekta sukurus kita funkcija
// console.log(aritmetika.sudetis()); // obketo ir funkcijos pavadinimas
// console.log(aritmetika.atimtis());
// console.log(aritmetika.daugyba());
// console.log(aritmetika.dalyba());
// console.log(aritmetika);

document.getElementById("Patvirtinti").addEventListener("click", function() {

    let sk1, sk2;
    sk1 = parseFloat(document.getElementById("sk1").value);
    sk2 = parseFloat(document.getElementById("sk2").value);

// objektas pasiima reiksmes is getElementById laukelio
    const skaiciuotuvas = {
        sk1: sk1,
        sk2: sk2,
        sudetis: function() {
            let suma;
            suma= this.sk1 + this.sk2;
            return suma;
        },
        atimtis: function() {
            let atimtis;
            atimtis= this.sk1 - this.sk2;
            return atimtis;
        },
    
        daugyba: function() {
            let daugyba;
            daugyba= this.sk1 * this.sk2;
            return daugyba;
        },
    
        dalyba: function() {
            let dalyba;
            dalyba= this.sk1 / this.sk2;
            return dalyba;
        },
    
        rezultatas: function() {
            console.log(this.sudetis());
            console.log(this.atimtis());
            console.log(this.daugyba());
            console.log(this.dalyba());
            // return
        }
    }
    skaiciuotuvas.rezultatas()
} );

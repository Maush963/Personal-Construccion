console.log("hello world!");
console.info("Clash of Clans");
console.warn("Clash Royale");
console.error("Brawl Stars");
console.assert(1==1, "1 is equal to 1");

//para declarar constantes debemos usar la palabra reservada const
const pi = 3.1416
console.log(pi);

alert("que intentas hacer?");
const nombre = prompt("Cual es tu nombre?");
console.log("Hola " + nombre);
const hambre = confirm("Tienes hambre?");

if (hambre == true){
    console.log("Vamos a comer");
} else {
    console.log("Sigamos programando");
}

//funciones tradicionales
function atacar(){
    console.log("Atacar a los goblins");
}
atacar();


//funciones modernas
() => {
    console.log("Construir");
} //esta es una función anónima porque no tiene nombre
let accion = () => {
    console.log("Barbaros de elite");
}

accion();

/*Vamos a ver programación orientada a eventos,
esto es, cuando el usuario interactua con la página*/

//arreglos
const arreglo = ["elemento"];
const arreglo2 = new Array();
arreglo.push(5);
console.log(arreglo);

//recorridos alternativos del arreglo
for (let i = 0; i < arreglo.length; i++){
    console.log(arreglo[i]);
}
//recorrido alternativo
for (let elemento of arreglo){
    console.log(elemento);
}
// recorrido alternativo con indices
for (let indice in arreglo){
    console.log(indice);
}


//objetos

//para declarar un objeto 
const objeto = {atributo: "valor", atributo2: "valor2"};
objeto.atributo = "nuevo valor";
console.log(objeto.atributo);

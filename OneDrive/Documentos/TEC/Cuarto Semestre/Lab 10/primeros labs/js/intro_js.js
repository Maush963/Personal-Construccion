// consola (log, info, warn, error, assert)

console.log("hola");
console.info("Clash of clans");
console.warn("Esta es una advertencia");
console.error("Esto es un error");
console.assert(1 == "1");
//console.assert(1 === "1");
console.assert(1 == true);
//console.assert(1 === true);


// variables, constantes

//declarar variable de manera antigua
var luchadores = 20;

//declara una variable de manera moderna
let arqueras = 20;

//declarar constante
const precio = 50;

// alert, prompt, confirm

alert("hola");
const nombre = prompt("¿Cómo te llamas?");
console.log("Hola " + nombre);

const hambre = confirm("¿Tienes hambre?");

if (hambre) {
    console.log("Es hora de comer");
} else {
    console.log("Continuemos programando");
}

// funciones tradicionales
function atacar() {
    console.log("Atacar a los goblins");
}

atacar();

// funciones modernas
let accion_basica = () => {
    console.log("Construir");
}

accion_basica();

let accion = (construccion) => {
    console.log("Construir " + construccion);
}

accion("cuartel");

// arreglos

const arreglo = ["Elemento"];
const arreglo2 = new Array();

arreglo.push("Otro elemento");
arreglo.push(5);

const elemento = 8;
arreglo.push(elemento);

arreglo[10] = "Uno más";

//arreglos asociativos
arreglo["dos"] = 2;

console.log(arreglo);

//recorrido tradicional del arreglo

for (let i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i]);
}

//recorridos alternativos del arreglo
for(let valor of arreglo) {
    console.log(valor);
}

for(let indice in arreglo) {
    console.log(indice);
}


//Objetos

const objeto = {atributo1: "Valor 1", atributo2: "valor 2"};
objeto.atributo3 = 3;
console.log(objeto);


// modificar html
document.write("hola");


//1
function tabla() {
    // Pedir al usuario que ingrese un número
    const numero = parseInt(prompt("Ingrese un número:"));

    // Crear la tabla
    const tablaElement = document.createElement('table');

    // Crear encabezado de la tabla
    const encabezado = document.createElement('tr');
    encabezado.innerHTML = "<th>Número</th><th>Cuadrado</th><th>Cubo</th>";
    tablaElement.appendChild(encabezado);

    // Crear filas con los números, sus cuadrados y cubos
    for (let i = 1; i <= numero; i++) {
        const fila = document.createElement('tr');
        fila.innerHTML = `<td>${i}</td><td>${i ** 2}</td><td>${i ** 3}</td>`;
        tablaElement.appendChild(fila);
    }

    // Obtener el botón para generar la tabla
    const botonGenerarTabla = document.getElementById('generarTabla');
    
    // Insertar la tabla justo después del botón
    botonGenerarTabla.parentNode.insertBefore(tablaElement, botonGenerarTabla.nextSibling);
}


//2
function sumaAleatoria() {
    // Generar dos números aleatorios
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);

    // Pedir al usuario que ingrese la suma de los dos números
    const inicio = new Date();
    const suma = parseInt(prompt(`Ingrese la suma de ${num1} + ${num2}:`));

    // Calcular el tiempo que tarda el usuario en responder
    const fin = new Date();
    const tiempo = (fin - inicio) / 1000;

    // Verificar si la respuesta es correcta
    if (suma === num1 + num2) {
        alert(`Correcto! Tardaste ${tiempo} segundos en responder.`);
    } else {
        alert(`Incorrecto! Tardaste ${tiempo} segundos en responder.`);
    }

    // Mostrar el resultado en el documento HTML
    const resultadoElement = document.getElementById('generarSuma');
    resultadoElement.textContent = `Tardaste ${tiempo} segundos en responder.`;
    botonGenerarTabla.parentNode.insertBefore(resultadoElement, botonGenerarTabla.nextSibling);
}

//3
function contadorArreglo(){
    tamañoarreglo = parseInt(prompt("Ingrese el tamaño del arreglo:"));
    let arreglo = [];
    for (let i = 0; i < tamañoarreglo; i++){
        arreglo.push(Math.floor(Math.random() * 10) - 5);
    }

    negativos = 0;
    ceros = 0;
    positivos = 0;
    for (let i = 0; i < tamañoarreglo; i++){
        if (arreglo[i] < 0){
            negativos++;
        } else if (arreglo[i] == 0){
            ceros++;
        } else {
            positivos++;
        }
    }

    const resultadoElement = document.getElementById('contadorArreglo');
    
    // Crear el contenedor
    const contenedor = document.createElement('div');
    contenedor.style.display = 'flex';
    contenedor.style.justifyContent = 'space-evenly'; // opcional, para dar espacio entre las tablas

    // Crear la tabla
    const tablaElement = document.createElement('table');
    // Crear encabezado de la tabla
    const encabezado = document.createElement('tr');
    encabezado.innerHTML = "<th>Tipo</th><th>Cantidad</th>";
    tablaElement.appendChild(encabezado);
    // Crear filas con los números, sus cuadrados y cubos
    const fila1 = document.createElement('tr');
    fila1.innerHTML = `<td>Negativos</td><td>${negativos}</td>`;
    tablaElement.appendChild(fila1);
    const fila2 = document.createElement('tr');
    fila2.innerHTML = `<td>Ceros</td><td>${ceros}</td>`;
    tablaElement.appendChild(fila2);
    const fila3 = document.createElement('tr');
    fila3.innerHTML = `<td>Positivos</td><td>${positivos}</td>`;
    tablaElement.appendChild(fila3);
    // Agregar la primera tabla al contenedor
    contenedor.appendChild(tablaElement);
    
    //Agregar tabla a la derecha de esa tabla con el arreglo
    const tablaElement2 = document.createElement('table');
    const encabezado2 = document.createElement('tr');
    encabezado2.innerHTML = "<th>Índice</th><th>Valor</th>";
    tablaElement2.appendChild(encabezado2);
    for (let i = 0; i < tamañoarreglo; i++){
        const fila = document.createElement('tr');
        fila.innerHTML = `<td>${i}</td><td>${arreglo[i]}</td>`;
        tablaElement2.appendChild(fila);
    }
    // Agregar la segunda tabla al contenedor
    contenedor.appendChild(tablaElement2);

    // Insertar el contenedor justo después del botón
    resultadoElement.parentNode.insertBefore(contenedor, resultadoElement.nextSibling);
}

//4
function promedioMatriz(){
    // Pedir al usuario que ingrese el tamaño de la matriz
    const tamaño = parseInt(prompt("Ingrese el tamaño de la matriz:"));

    // Crear la matriz y llenarla con números aleatorios
    const matriz = [];
    for (let i = 0; i < tamaño; i++) {
        matriz.push([]);
        for (let j = 0; j < tamaño; j++) {
            matriz[i].push(Math.floor(Math.random() * 10));
        }
    }

    // Mostrar el resultado en el documento HTML
    const resultadoElement = document.getElementById('promedioMatriz');

    // Crear el contenedor
    const contenedor = document.createElement('div');
    contenedor.style.display = 'flex';
    contenedor.style.justifyContent = 'space-evenly'; // opcional, para dar espacio entre las tablas

    // Crear la tabla
    const tablaElement = document.createElement('table');
    // Crear encabezado de la tabla
    const encabezado = document.createElement('tr');
    encabezado.innerHTML = "<th>Fila</th><th>Promedio</th>";
    tablaElement.appendChild(encabezado);


    // Crear filas  y calcular los promedios
    for (let i = 0; i < tamaño; i++) {
        const fila = document.createElement('tr');
        let suma = 0;
        for (let j = 0; j < tamaño; j++) {
            suma += matriz[i][j];
        }
        fila.innerHTML = `<td>${i}</td><td>${suma/tamaño}</td>`;
        tablaElement.appendChild(fila);
    }

    // Agregar la tabla al contenedor
    contenedor.appendChild(tablaElement);

    // Crear la tabla con la matriz
    const tablaElement2 = document.createElement('table');
    // Crear encabezado de la tabla
    const encabezado2 = document.createElement('tr');
    encabezado2.innerHTML = "<th>Fila</th><th>Valores</th>";
    tablaElement2.appendChild(encabezado2);

    // Crear filas con los números
    for (let i = 0; i < tamaño; i++) {
        const fila = document.createElement('tr');
        fila.innerHTML = `<td>${i}</td><td>${matriz[i]}</td>`;
        tablaElement2.appendChild(fila);
    }
    // Agregar la tabla al contenedor
    contenedor.appendChild(tablaElement2);

    // Insertar el contenedor justo después del botón
    resultadoElement.parentNode.insertBefore(contenedor, resultadoElement.nextSibling);
    
}

//5
function inverso(){
    // pedir al usuario que introduzca un número
    const numero = parseInt(prompt("Ingrese un número:"));
    // convertir el número a string y luego a array
    const numeroArray = numero.toString().split("");
    // invertir el array
    const numeroInvertido = numeroArray.reverse();
    // convertir el array invertido a string y luego a número
    const numeroInvertidoNumero = parseInt(numeroInvertido.join(""));
    // mostrar el resultado en el documento HTML
    const resultadoElement = document.getElementById('inverso');
    resultadoElement.textContent = `El número invertido es: ${numeroInvertidoNumero}`;

    // Insertar el resultado justo después del botón
    resultadoElement.parentNode.insertBefore(resultadoElement, resultadoElement.nextSibling);
}

//6
function libreria(){
    // Crear el objeto Libro
    class Libro {
        constructor(titulo, autor, leido, fecha = new Date()) {
            this.titulo = titulo;
            this.autor = autor;
            this.leido = leido;
            this.fecha = fecha;
        }
    }
    // Pedir al usuario cuantos libros quiere agregar
    const cantidad = parseInt(prompt("¿Cuántos libros quieres agregar?"));
    // Crear un array para guardar los libros
    const libros = [];
    // Llenar el array con los libros
    for (let i = 0; i < cantidad; i++) {
        const titulo = prompt("Ingrese el título del libro:");
        const autor = prompt("Ingrese el autor del libro:");
        const leido = confirm("¿Ya leíste el libro?");
        libros.push(new Libro(titulo, autor, leido));
    }
    // Mostrar el resultado en el documento HTML
    const resultadoElement = document.getElementById('libreria');
    // Crear la tabla
    const tablaElement = document.createElement('table');
    // Crear encabezado de la tabla
    const encabezado = document.createElement('tr');
    encabezado.innerHTML = "<th>Título</th><th>Autor</th><th>Leído</th><th>Fecha</th>";
    tablaElement.appendChild(encabezado);
    // Crear filas con los libros
    for (let i = 0; i < cantidad; i++) {
        const fila = document.createElement('tr');
        fila.innerHTML = `<td>${libros[i].titulo}</td><td>${libros[i].autor}</td><td>${libros[i].leido}</td><td>${libros[i].fecha}</td>`;
        tablaElement.appendChild(fila);
    }
    // Agregar la tabla al documento
    resultadoElement.parentNode.insertBefore(tablaElement, resultadoElement.nextSibling);

}

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

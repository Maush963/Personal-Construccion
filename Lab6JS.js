const myDiv = document.getElementById("myDiv");
myDiv.classList.add("text-gray-700", "text-sm", "text-center", "m-12");


//Obtener formulario por su id
var corrocontra = document.getElementById("CorroborarContraseña");
//listener para el evento submit
corrocontra.addEventListener("submit", function(event){
    //Prevenir que el formulario se envie (es lo que hace por defecto el submit)
    event.preventDefault();
    //Obtener el valor de los input
    var contra = document.getElementById("password").value;
    var contra2 = document.getElementById("password2").value;
    if (contra == contra2){
        alert("Las contraseñas coinciden");
    }else{
        alert("Las contraseñas no coinciden");
    }
});
const secDiv = document.getElementById("secDiv");
secDiv.style.position = "static";
secDiv.classList.add("text-green-800","text-base", "font-bold", "text-center", "m-4","justify-center");

//estilizando el div principal
const grande = document.getElementById("grande");
grande.classList.add("bg-gray-100", "font-Georgia", "text-black", "p-4", "rounded-lg", "shadow-lg", "m-4", "p-4");

document.getElementById("grande").style.margin = "20px";
document.getElementById("grande").style.padding = "20px";

//estilizando el botón
const boton = document.getElementById("boton");
boton.classList.add("bg-blue-500", "hover:bg-blue-700", "text-white", "font-bold", "py-2", "px-4", "rounded");

//estilizando el dospuntouno
const dospuntouno = document.getElementById("dospuntouno");
dospuntouno.classList.add("text-gray-700", "text-sm", "text-center", "m-6");

//estilizando el tercer div
const terDiv = document.getElementById("terDiv");
terDiv.classList.add("text-gray-700", "text-sm", "text-center", "m-12");

//estilizando el cuarto div
const cuarDiv = document.getElementById("cuarDiv");
cuarDiv.classList.add("text-gray-700", "text-sm", "text-center", "m-6");



//cambiando la fuente del texto con un botón usando onclick
//si le pican otra vez, se regresa a la fuente original
//sacando la fuente del div "grande"
var fuente = document.getElementById("grande").style.fontFamily;
function cambiarFuente(){
    if (fuente == "Georgia"){
        document.getElementById("grande").style.fontFamily = "Arial";
        fuente = "Arial";
    }else{
        document.getElementById("grande").style.fontFamily = "Georgia";
        fuente = "Georgia";
    }
}
//estilizando el segundo botón
const boton2 = document.getElementById("boton2");
boton2.classList.add("bg-yellow-400","m-6", "text-black","text-lg","font-bold", "p-4", "rounded-md", "shadow-md", "active:bg-yellow-500", "transition-colors");



//Quintodiv que aparezca de forma dinámica con un botón
var quintoDiv = document.getElementById("quintoDiv");
var mostrarDivButton = document.getElementById("mostrarDiv");

// Ocultando el div inicialmente
quintoDiv.style.display = "none";

mostrarDivButton.addEventListener("click", function() {
  quintoDiv.style.display = "block";

  // Opcional: Animación al mostrar el div
  // Puedes usar librerías como Anime.js para crear animaciones más complejas
  quintoDiv.classList.add("animated", "fadeInUp");

  // Opcional: Retraso en la animación
  setTimeout(function() {
    quintoDiv.classList.remove("animated", "fadeInUp");
  }, 1000);
});
//estilizando el quinto div
quintoDiv.classList.add("text-gray-700", "text-sm", "text-center", "m-12", "bg-gray-100", "font-Georgia", "text-black", "p-4", "rounded-lg", "shadow-lg", "m-4", "p-4","bg-green-100");

//estilizando el tercer botón
const mostrarDiv = document.getElementById("mostrarDiv");
mostrarDiv.classList.add("bg-red-500", "hover:bg-red-700", "text-white", "font-bold", "py-2", "px-4", "rounded", "text-center", "justify-center", "m-6");

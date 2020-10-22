/* eslint-disable no-undef, no-unused-vars */

//Declaraciones

// Contante con la URL de la imagen que se va a pintar.
// Al ser una constante, su identificador está escrito con cada palabra en
// mayúscula sostenida y cada palabra separada por un guión bajo

const URL_IMAGEN =
  "https://uploads.codesandbox.io/uploads/user/2438424f-bb17-45cf-8ff8-47dae247eca7/QoNS-big_buck_bunny.jpg";

// Variable que va a contener la imagen que se va a pintar.
// Al ser una variable, su identificador está escrito en notación 'CamelCase'
// (cada palabra inicia con una letra mayúscula y el resto de letras en minúscula,
// excepto la primera palabra que es mayúscula sostenida; no hay espacios ni
// guiones entre palabras)
let imagenConejo;

// Función de precarga de los recursos
function preload() {
  // Se carga la imagen y se asigna a la variable
  imagenConejo = loadImage(URL_IMAGEN);
}

// Función de configuración
function setup() {
  // Crear un lienzo (área de dibujo) del tamaño de la ventana del navegador Web
  createCanvas(windowWidth, windowHeight);
  // Cambia la cantidad de cuadros que se muestran por segundo a 2
  // Hace que no se llama continuamente a la función draw
  noLoop();
}

// Función donde se programa la funcionalidad
function draw() {
  background(random(0, 255), random(0, 255), random(0, 255));
  // Pinta en el lienzo la imagen cargada anteriormente
  image(imagenConejo, 0, 0, 384, 579);
  // Genera un número aleatorio entero entre 0 y 7
  let filtro = Math.round(random(0, 7));
  // Aplica el filtro a todo el lienzo
  switch (filtro) {
    case 0:
      filter(THRESHOLD);
      break;
    case 1:
      filter(GRAY);
      break;
    case 2:
      filter(OPAQUE);
      break;
    case 3:
      filter(INVERT);
      break;
    case 4:
      filter(POSTERIZE, 3);
      break;
    case 5:
      filter(DILATE);
      break;
    case 6:
      filter(BLUR, 3);
      break;
    default:
      filter(ERODE, 3);
      break;
  }
}

// Se llama si el tamaño de la ventana del navegador Web cambia
windowResized = function () {
  // Redimenciona el tamaño del lienzo al tamaño de la ventana del navegador Web
  resizeCanvas(windowWidth, windowHeight);
};
// Función que se llama al presionar una tecla
function keyTyped() {
  // Verifica que la tecla presionada es la f
  console.log(key);
}

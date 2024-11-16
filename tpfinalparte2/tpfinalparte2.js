// milagros pocholo joaquin parello 
//comi4
// link del vide : https://youtu.be/TNN-BDZZ6G0
let juego, pantalla, explorador, liana, obstaculo;
let lianasImg = [];
let fondoImg, monoImg, personajeImg, rocaImg; 

function preload() {
  fondoImg = loadImage("data/fondo.jpg");  // Fondo del juego
  monoImg = loadImage("data/mono.png");    // Imagen del mono
  personajeImg = loadImage("data/personaje.png");  // Imagen del explorador
  rocaImg = loadImage("data/roca.png");  // Imagen de la roca
  lianasImg[0] = loadImage("data/liana1.png");
  lianasImg[1] = loadImage("data/liana2.png");
  lianasImg[2] = loadImage("data/liana3.png");
  salto = loadSound("data/salto.mp3"); 
}
 
function setup() {
  createCanvas(640, 480);
  juego = new Juego();
  explorador = new Explorador();
  liana = new Liana();
  obstaculo = new Obstaculo();
  pantalla = new Pantalla();
}

function draw() {
  background(34, 23, 155);
  pantalla.mostrar();
}

function keyPressed() {
  if (key === 'Enter') {
    pantalla.manejarCambioEstado();  // Lógica de cambio de estado en Pantalla
    if (pantalla.estado === 'juego') {
      juego.explorador.saltar(); 
    }
  }
}

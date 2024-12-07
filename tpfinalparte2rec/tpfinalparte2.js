// milagros pocholo joaquin parello 
//comi4
// link del vide :https://youtu.be/apoPnRJf3AU
let lianasImg = [];
let fondoImg, monoImg, personajeImg, rocaImg, salto;

function preload() {
  fondoImg = loadImage("data/fondo.jpg"); // Fondo del juego
  monoImg = loadImage("data/mono.png"); // Imagen del mono
  personajeImg = loadImage("data/personaje.png"); // Imagen del explorador
  rocaImg = loadImage("data/roca.png"); // Imagen de la roca
  lianasImg[0] = loadImage("data/liana1.png");
  lianasImg[1] = loadImage("data/liana2.png");
  lianasImg[2] = loadImage("data/liana3.png");
  salto = loadSound("data/salto.mp3");
}

function setup() {
  createCanvas(640, 480);
  juego = new Juego();
}

function draw() {
  background(fondoImg);
  juego.actualizar();
}

function keyPressed() {
  if (key === 'Enter') {
    juego.manejarTecla();
  }
}

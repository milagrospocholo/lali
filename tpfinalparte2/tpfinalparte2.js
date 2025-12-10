//let imgfondo
//function preload(){
//imgfondo = loadImage("data/fondo.jpg");
//}

function setup() {
  createCanvas(400, 400);
  new Liana(300, 200); 
  juego = new Juego();
}

function draw() {
  background(0);
  juego.actualizar();
}

function keyPressed() {
  if (key === ' ') {
    juego.explorador.velY = -10;
  }
}

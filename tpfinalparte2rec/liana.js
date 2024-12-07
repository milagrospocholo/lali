class Liana {
  constructor(x, y) {
    this.x = x; //posX
    this.y = y; //posY
   this.img = random(3); 

 
if (this.img < 1) {
  this.img = lianasImg[0];  
} else if (this.img < 2) {
  this.img = lianasImg[1]; 
} else {
  this.img = lianasImg[2]; 
}
  }

  mostrar() {
    image(this.img, this.x, this.y, 80, 600);
  }
 
  mover(velocidad) {
   // Mueve la liana hacia la izquierda
    this.x -= velocidad;
   // Si la liana sale del borde izquierdo de la pantalla, se reposiciona en el borde derecho y se le da una nueva posición aleatoria en Y
    if (this.x < -60) {
      this.x = width + 50; 
      this.y = random(-200, -50);
  }
}
}

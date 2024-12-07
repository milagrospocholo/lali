class Liana {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.img = loadImage("data/liana" + floor(random(1, 4)) + ".png");  // Cargar aleatoriamente las imágenes de las lianas
    this.ancho = 80;  // Lianas más delgadas
    this.alto = 600;  // Lianas muy largas
  }

  mostrar() {
    image(this.img, this.x, this.y, this.ancho, this.alto);  // Mostrar lianas muy largas
  }
}

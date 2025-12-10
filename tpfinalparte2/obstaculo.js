class Obstaculo {
  constructor(x, y, tipo) {
    this.x = x;
    this.y = y;
    this.tipo = tipo;
    this.r = 15;
    this.velY = this.tipo === 'animal' ? random(2, 4) : 0; // Los animales saltan, las rocas no
    this.haciendoSalto = this.tipo === 'animal'; // Solo los animales saltan
  }

  mostrar() {
    if (this.tipo === 'animal') {
      fill(200, 0, 0);
      ellipse(this.x, this.y, 30, 30);
      
      if (this.haciendoSalto) {
        this.saltar(); // El animal salta
      }
    } else if (this.tipo === 'roca') {
      fill(100);
      ellipse(this.x, this.y, 30, 30); // Representación de una roca
      this.moverDiagonal(); // Las rocas se mueven en diagonal
    }
  }

  // Método para mover la roca en diagonal
  moverDiagonal() {
    this.x -= 2;
    this.y += 1;

    if (this.y > height || this.x < -50) {
      this.x = width + random(100, 300);
      this.y = random(100, height - 50);
    }
  }

  // Método para el salto del animal
  saltar() {
    this.y -= this.velY;
    if (this.y < height - 200) {
      this.velY *= -1;
    }
    if (this.y > height - 20) {
      this.velY *= -1;
    }
  }
}

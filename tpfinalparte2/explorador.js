class Explorador {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.velY = 0;
    this.r = 10; 
    this.hayColision = false; 
  }

  mostrar() {
    fill(255, 200, 0);
    ellipse(this.x, this.y, 20, 20);
  }

  balancearse() {
    this.velY += 0.5;
    this.y += this.velY;

    if (this.y > height) {
      this.y = height;
      this.velY = 0;
    }
  }

  // Detectar colisiones con obstáculos
  verificarColision(obstaculo) {
    let distancia = dist(this.x, this.y, obstaculo.x, obstaculo.y);

    if (distancia < (this.r + obstaculo.r)) {
      this.hayColision = true;
    } else {
      this.hayColision = false;
    }
  }
}

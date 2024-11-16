class Explorador {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.velY = 0;
    this.r = 40; 
    this.hayColision = false;
  }

  mostrar() {
    image(personajeImg, this.x - 40, this.y - 40, 80, 80); // Usamos la imagen del explorador en 80x80
  }

  balancearse() {
    this.velY += 0.5;
    this.y += this.velY;

   
    if (this.y > height - 80) {  
      this.y = height - 80;  
      this.velY = 0;  
    }

    
    if (this.y < 0) {
      pantalla.estado = 'creditos';  
    }
  }

  verificarColision(obstaculo) {
    let distancia = dist(this.x, this.y, obstaculo.x, obstaculo.y);

    if (distancia < (this.r + obstaculo.r)) {
      this.hayColision = true;
    }
  }

  saltar() {
    this.velY = -10;
    salto.play();  // Reproduce el sonido del salto
  }
}

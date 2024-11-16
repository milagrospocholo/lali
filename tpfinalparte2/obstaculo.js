class Obstaculo {
  constructor(x, y, tipo) {
    this.x = x;
    this.y = y;
    this.tipo = tipo;

    // Cargar la imagen de las rocas o monos
    this.img = (this.tipo === 'roca') ? loadImage("data/roca.png") : loadImage("data/mono.png");
    this.velY = this.tipo === 'animal' ? random(2, 4) : 0;
    this.haciendoSalto = this.tipo === 'animal';

    this.ancho = 100;  
    this.alto = 100;   

    this.r = this.ancho / 2; 
  }

  mostrar() {
    
    image(this.img, this.x, this.y, this.ancho, this.alto);
    
    
    if (this.tipo === 'animal' && this.haciendoSalto) {
      this.saltar();
    }
    
    if (this.tipo === 'roca') {
      this.moverDiagonal();
    }
  }

  moverDiagonal() {
    this.x -= 2;
    this.y += 1;

    
    if (this.y > height || this.x < -50) {
      this.x = width + random(100, 300);
      this.y = random(100, height - 50);
    }
  }

  saltar() {
    this.y -= this.velY;
    if (this.y < height - 200) {
      this.velY *= -1;
    }
    if (this.y > height - 20) {
      this.velY *= -1;
    }
  }

  verificarColision(explorador) {
    // Verificar colisión usando el cálculo de la distancia entre los centros de los objetos
    let distancia = dist(explorador.x, explorador.y, this.x + this.ancho / 2, this.y + this.alto / 2);
    
    // Si la distancia entre los dos es menor que la suma de los radios, hay colisión
    if (distancia < (explorador.r + this.r)) {
      explorador.hayColision = true;
    }
  }
}

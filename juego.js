class Juego {
  constructor() {
    this.explorador = new Explorador(200, 100);
    this.lianas = [];
    this.obstaculos = [];
    this.velocidad = 2;
    this.score = 0;
    
    

    // Crear lianas 
    for (let i = 50; i < width; i += 100) {
      this.lianas.push(new Liana(i, random(200, 300)));
    }

    // Crear obstáculos
    for (let i = 0; i < 5; i++) {
      let tipo = random(['animal', 'roca']);
      this.obstaculos.push(new Obstaculo(width + i * 200, random(height - 50, height - 20), tipo));
    }
  }

  actualizar() {
    this.score += 0.1;
    let puntajeEntero = int(this.score); // int() redondea al número entero más bajo
    this.velocidad += 0.001;

    // Actualizamos la posición y mostramos al explorador
    this.explorador.mostrar();
    this.explorador.balancearse();

    // Verificamos si el explorador toca la parte superior de la pantalla
    if (this.explorador.y < 0) {
    
    }

    // Actualizamos las lianas
    for (let liana of this.lianas) {
      liana.mostrar();
      liana.x -= this.velocidad;
      if (liana.x < -50) {
        liana.x = width + 50;
        liana.y = random(200, 300);
      }
    }

    // Actualizamos los obstáculos
    for (let obstaculo of this.obstaculos) {
      obstaculo.mostrar();
      obstaculo.x -= this.velocidad;

      // el obstáculo se reposiciona
      if (obstaculo.x < -50) {
        obstaculo.x = width + random(100, 300);
        obstaculo.y = random(height - 50, height - 20);
        obstaculo.tipo = random(['animal', 'roca']);
      }

      // Verificamos si hay colisión
      this.explorador.verificarColision(obstaculo);

      if (this.explorador.hayColision) {
        noLoop(); // Detener el juego
      }
    }

    // Mostramos el puntaje
    this.mostrarScore(puntajeEntero);
  }

  mostrarScore(puntajeEntero) {
    fill(255);
    textSize(16);
    text("Score: " + puntajeEntero, 10, 20);
 }
    mostrarfondo(){
      image(imgfondo,0,0,400,400);
      
    }
}

class Juego {
  constructor() {
    this.explorador = new Explorador(200, 100);
    this.lianas = [];
    this.obstaculos = [];
    this.velocidad = 2;
    this.fondoImg = loadImage("data/fondo.jpg");  // Fondo del juego
    this.generarLianas();
    this.generarObstaculos();
  }

  generarLianas() {
    for (let i = 0; i < 10; i++) {  // Número de lianas
      let lianaY = random(-200, -50);  // Ahora las generamos mucho más arriba
      this.lianas.push(new Liana(i * 80 + 50, lianaY));  // Separación de lianas
    }
  }

  generarObstaculos() {
    for (let i = 0; i < 5; i++) {
      let tipo = (i % 2 === 0) ? 'roca' : 'animal';
      let obstaculo = new Obstaculo(width + i * 200, random(height - 50, height - 20), tipo);
      this.obstaculos.push(obstaculo);
    }
  }

  actualizar() {
    background(this.fondoImg);  

    this.velocidad += 0.001;

    
    this.explorador.mostrar();
    this.explorador.balancearse();

    
    for (let i = 0; i < this.lianas.length; i++) {
      this.lianas[i].mostrar();
      this.lianas[i].x -= this.velocidad;
      if (this.lianas[i].x < -60) {
        this.lianas[i].x = width + 50;
        this.lianas[i].y = random(-200, -50);  // Reposicionamos las lianas mucho más arriba
      }
    }

    
    for (let i = 0; i < this.obstaculos.length; i++) {
      this.obstaculos[i].mostrar();
      this.obstaculos[i].x -= this.velocidad;
      if (this.obstaculos[i].x < -60) {
        this.obstaculos[i].x = width + random(100, 300);
        this.obstaculos[i].y = random(height - 50, height - 20);
      }

      
      this.explorador.verificarColision(this.obstaculos[i]);
      if (this.explorador.hayColision) {
        pantalla.estado = 'creditos';  // Al perder, mostramos la pantalla de créditos
      }
    }
  }
}

class Juego {
  constructor() {
    this.pantalla = 'instrucciones'; //pantalla inicial (instrucciones)
    this.explorador = new Explorador(200, 100);
    this.lianas = this.generarLianas();
    this.obstaculos = this.generarObstaculos();
    this.velocidad = 2; //velocidad inicial del juego
  }

  generarLianas() {
    let lianas = [];
    for (let i = 0; i < 10; i++) {
      let lianaY = random(-200, -50);  
      lianas.push(new Liana(i * 80 + 50, lianaY));
    }
    return lianas;  
  }

 generarObstaculos() {
  let obstaculos = [];
  for (let i = 0; i < 6; i++) {
    if (i % 2 === 0) {
      obstaculos.push(new Obstaculo(width + i * 100, random(height - 100, height - 50), 'roca'));
    } else {
      obstaculos.push(new Obstaculo(width + i * 100, random(height - 100, height - 50), 'animal'));
    }
  }
  return obstaculos;
}
 //muestra la pantalla correspondiente
  actualizar() {
    if (this.pantalla === 'instrucciones') {
      this.mostrarInstrucciones();
    } else if (this.pantalla === 'juego') {
      this.jugar();
    } else if (this.pantalla === 'creditos') {
      this.mostrarCreditos();
    }
  }

  manejarTecla() {
    if (this.pantalla === 'instrucciones') {
      this.pantalla = 'juego'; // Cambia a la pantalla del juego si esta en instrucciones
    } else if (this.pantalla === 'juego') {
      this.explorador.saltar();// Hace saltar al explorador 
    } else if (this.pantalla === 'creditos') {
      this.reiniciar(); // Reinicia el juego si está en créditos
    }
  }

  reiniciar() {
    this.pantalla = 'instrucciones'; // Regresa a la pantalla de instrucciones
    this.explorador = new Explorador(200, 100); // Reinicia el explorador
    this.lianas = this.generarLianas();  // Regenera las lianas
    this.obstaculos = this.generarObstaculos(); // Regenera los obstáculos
    this.velocidad = 2; // Restaura la velocidad inicial
  }
  // Método que ejecuta el juego
  jugar() {
  this.velocidad += 0.001;
  this.explorador.mostrar();
  this.explorador.moverse();

  // Muestra las lianas
  for (let i = 0; i < this.lianas.length; i++) {
    this.lianas[i].mostrar();
    this.lianas[i].mover(this.velocidad);
  }

  // Muestra y mueve los obstáculos, y verifica colisiones
  for (let i = 0; i < this.obstaculos.length; i++) {
    this.obstaculos[i].mostrar(); // Muestra el obstáculo 
    this.obstaculos[i].mover(this.velocidad);  // Mueve el obstáculo con la velocidad actual
    if (this.explorador.verificarColision(this.obstaculos[i])) { //verifica la colision entre los obstaculos y el explorador
      this.pantalla = 'creditos';  // Si hay colisión, cambia a la pantalla de créditos
      return; // Detener el juego tras la colisión
    }
  }
}
 mostrarInstrucciones() {
  // Fondo de las instrucciones
  fill(0, 0, 255);
  noStroke(); 
  rect(0, 0, width, height);

  // Se muestran las instrucciones
  textAlign(CENTER, CENTER);
  textSize(24);
  fill(255); // Color blanco para el texto
  text("¡Bienvenido al Juego!", width / 2, height / 4);
  
  // Instrucciones adicionales
  textSize(16);
  text("Saltar con el ENTER", width / 2, height / 2 - 30);
  text("No puedes salirte de la pantalla", width / 2, height / 2);
  text("No puedes chocar con los obstáculos", width / 2, height / 2 + 30);

  textSize(16);
  text("Presiona Enter para comenzar", width / 2, height - 50);
}
  mostrarCreditos() {
     fill(0, 0, 255);
  noStroke();
  rect(0, 0, width, height);
    textAlign(CENTER, CENTER);
    textSize(24);
    fill(255);
    text("¡Gracias por jugar!", width / 2, height / 4);
    text("Presiona Enter para volver a jugar", width / 2, height - 50);
  }
}

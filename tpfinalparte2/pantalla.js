class Pantalla {
  constructor() {
    this.estado = 'instrucciones';  // Estado inicial de la pantalla
  }

  mostrar() {
    if (this.estado === 'instrucciones') {
      this.mostrarInstrucciones();
    } else if (this.estado === 'juego') {
      juego.actualizar();
    } else if (this.estado === 'creditos') {
      this.mostrarCreditos();  // Muestra la pantalla de créditos
    }
  }

  mostrarInstrucciones() {
    textAlign(CENTER, CENTER);
    textSize(24);
    fill(255);
    text("¡Bienvenido al Juego!", width / 2, height / 4);
    textSize(16);
    text("Instrucciones:", width / 2, height / 2 - 20);
    text("1. Usa el Enter para saltar.", width / 2, height / 2 + 10);
    text("2. Evita los obstáculos.", width / 2, height / 2 + 30);
    text("3. Cuidado con salirte de la pantalla.", width / 2, height / 2 + 50);
    text("Presiona Enter para comenzar", width / 2, height - 50);
  }

  mostrarCreditos() {
    textAlign(CENTER, CENTER);
    textSize(24);
    fill(255);
    text("¡Gracias por jugar!", width / 2, height / 4);  // Pantalla de créditos
    textSize(16);
    text("Hecho por Joaquin Parello y Milagros Pocholo", width / 2, height / 2);
    text("Presiona Enter para volver a jugar", width / 2, height - 50);
  }

  manejarCambioEstado() {
    if (this.estado === 'instrucciones') {
      this.estado = 'juego';  // Comienza el juego
    } else if (this.estado === 'juego') {
      // No hacemos nada ya que estamos en el juego
    } else if (this.estado === 'creditos') {
      this.estado = 'instrucciones';  // Volver a instrucciones
      juego = new Juego();  // Reiniciamos el juego
    }
  }
}

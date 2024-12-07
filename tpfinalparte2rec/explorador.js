class Explorador {
  constructor(x, y) {
    this.x = x; //posX
    this.y = y; //posY
    this.velY = 0; //
    this.r = 40; // Radio de forma 
    this.hitboxRadio = 15; 
  }

  mostrar() {
    image(personajeImg, this.x - this.r, this.y - this.r, this.r * 2, this.r * 2); 

      //hitbox marcada
  // noFill();
  // stroke(255, 0, 0); // Rojo para la hitbox de colisión
 //  ellipse(this.x, this.y, this.hitboxRadio * 2, this.hitboxRadio * 2);
  }

  moverse() {
    this.velY += 0.5;  // Aumenta la velocidad en el eje Y
    this.y += this.velY;  

// si toca el suelo 
    if (this.y > height - 80) {
      this.y = height - 80; // queda en el piso
      this.velY = 0; //lo deja fijo
    }
 // Si el explorador sube demasiado 
    if (this.y < 0) {
      juego.pantalla = 'creditos'; 
    }
  }

verificarColision(obstaculo) {
     
  return (this.x - obstaculo.x < this.hitboxRadio + obstaculo.hitboxRadio && this.x - obstaculo.x > -(this.hitboxRadio + obstaculo.hitboxRadio)) && 
  (this.y - obstaculo.y < this.hitboxRadio + obstaculo.hitboxRadio && this.y - obstaculo.y > -(this.hitboxRadio + obstaculo.hitboxRadio));
          }
  saltar() {
      
    this.velY = -10;
    salto.play(); 
  }
}

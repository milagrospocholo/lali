class Obstaculo {
  constructor(x, y, tipo) {
    this.x = x;
    this.y = y;
    this.tipo = tipo; 
    this.img = (this.tipo === 'roca') ? rocaImg : monoImg; 
    this.velY = this.tipo === 'animal' ? random(2, 4) : 4;  
    this.r = 55; 
    this.hitboxRadio = 30; 
  }

  mostrar() {
    image(this.img, this.x - this.r, this.y - this.r, this.r * 2, this.r * 2); // Dibujar el obstáculo
    
                // Mostrar la hitbox de colisión
   //  noFill();
   // stroke(0, 255, 0); // Verde para la hitbox de colisión
   // ellipse(this.x, this.y, this.hitboxRadio * 2, this.hitboxRadio * 2);
  }

  mover(velocidad) {
    this.x -= velocidad;// Mueve el obstáculo hacia la izquierda 
 
    if (this.x < -60) {
      this.x = width + random(100, 300); 
      this.y = random(-100, -50); 
    }

    // Si es un animal, se mueve hacia arriba y hacia abajo
    if (this.tipo === 'animal') {
    
      if (this.y > height - 20) {
        this.velY *= -1;
        this.y = height - 20; 
      }
      // Si el obstáculo se sale por la parte superior, invierte la dirección
      if (this.y < -20) {
        this.velY *= -1;
        this.y = -20; 
      }
 // Mueve el obstáculo hacia arriba o hacia abajo en función de la velocidad vertical
      this.y += this.velY;
    } else { 
      this.y += 1;  
    }
  }
}

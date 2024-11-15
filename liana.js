let lianasImg

function preload(){
lianasImg= loadImage("data/liana1.png");
lianasImg = loadImage("data/liana2.png");
lianasImg = loadImage("data/liana3.png");
}
  
 class Liana {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.velocidadBalanceo = 0.05;
    
  }

  mostrar() {
    stroke(100, 200, 100);
  image(lianasImg, this.x, 0, this.x, this.y);
  }
  
  balancearliana(){
  
  }
}

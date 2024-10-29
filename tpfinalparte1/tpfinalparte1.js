let anchopantalla = 640;
let altopantalla = 480;
let estado = 0;
let imagenes;
let textos; 
//let sonido;

function preload() {
  //sonido = loadSound('data/sonido.mp3');
  imagenes = [];
  for (let i = 0; i < 27; i++) {
    imagenes [i] = loadImage ('data/img-' + i + '.jpg'); 
   }  
  
  textos = [];
  for (let t = 0; t < 23; t ++) {
    textos = loadStrings ("data/textos.txt") ; 
    console.log (t + ":" + textos [t]); 
  }
}

function setup() {
  createCanvas(anchopantalla, altopantalla);
   textAlign(CENTER);

}
function mostrarEstado(estado) {
  textSize(20);
  strokeWeight(4);
  stroke(0);
  fill(255);
  
    if (estado < imagenes.length && imagenes[estado]) {
    image(imagenes[estado], 0, 0, 640, 480);
  } 
  if (estado < textos.length) {
    text(textos[estado], 300, 100); 

  }
   // Muestra los botones en ciertos estados
  if ([1, 5, 9, 17].includes(estado)) {
    fill(255);
    text("opcion2", 400, 410, 90, 30);
    boton (400, 410, 90, 30);
    fill(0);
    text( "opcion1", 200, 410, 90, 30 );
    boton (200, 410, 90, 30);
  }
  
  
  if (estado === 25) {
    fill(255);
    text("opcion3", 200, 410, 90, 30);
    boton (200, 410, 90, 30);
    fill(255);
    text( "opcion2", 310, 410, 90, 30 );
    boton (310, 410, 90, 30);
    fill(255);
    text("opcion1",90, 410, 90, 30);
    boton (90, 410, 90, 30); // Botón extra solo en el estado 25
  }
  
  if ([22, 23, 24, 26].includes(estado)){
    text("Reiniciar", 530, 400, 100, 30); 
  }
  
 if ([22, 23, 24].includes(estado)){
   fill(255);
 text("creditos", 90,410,40);
 
 }
}

function draw() { 
   background(220);
   textSize(25);
   stroke(255,0,9);
   fill(255,0,9);
   mostrarEstado(estado);  
   text ("continuar", 580, 420);
   boton (530 ,400, 100, 30);

   } 
  
  function mousePressed() {
//sonido.play();

  if (estado == 0 && mouseEnCirculo(530, 400, 100, 30)) {
    estado = 1; 
     
  } else if (estado == 1 && mouseEnCirculo(200, 410, 90, 30)) {
    estado = 2; 
    
  } else if (estado == 1 && mouseEnCirculo(400, 410, 90, 30)) {
    estado = 3; 
    
  } else if (estado == 2 && mouseEnCirculo(530, 400, 100, 30)) {
    estado = 4; 
    
  } else if (estado == 3 && mouseEnCirculo(530, 400, 100, 30)) {
    estado = 4; 
    
  } else if (estado == 4 && mouseEnCirculo(530, 400, 100, 30 )) {
    estado = 5; 
    
  } else if (estado == 5 && mouseEnCirculo(200, 410, 90, 30)) {
    estado = 6; 
    
  } else if (estado == 5 && mouseEnCirculo(400, 410, 90, 30)) {
    estado = 7; 
    
  } else if (estado == 6 && mouseEnCirculo(530, 400, 100, 30)) {
    estado = 8;
    
  } else if (estado == 7 && mouseEnCirculo(530, 400, 100, 30)) {
    estado = 8; 
    
  } else if (estado == 8 && mouseEnCirculo(530, 400, 100, 30)) {
    estado = 9; 
    
  } else if (estado == 9 && mouseEnCirculo(200, 410, 90, 30)) {
    estado = 10; 
    
  } else if (estado == 9 && mouseEnCirculo(400, 410, 90, 30)) {
    estado = 11; 
    
  } else if (estado == 10 && mouseEnCirculo(530, 400, 100, 30)) {
    estado = 15; 
    
  } else if (estado == 11 && mouseEnCirculo(530, 400, 100, 30)) {
    estado = 12; 
    
  } else if (estado == 12 && mouseEnCirculo(530, 400, 100, 30)) {
    estado = 13 ; 
    
  } else if (estado == 13 && mouseEnCirculo(530, 400, 100, 30)) {
    estado = 14;
    
  } else if (estado == 14 && mouseEnCirculo(530, 400, 100, 30)) {
    estado = 17; 
    
  } else if (estado == 15 && mouseEnCirculo(530, 400, 100, 30)) {
    estado = 16; 
    
  } else if (estado == 16 && mouseEnCirculo(530, 400, 100, 30)) {
    estado = 17;
    
  } else if (estado == 17 && mouseEnCirculo(200, 410, 90, 30)) {
    estado = 18 ; 
    
  } else if (estado == 17 && mouseEnCirculo( 400, 410, 90, 30 )) {
    estado = 19 ; 
    
  } else if (estado == 18 && mouseEnCirculo( 530, 400, 100, 30)) {
    estado = 21 ; 
    
  } else if (estado == 19 && mouseEnCirculo( 530, 400, 100, 30)) {
    estado = 20 ;
    
  } else if (estado == 20 && mouseEnCirculo( 530, 400, 100, 30)) {
    estado = 25 ;
    
  } else if (estado == 25 && mouseEnCirculo( 90, 410, 40)) {
    estado = 22 ; 
    
  } else if (estado == 25 && mouseEnCirculo( 400, 410, 90, 30)) {
    estado = 23 ; 
    
  } else if (estado == 25 && mouseEnCirculo(200, 410, 90, 30)){
    estado = 24 ; 
    
  } else if (estado == 22 && mouseEnCirculo( 530, 400, 100, 30)) {
 reiniciarPrograma(); 
    
     reiniciarPrograma(); 
  } else if (estado == 23 && mouseEnCirculo( 530, 400, 100, 30)) {
     reiniciarPrograma(); 
     
  } else if (estado == 24 && mouseEnCirculo( 530, 400, 100, 30)) {
     reiniciarPrograma(); 
     
  } else if (estado == 21 && mouseEnCirculo( 530, 400, 100, 30)) {
    estado = 25 
    
  // creditos
   } else if (estado == 22 && mouseEnCirculo(90,410,40)) {
    estado = 26; 
   } else if (estado == 23 && mouseEnCirculo(90, 410, 40)) {
    estado = 26; 
   } else if (estado == 24 && mouseEnCirculo(90, 410, 40)) {
    estado = 26; 
   } else if (estado == 21 && mouseEnCirculo(90, 410, 40)) {
    estado = 25;
   } else if (estado == 26 && mouseEnCirculo(580, 420, 40)) {
    reiniciarPrograma(); 
  }
 
}
  //funciones crean botones
    function mouseEnCirculo(x, y, r) { //Evento de click
  return dist(mouseX, mouseY, x, y) <= r;
}


function boton(h, i, ancho, alto) {
  stroke(255);
  fill(255);
  rect(h, i, ancho, alto); 
}

function reiniciarPrograma() {
  estado = 0; 
   
}

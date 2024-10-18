//milagros pocholo joaquin parello
// comi 4

let anchopantalla = 640;
let altopantalla = 480;
let estado = 0;
let imagenes;
let textos; 
let sonido;


function preload() {
    //carga imagenes 
  sonido = loadSound('data/sonido.mp3');
  imagenes = [];
  for (let i = 0; i < 27; i++) {
    imagenes [i] = loadImage ('data/img-' + i + '.jpg'); 
   }  
  
    //carga lineas de texto
  textos = [];
  for (let t = 0; t < 27; t ++) {
    textos = loadStrings ("data/textos.txt") ; 
    console.log (t + ":" + textos [t]); 
  }
}

function setup() {
  createCanvas(anchopantalla, altopantalla);
   textAlign(CENTER);

}

function mostrarEstado(estado) {
  textSize(25);
  fill(4, 5, 90);
  
    if (estado < imagenes.length && imagenes[estado]) {
    image(imagenes[estado], 0, 0, 640, 480);
  }
  
   
  if (estado < textos.length) {
    text(textos[estado], 300, 100); 
    
  }
   // Muestra los botones en ciertos estados
  if ([1, 5, 9, 17].includes(estado)) {
    fill(255);
    text("opcion2", 410, 440, 40);
    circuloa(410, 410, 40);
    fill(255);
    text( "opcion1", 230, 440, 40 );
    circulob(260, 410, 40);
  }
  
  
  if (estado === 25) {
    fill(255);
    text("opcion3", 410, 440, 40);
    circuloa(410, 410, 40);
    fill(255);
    text( "opcion2", 230, 440, 40 );
    circulob(260, 410, 40);
    fill(255);
    text("opcion1", 86,440,40);
    circuloc(90, 410, 40); // Botón extra solo en el estado 25
  }
  
  if ([22, 23, 24, 26].includes(estado)){
    text("Reiniciar", 570, 400); 
  }
  
 if ([22, 23, 24].includes(estado)){
   fill(255);
 text("creditos", 90,410,40);
 
 }
}

function draw() { 
   background(220);
   textSize(25);
   fill(4, 3, 90);
   mostrarEstado(estado);  
   circulodecontinuar(580, 420, 40);

   } 
  
  function mousePressed() {
sonido.play();

  if (estado == 0 && mouseEnCirculo(580, 420, 40)) {
    estado = 1; 
     
  } else if (estado == 1 && mouseEnCirculo(410, 410, 40)) {
    estado = 2; 
    
  } else if (estado == 1 && mouseEnCirculo(260, 410, 40)) {
    estado = 3; 
    
  } else if (estado == 2 && mouseEnCirculo(580, 420, 40)) {
    estado = 4; 
    
  } else if (estado == 3 && mouseEnCirculo(580, 420, 40)) {
    estado = 4; 
    
  } else if (estado == 4 && mouseEnCirculo(580, 420, 40)) {
    estado = 5; 
    
  } else if (estado == 5 && mouseEnCirculo(410, 410, 40)) {
    estado = 6; 
    
  } else if (estado == 5 && mouseEnCirculo(260, 410, 40)) {
    estado = 7; 
    
  } else if (estado == 6 && mouseEnCirculo(580, 420, 40)) {
    estado = 8;
    
  } else if (estado == 7 && mouseEnCirculo(580, 420, 40)) {
    estado = 8; 
    
  } else if (estado == 8 && mouseEnCirculo(580, 420, 40)) {
    estado = 9; 
    
  } else if (estado == 9 && mouseEnCirculo(410, 410, 40)) {
    estado = 10; 
    
  } else if (estado == 9 && mouseEnCirculo(260, 410, 40)) {
    estado = 11; 
    
  } else if (estado == 10 && mouseEnCirculo(580, 420, 40)) {
    estado = 15; 
    
  } else if (estado == 11 && mouseEnCirculo(580, 420, 40)) {
    estado = 12; 
    
  } else if (estado == 12 && mouseEnCirculo(580, 420, 40)) {
    estado = 13 ; 
    
  } else if (estado == 13 && mouseEnCirculo(580, 420, 40)) {
    estado = 14;
    
  } else if (estado == 14 && mouseEnCirculo(580, 420, 40)) {
    estado = 17; 
    
  } else if (estado == 15 && mouseEnCirculo(580, 420, 40)) {
    estado = 16; 
    
  } else if (estado == 16 && mouseEnCirculo(580, 420, 40)) {
    estado = 17;
    
  } else if (estado == 17 && mouseEnCirculo(410, 410, 40)) {
    estado = 18 ; 
    
  } else if (estado == 17 && mouseEnCirculo( 260, 410, 40 )) {
    estado = 19 ; 
    
  } else if (estado == 18 && mouseEnCirculo( 580, 420, 40)) {
    estado = 21 ; 
    
  } else if (estado == 19 && mouseEnCirculo( 580, 420, 40)) {
    estado = 20 ;
    
  } else if (estado == 20 && mouseEnCirculo( 580, 420, 40)) {
    estado = 25 ;
    
  } else if (estado == 25 && mouseEnCirculo( 90, 410, 40)) {
    estado = 22 ; 
    
  } else if (estado == 25 && mouseEnCirculo( 260, 410, 40)) {
    estado = 23 ; 
    
  } else if (estado == 25 && mouseEnCirculo(410,410,40)){
    estado = 24 ; 
    
  } else if (estado == 22 && mouseEnCirculo( 580, 420, 40)) {
    estado = 0 ;
    
     reiniciarPrograma(); 
  } else if (estado == 23 && mouseEnCirculo( 580, 420, 40)) {
    estado = 0 ; 
     reiniciarPrograma(); 
     
  } else if (estado == 24 && mouseEnCirculo( 580, 420, 40)) {
    estado = 0 ; 
     reiniciarPrograma(); 
     
  } else if (estado == 21 && mouseEnCirculo( 580, 420, 40)) {
    estado = 25 
    
  
   } else if (estado == 22 && mouseEnCirculo(90,410,40)) {
    estado = 26; // Ir a la página de créditos
    
  } else if (estado == 23 && mouseEnCirculo(90, 410, 40)) {
    estado = 26; // Ir a la página de créditos
    
  } else if (estado == 24 && mouseEnCirculo(90, 410, 40)) {
    estado = 26; // Ir a la página de créditos
    
  } else if (estado == 21 && mouseEnCirculo(90, 410, 40)) {
    estado = 25;
        
  } else if (estado == 26 && mouseEnCirculo(580, 420, 40)) {
    estado = 0 ;
  
  }
 
}
  //funciones crean botones
   
   function mouseEnCirculo(x, y, r) { //Evento de click
  return dist(mouseX, mouseY, x, y) <= r;
}

function circulodecontinuar(h, i, j) {
  stroke(255);
  fill(227, 124, 124);
  circle(h, i, j);
}

function circuloa(h, i, j) {
  stroke(255);
  fill(224, 0, 245);
  circle(h, i, j);
}

function circulob(h, i, j) {
  stroke(255);
  fill(224, 0, 245);
  circle(h, i, j);
}


function circuloc(h, i, j) {
  stroke(255);
  fill(224, 0, 245);
  circle(h, i, j);
}

function reiniciarPrograma() {
  estado = 0; 
  
  draw(); 
}

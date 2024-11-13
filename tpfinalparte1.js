
let estado = 0;
let imagenes;
let textos; 
let sonido;

function preload() {
  sonido = loadSound('data/sonido.mp3');
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
  createCanvas(640,480);

   textAlign(CENTER);

}

function mostrarEstado(estado) {
  textSize(20);
  strokeWeight(4);
  stroke(0);
  fill(255);

  // Mostrar imagen si corresponde
  if (estado < imagenes.length && imagenes[estado]) {
    image(imagenes[estado], 0, 0, 640, 480);
  }

   // Mostrar texto si corresponde
  if (estado < textos.length) {
    let texto = textos[estado];
    let margen = 20;  // Margen desde los bordes
    let anchoMaximo = width - 2 * margen; // El ancho máximo disponible
    let altoMaximo = height - 2 * margen; // El alto máximo disponible
    
  
    textFont('Arial'); // Opcional: establecer una fuente
    textSize(20); // Tamaño de texto

    // Mostrar el texto en múltiples líneas si es necesario
    text(texto, margen, 100, anchoMaximo, altoMaximo);  // Se ajustará automáticamente el texto en el área disponible
  }

  // Botones para ciertos estados
  let botonesEstado1 = [1, 5, 9, 17];
  let botonesEstado2 = [22, 23, 24, 26];

  if (botonesEstado1.includes(estado)) {
    mostrarBotones([200, 400], ["opcion1", "opcion2"]);
  }

  if (estado === 25) {
    mostrarBotones([90, 200, 310], ["opcion1", "opcion2", "opcion3"]);
  }

  if (botonesEstado2.includes(estado)) {
    text("Reiniciar", 500, 400, 100, 30);
  }

  if ([22, 23, 24].includes(estado)) {
    fill(255);
    text("creditos", 100, 400, 40);
  }
}

// Función para mostrar los botones
function mostrarBotones(posiciones, textosBotones) {
  for (let i = 0; i < posiciones.length; i++) {
    boton(posiciones[i], 410, 90, 30);
    fill(255, 0, 9);
    text(textosBotones[i], posiciones[i], 410, 90, 30);
  }
}


function draw() { 
  background(220);
   textSize(25);
   strokeWeight(5);
   stroke(255,0,9);
   // fill(255,0,9);
   mostrarEstado(estado);  

   let estadosConOpciones = [1, 5, 9, 17, 25]; // Los estados donde hay opciones visibles
   let estadosFinales = [22, 23, 24, 26]; // Los estados finales donde no debe aparecer "continuar"

   if (!estadosConOpciones.includes(estado) && !estadosFinales.includes(estado)) {
     boton(530, 400, 100, 30);
     fill(255, 0, 9); 
     text("continuar", 580, 420);
   }

   } 

function mousePressed() {
sonido.play();
  if (estado == 0 && mouseEnCirculo(620, 400, 100, 30)) {
    estado = 1; 
  } else if (estado == 1 && mouseEnCirculo(200, 410, 90, 30)) {
    estado = 2; 
  } else if (estado == 1 && mouseEnCirculo(400, 410, 90, 30)) {
    estado = 3; 
  } else if (estado == 2 && mouseEnCirculo(620, 400, 100, 30)) {
    estado = 4; 
  } else if (estado == 3 && mouseEnCirculo(620, 400, 100, 30)) {
    estado = 4; 
  } else if (estado == 4 && mouseEnCirculo(620, 400, 100, 30)) {
    estado = 5; 
  } else if (estado == 5 && mouseEnCirculo(200, 410, 90, 30)) {
    estado = 6; 
  } else if (estado == 5 && mouseEnCirculo(400, 410, 90, 30)) {
    estado = 7; 
  } else if (estado == 6 && mouseEnCirculo(620, 400, 100, 30)) {
    estado = 8;
  } else if (estado == 7 && mouseEnCirculo(620, 400, 100, 30)) {
    estado = 8; 
  } else if (estado == 8 && mouseEnCirculo(620, 400, 100, 30)) {
    estado = 9; 
  } else if (estado == 9 && mouseEnCirculo(200, 410, 90, 30)) {
    estado = 10; 
  } else if (estado == 9 && mouseEnCirculo(400, 410, 90, 30)) {
    estado = 11; 
  } else if (estado == 10 && mouseEnCirculo(620, 400, 100, 30)) {
    estado = 15; 
  } else if (estado == 11 && mouseEnCirculo(620, 400, 100, 30)) {
    estado = 12; 
  } else if (estado == 12 && mouseEnCirculo(620, 400, 100, 30)) {
    estado = 13; 
  } else if (estado == 13 && mouseEnCirculo(620, 400, 100, 30)) {
    estado = 14;
  } else if (estado == 14 && mouseEnCirculo(620, 400, 100, 30)) {
    estado = 17; 
  } else if (estado == 15 && mouseEnCirculo(620, 400, 100, 30)) {
    estado = 16; 
  } else if (estado == 16 && mouseEnCirculo(620, 400, 100, 30)) {
    estado = 17;
  } else if (estado == 17 && mouseEnCirculo(200, 410, 90, 30)) {
    estado = 18 ; 
  } else if (estado == 17 && mouseEnCirculo( 400, 410, 90, 30 )) {
    estado = 19 ; 
  } else if (estado == 18 && mouseEnCirculo( 620, 400, 100, 30)) {
    estado = 21 ; 
  } else if (estado == 19 && mouseEnCirculo( 620, 400, 100, 30)) {
    estado = 20 ;
  }  else if (estado == 21 && mouseEnCirculo( 620, 400, 100,30)) {
    estado = 20; // Transición correcta a la pantalla de créditos
  }else if (estado == 20 && mouseEnCirculo( 620, 400, 100, 30)) {
    estado = 25 ;
  } else if (estado == 25 && mouseEnCirculo( 90, 410, 40)) {
    estado = 22 ; 
  } else if (estado == 25 && mouseEnCirculo( 400, 410, 90, 30)) {
    estado = 23 ; 
  } else if (estado == 25 && mouseEnCirculo(200, 410, 90, 30)){
    estado = 24 ; 
  } else if (estado == 22 && mouseEnCirculo( 500, 400, 100, 30)) {
    reiniciarPrograma(); 
  } else if (estado == 23 && mouseEnCirculo( 500, 400, 100, 30)) {
    reiniciarPrograma(); 
  } else if (estado == 24 && mouseEnCirculo( 500, 400, 100, 30)) {
    reiniciarPrograma(); 
  } 
  // Aquí asegúrate que la transición a la pantalla de créditos esté bien estructurada
  else if (estado == 22 && mouseEnCirculo(100,400,40)) {
    estado = 26; 
  } else if (estado == 23 && mouseEnCirculo(100, 400, 40)) {
    estado = 26; 
  } else if (estado == 24 && mouseEnCirculo(100, 400, 40)) {
    estado = 26; 
  } else if (estado == 26 && mouseEnCirculo(500, 400, 40)) {
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

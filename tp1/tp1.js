// Milagros pocholo
//comi 4


function preload(){
img= loadImage('data/optica.jpg');
}
function setup() {
createCanvas(800,400);
image(img, 0, 0, 400, 400);
}

let estado = "reiniciar";


function colores(est) {
  let val = 0;

  if (est === "col") {
    if (mouseIsPressed) { //el mouse ESTA presionado 
      val = mouseY / 2;
    } else {
      val = random(255); // el valor de color es aleatorio
    }
  }

  return val; // retornar el valor
}


function draw() {
stroke(0);
background(255);
push();
grilla(400);
pop();
image(img,0,0,400,400);


}




function dibujarCuadrados(an, al){
   //an = 1;
   //al = 1;
 
  let size = 200;
  let decrement = 40; // decremento de los cuadrados
  
 // Coordenadas para centrar los cuadrados 
 let x = 800 / 2 + an;
 let y = 400 / 2 - al;
  
   // Dibujar 5 cuadrados uno dentro del otro
    for (let i = 0; i < 5; i++) {
    
  //condicionales que marcan el relleno del cuadrado
    if(  i % 2 == 0){
    fill(0);
     }else if( estado == "col"){
       fill(colores ( estado ), 50, 50);
     }else{ 
       fill(255);
     }
       rect(x, y, size, size); // Dibujar el cuadrado
       
        size -= decrement; // Reducir el tamaño del cuadrado
     
      x += decrement / 2; // Ajustar coordenada x
      
    y += decrement / 2; // Ajustar coordenada y
     
   if(estado== "movimento"){
   frameRate(5); // baja el framerate para que se vea lento el movimiento 
   
   rotate(PI/random(0,2)); //hace que los cuadrados roten de manera random o aleatoria 
   }  
 }
 }
 
 
 function grilla (x){
  //let x;
  let l=200;
  for(let c = 0; c < 2; c += 1){
    for(let f = 0; f < 2; f += 1){
      rect(x + f * l, c * l,l ,l);
     
     dibujarCuadrados (200, 200);
     dibujarCuadrados (0, 200); 
     dibujarCuadrados (0, 0); 
     dibujarCuadrados (200, 0);
     dibujarCuadrados (100, 100); //cuadrado del medio
     
     //if (dibujarCuadrados == true ) {
     //  console.log ("esta"); 
     //}
 }
}
}
 
 
function keyPressed(){
if(key == 'm'){
estado = "movimento";
}else if (key == 'c'){
estado = "col";
}else if (key == 'r'){
estado = "reiniciar";//sistema de estados manejada con las teclas, reiniciar con r 
 }
}

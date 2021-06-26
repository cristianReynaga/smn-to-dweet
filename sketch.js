/*

Este ejemplo escribe datos en el endpoint wemos_ortuzar cada vez que se hace click en pantalla.
Transmite la posición X del mouse con el nombre de variable "mouse_x".

*/

let url_dweet = 'https://dweet.io:443/dweet/for/smn_cristian';
let mouse_x="";
let fontMontserrat;
let mouse_x_print;

let ubicacion_1 = 217; // Tolhuin
let ubicacion_2 = 26; // Victorica, La Pampa
let ubicacion_3 = 34; // 9 de Julio, Buenos Aires

let wind_ubicacion_1;
let wind_ubicacion_2;
let wind_ubicacion_3;

let timer_minutos=5;


var url_smn = "https://ws.smn.gob.ar/map_items/weather";

function preload() {
  fontMontserrat= loadFont('assets/Montserrat-Medium.ttf');
}

function consultarAPI() {
  loadJSON(url_smn, gotData);
}

function gotData(data) {
  //agrego a las variables los datos de la API

  wind_ubicacion_1 = data[ubicacion_1].weather.wind_speed;
  wind_ubicacion_2 = data[ubicacion_2].weather.wind_speed;
  wind_ubicacion_3 = data[ubicacion_3].weather.wind_speed;

  console.log(millis()/1000);
  console.log("Viento Tolhuin", wind_ubicacion_1);
  console.log("Viento Victorica", wind_ubicacion_2);
  console.log("Viento Buenos Aires", wind_ubicacion_3);
  
  viento_smn = { 
    viento_ubicacion_1: wind_ubicacion_1,
    viento_ubicacion_2:wind_ubicacion_2,
    viento_ubicacion_3:wind_ubicacion_3
  };
  console.log(viento_smn)
  httpPost(url_dweet, 'json', viento_smn,function(result) {
    
  });
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  
  
  setInterval(consultarAPI, timer_minutos*1000*60); //esta función es la que consulta datos cada 5000 milisegundos

}

function draw (){

  background(80, 150, 150);
  //textFont(fontMontserrat);
  fill(255);
  textSize(16)
  //text("Datos enviados a smn_cristian", 30, 100);  
  //text(wind_ubicacion_1, 30, 180);
  
  /*
  console.log("Viento Tolhuin", wind_ubicacion_1);
  console.log("Viento Victorica", wind_ubicacion_2);
  console.log("Viento Buenos Aires", wind_ubicacion_3);
*/
}




function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

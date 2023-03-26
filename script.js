/* 
Se recogen los siguientes datos para una encuesta: ciudad, sexo (H o M) y edad (0 a 110)

Calcule e informe los siguientes datos:

Promedio de edad general
Promedio de edad de las mujeres
Promedio de edad de los hombres
Porcentaje de mujeres menores a 21 años
Porcentaje de hombres mayores a 21 años
La mayor edad ingresada de las mujeres
La menor edad ingresada de los hombres
Los tres valores ingresados deben ser validados según corresponda

 */

let ciudad;
let sexo;
let edad;

let contadorEdad = 0;
let contadorMujer = 0;
let contadorHombre = 0;
let acumuladorHombre = 0;
let acumuladorMujer = 0;
let mujer21 = 0;
let hombre21 = 0;
let maxedadmujer = 0;
let minedadhombre = 111;


while (confirm ('¿Desea ingresar sus datos?'))
 {
    do {
        ciudad = prompt('Ingrese su ciudad');
    
} while (!isNaN(ciudad));

    do {
        sexo = prompt('Ingrese H o M').toUpperCase();
    
} while (!(sexo == 'H' || sexo == 'M'));

    do {
        edad = parseInt(prompt('Ingrese su edad'));
    
} while (isNaN(edad) || edad < 0 || edad > 111);
 
 if(sexo == 'M'){
    contadorMujer++
    acumuladorMujer += edad;
        if(edad < 22){
        mujer21++
    }
    if(edad > maxedadmujer){
        maxedadmujer = edad;
    }
    
 }
 if(sexo == 'H'){
    contadorHombre++
    acumuladorHombre += edad;
    if(edad > 20){
        hombre21++
    }
    if(edad < minedadhombre){
        minedadhombre = edad;
    }
        
}
 }

 console.log(`El Promedio de edad de todas las Mujeres ingresadas es: ${(acumuladorMujer / contadorMujer).toFixed(2)}`);
 console.log(`El Promedio de edad de todos los Hombres ingresados es: ${(acumuladorHombre / contadorHombre).toFixed(2)}`);
 console.log(`El Promedio de edad de General es: ${((acumuladorHombre + acumuladorMujer) / (contadorHombre + contadorMujer)).toFixed(2)}`);
 console.log(`El Porcentaje de Mujeres menores a 21 años es: ${(mujer21 / contadorMujer * 100).toFixed(2)} %`);
 console.log(`El Porcentaje de Hombres mayores a 21 años es: ${(hombre21 / contadorHombre * 100).toFixed(2)} %`);
 console.log(`La edad máxima de una mujer ingresada es: ${maxedadmujer}`);
 console.log(`La edad mínima de un hombre ingresada es: ${minedadhombre}`);
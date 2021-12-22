/**
 * 1. Crea una función que reciba como parámetro la edad de un perro
 * y permita calcular la edad actual en años humanos del mismo y
 * lo muestre en consola (solicita los parámetros que consideres
 * necesarios por consola).
 */

/**
 * La nueva fórmula que se adapta mejor al comparar
 * las etapas de la vida canina-humana es la siguiente:
 * edad humana = 16 ln (edad del perro) + 31.
 *https://www.niusdiario.es/como/calcular-edad-perro-anos-humanos-evn3m_18_3067845059.html
 */

let edadPerro = prompt("Ingrese la edad de su perro ");
edadPerro = parseFloat(edadPerro);

function calcularedad(edadPerro) {
  let edadHumana = 16 * Math.log(edadPerro) + 31;
  edadHumana = edadHumana.toFixed(2); //Se acorta el resultado a 2 decimales
  let resultado = console.log(
    "La edad actual de su perro es de: " + edadHumana + " años humanos"
  );
  return resultado;
}

calcularedad(edadPerro);

/**
 * 2. Crea una función que reciba por parámetro la edad máxima a la que te gustaría llegar (sin bromas por favor)
 * y el número de tu bocadillo favorito que te gusta comer por día, esta debe regresar por consola
 * cuanta cantidad de ese producto necesitarías para poderlo comer por lo que te resta de vida
 * (solicita los parámetros que consideres necesarios por consola).
 */
let edadActual = prompt("Ingrese tu edad actual: ");
edadActual = parseInt(edadActual);
let edadDeseada = prompt(
  "Ingrese la edad máxima a la que le gustaria llegar: "
);
edadDeseada = parseInt(edadDeseada);
let numBocadillo = prompt(
  "Ingrese la cantidad  de tu bocadillo favorito que te gusta comer por día: "
);
numBocadillo = parseInt(numBocadillo);

function calculaAlimento(edadActual, edadDeseada, numBocadillo) {
  let anosporvivir = edadDeseada - edadActual;
  let produtonecesario = numBocadillo * 365 * anosporvivir;
  let resultado = console.log(
    `A usted le quedan ` +
      anosporvivir +
      ` años de vida ` +
      ` Y la cantidad que necesita de su producto para el resto de su vida es ` +
      produtonecesario
  );
  return resultado;
}

calculaAlimento(edadActual, edadDeseada, numBocadillo);

/**
 * 3. Crea una función que calcule la circunferencia y el área de un círculo
 * (usa funciones anidadas) y regrese por consola los resultados obtenidos
 * (solicita los parámetros que consideres necesarios por consola).
 */

let radio = prompt("Digite el radio de la circunferencia:");
radio = parseFloat(radio);

function calculoCircunferencia(radio) {
  let circunferencia = Math.PI * (2 * radio);
  circunferencia = circunferencia.toFixed(4);
  console.log("La circunferencia es: " + circunferencia + ` Unides`);
  function calculoAreaCirculo(radio) {
    area = Math.PI * Math.pow(radio, 2);
    area = area.toFixed(3);
    console.log("El área del circulo es: " + area + ` Unidades Cuadradas`);
  }
  return calculoAreaCirculo(radio);
}

calculoCircunferencia(radio);

/**
 * 4. Crea una función que convierta la temperatura en grados Celsius, Fahrenheit y Kelvin en ese orden
 * y con base en el resultado anterior calcular los siguientes para mostrarlos en consola
 * (funciones anidadas o por separado) (solicita los parámetros que consideres necesarios por consola).
 */

let gCelsius = prompt("Ingrese la temperatura en Grados Celsius: ");
gCelsius = parseFloat(gCelsius);

function convertidoraTemperatura(gCelsius) {
  console.log("Grados Celcius: " + gCelsius);
  function celsiusAFahrenheit(gCelsius) {
    let gFahrenheit = gCelsius * (9 / 5) + 32;
    console.log("Grados Fahrenheit: " + gFahrenheit);
    function fahrenheitAKelvin(gFahrenheit) {
      let gKelvin = (gFahrenheit - 32) * (5 / 9) + 273.15;
      console.log("Grados Kelvin: " + gKelvin);
    }
    return fahrenheitAKelvin(gFahrenheit);
  }
  return celsiusAFahrenheit(gCelsius);
}
convertidoraTemperatura(gCelsius);

/**
 * 5. Crea una función que con base en la palabra ingresada te diga cuantas vocales tiene en total
 * y desgloce la cantidad por cada vocal de la misma
 * (solicita los parámetros que consideres necesarios por consola).
 */

/**
 * 5. Crea una función que con base en la palabra ingresada te diga cuantas vocales tiene en total
 * y desgloce la cantidad por cada vocal de la misma
 * (solicita los parámetros que consideres necesarios por consola).
 */

 let palabra = prompt("Ingrese la palabra:");

 function numeroDeVocales(palabra) {
   if (palabra.match(/[aeiouAEIOU]/gi)) {
     let numeroVocales = palabra.match(/[aeiouAEIOU]/gi).length;
     console.log("El número de Vocales en total es: " + numeroVocales);
     cantidadVocales(palabra);
   } else {
     console.log("La palabra no tiene vocales");
     cantidadVocales(palabra);
   }
 }
 numeroDeVocales(palabra);
 
 function cantidadVocales(palabra) {
     function contarA(palabra) {
       if ((palabra.includes(`a`)||palabra.includes(`A`))){
       let numeroA = palabra.match(/[aA]/gi).length;
       console.log("El número de A en total es: " + numeroA);
       }else{
         console.log("El número de A en total es: 0");
       }
     }
   function contarE(palabra) {
       if ((palabra.includes(`e`)||palabra.includes(`E`))){
       let numeroE = palabra.match(/[eA]/gi).length;
       console.log("El número de E en total es: " + numeroE);
       }else{
         console.log("El número de E en total es: 0");
       }
     }
       function contarI(palabra) {
       if ((palabra.includes(`i`)||palabra.includes(`I`))){
       let numeroI = palabra.match(/[iI]/gi).length;
       console.log("El número de I en total es: " + numeroI);
       }else{
         console.log("El número de I en total es: 0");
       }
     }
       function contarO(palabra) {
       if ((palabra.includes(`o`)||palabra.includes(`O`))){
       let numeroO = palabra.match(/[oO]/gi).length;
       console.log("El número de O en total es: " + numeroO);
       }else{
         console.log("El número de O en total es: 0");
       }
     }
       function contarU(palabra) {
       if ((palabra.includes(`u`)||palabra.includes(`U`))){
       let numeroU = palabra.match(/[uU]/gi).length;
       console.log("El número de U en total es: " + numeroU);
       }else{
         console.log("El número de U en total es: 0");
       }
     }
     return (
       contarA(palabra),
       contarE(palabra),
       contarI(palabra),
       contarO(palabra),
       contarU(palabra)
     );
   }
/* Crea una función que calcule el índice de masa corporal (IMC)de una persona a partir
 de su altura en metros y peso en kilogramos,que se recibirán como parámetros.*/

 function indiceMasaCorporal(peso,metros) {
    let Masacorporal = peso/(metros **2)
    return Masacorporal
 }
let resultadoIMC = indiceMasaCorporal(75,1.73)
console.log(`tu indice de masa corporal es ${resultadoIMC}`);

//Crea una función que calcule el valor del factorial de un número pasado como parámetro.

function factorial(numero) {
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}

console.log("El factorial de 5 es: " + factorial(5));

/* Crea una función que convierta un valor en dólares, pasado como parámetro,
y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo 
con el valor del dólar en tu país). Para esto, considera la cotización del dólar
 igual a R$4,80.*/

 function convertirareales(numero) {
    let resultado = numero * 5.564
    return resultado
 }

 let resultado2 = convertirareales(5)
 console.log(`el resultado es ${resultado2}`)

 //Crea una función que muestre en pantalla el área y el perímetro de una sala
 //rectangular, utilizando la altura y la anchura que se proporcionarán como
 //parámetros.

function calcularAreaYPerimetro(base, altura) {
    return {
        area: base * altura,
        perimetro: 2 * (base + altura)
    };
}

let resultado = calcularAreaYPerimetro(8, 2);
console.log(`El área es ${resultado.area} y el perímetro es ${resultado.perimetro}`);

//Crea una función que muestre en pantalla el área y el perímetro de una sala circular,
//  utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

function calcularAreaYPerimetroCircular(radio) {
    const PI = 3.14;
    let area = PI * (radio ** 2);
    let perimetro = 2 * PI * radio;

    console.log(`Para un radio de ${radio}:`);
    console.log(`Área: ${area}`);
    console.log(`Perímetro: ${perimetro}`);
}

// Ejemplo de uso:
calcularAreaYPerimetroCircular(5);

//Crea una función que muestre en pantalla la tabla de multiplicar de un número dado
//  como parámetro.


function mostrarTablaMultiplicar(numero) {
    console.log(`Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

mostrarTablaMultiplicar(7);

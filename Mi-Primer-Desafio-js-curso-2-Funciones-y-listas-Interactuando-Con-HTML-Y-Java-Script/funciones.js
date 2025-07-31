//Crear una función que muestre "¡Hola, mundo!" en la consola.

function saludar() {
    console.log("hola mundo")
}
saludar();

//Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.

function saludo(nombre) {
    console.log(`Hola ${nombre}`)
}

saludo("felipe");

//Crear una función que reciba un número como parámetro y devuelva el doble de ese número.

function operacion(numero) {
    let doble = numero * 2
    console.log(`el doble de ${numero} es ${doble}`)
    
}

operacion("8");

//Crear una función que reciba tres números como parámetros y devuelva su promedio.

function promedio(numero1,numero2,numero3) {
    let operacionNumeros = (numero1 + numero2 + numero3)/3
    console.log(`el promedio de los números ${numero1},${numero2},y ${numero3} es ${operacionNumeros}`) 

}

promedio(25,55,30);

//Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.


function mayorDeDosNumeros(numero3,numero4){
    if (numero3 > numero4){
        console.log(`el mayor de los números es ${numero3}`)
    }else if (numero3 < numero4){
        console.log(`el mayor de los números es ${numero4}`)
    }else{
        console.log("los números son iguales")
    }
}

mayorDeDosNumeros(40,40);

//Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.

function multiplicacionNumero(miGranNumero) {
    let multiplicación = miGranNumero * miGranNumero
    console.log(`la multiplicación de ${miGranNumero} es ${multiplicación}`)
    
}

multiplicacionNumero(8);

//Cambia el contenido de la etiqueta h1 con document.querySelector 
// y asigna el siguiente texto: "Hora del Desafío".

let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora del Desafío"

// Crea una función que muestre en la consola el mensaje
//  "El botón fue clicado" siempre que se presione el botón "Console".

function eventoconsole(){
    console.log("el boton fue clicado")
    alert("el boton fue clicado")
}

/* Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando 
el nombre de una ciudad de Brasil. Luego,
  muestra una alerta con el mensaje concatenando la respuesta
   con el texto: "Estuve en {ciudad} y me acordé de ti".  */

function pregunta(){
    let preguntausuario = prompt("por favor dime una ciudad de brasil que más te guste")
    console.log(preguntausuario)
    alert(`Genial,el año pasado estuve allí en ${preguntausuario} y me acorde de tí`)

}

/*Crea una función que muestre una alerta con el mensaje:
 "Yo amo JS" siempre que se presione el botón "Alerta". */

function mensaje(){
    console.log("yo amo java script")
    alert("Yo amo Java-Script")
}

//Al hacer clic en el botón "suma", pide 2 números y muestra el resultado
//  de la suma en una alerta.

function suma(){
    let numero1 = parseInt(prompt("por favor dime el primer número"))
    console.log(numero1)
    let numero2 = parseInt(prompt("por favor dime el segundo número"))
    console.log(numero2)
    let resultado = numero1 + numero2
    alert(`El resultado es una suma para los números ${numero1} y ${numero2} es ${resultado}`)


    
}
